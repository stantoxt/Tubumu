﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ApplicationModels;
using Microsoft.AspNetCore.Mvc.Internal;
using Microsoft.AspNetCore.Routing;
using Microsoft.AspNetCore.SignalR;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection.Extensions;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;
using OrchardCore.Modules;
using Swashbuckle.AspNetCore.Swagger;
using Tubumu.Modules.Framework.Authorization;
using Tubumu.Modules.Framework.Extensions;
using Tubumu.Modules.Framework.Mappings;
using Tubumu.Modules.Framework.Models;
using Tubumu.Modules.Framework.SignalR;
using Tubumu.Modules.Framework.Swagger;

namespace Tubumu.Modules.Framework
{
    public class Startup : StartupBase
    {
        private readonly IConfiguration _configuration;
        private readonly IHostingEnvironment _environment;
        private readonly ILogger<Startup> _logger;
        public Startup(
            IConfiguration configuration,
            IHostingEnvironment environment,
            ILogger<Startup> logger)
        {
            _configuration = configuration;
            _environment = environment;
            _logger = logger;
        }

        public override void ConfigureServices(IServiceCollection services)
        {
            // Cache
            services.AddDistributedRedisCache(options =>
            {
                options.Configuration = "localhost";
                options.InstanceName = _environment.ApplicationName + ":";
            });

            // Cors
            services.AddCors(options => options.AddPolicy("DefaultPolicy",
                builder => builder.WithOrigins("http://localhost:9090", "http://localhost:8080").AllowAnyMethod().AllowAnyHeader().AllowCredentials())
                // builder => builder.AllowAnyOrigin.AllowAnyMethod().AllowAnyHeader().AllowCredentials())
            );

            // Cookie
            services.Configure<CookiePolicyOptions>(options =>
            {
                options.CheckConsentNeeded = context => false; // 需保持为 false, 否则 Web API 不会 Set-Cookie 。
                options.MinimumSameSitePolicy = SameSiteMode.None;
            });

            // Session
            services.AddSession(options =>
            {
                options.IdleTimeout = TimeSpan.FromMinutes(10);
                options.Cookie.Name = ".Tubumu.Session";
                options.Cookie.HttpOnly = true;
            });

            // HTTP Client
            services.AddHttpClient();

            // ApiBehaviorOptions
            services.Configure<ApiBehaviorOptions>(options =>
            {
                options.InvalidModelStateResponseFactory = context => new OkObjectResult(new ApiResult
                {
                    Code = 400,
                    Message = context.ModelState.FirstErrorMessage()
                });
            });

            // Authentication
            var registeredServiceDescriptor = services.FirstOrDefault(s => s.Lifetime == ServiceLifetime.Transient && s.ServiceType == typeof(IApplicationModelProvider) && s.ImplementationType == typeof(AuthorizationApplicationModelProvider));
            if (registeredServiceDescriptor != null)
            {
                services.Remove(registeredServiceDescriptor);
            }
            services.AddTransient<IApplicationModelProvider, PermissionAuthorizationApplicationModelProvider>();

            var tokenValidationSettings = _configuration.GetSection("TokenValidationSettings").Get<TokenValidationSettings>();
            services.AddSingleton(tokenValidationSettings);
            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                .AddJwtBearer(options =>
                {
                    options.TokenValidationParameters = new TokenValidationParameters
                    {
                        ValidIssuer = tokenValidationSettings.ValidIssuer,
                        ValidateIssuer = true,

                        ValidAudience = tokenValidationSettings.ValidAudience,
                        ValidateAudience = true,

                        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(tokenValidationSettings.IssuerSigningKey)),
                        ValidateIssuerSigningKey = true,

                        ValidateLifetime = true,
                    };

                    // We have to hook the OnMessageReceived event in order to
                    // allow the JWT authentication handler to read the access
                    // token from the query string when a WebSocket or 
                    // Server-Sent Events request comes in.
                    options.Events = new JwtBearerEvents
                    {
                        OnMessageReceived = context =>
                        {
                            var accessToken = context.Request.Query["access_token"];

                            // If the request is for our hub...
                            var path = context.HttpContext.Request.Path;
                            if (!string.IsNullOrEmpty(accessToken) && path.StartsWithSegments("/hubs"))
                            {
                                // Read the token out of the query string
                                context.Token = accessToken;
                            }
                            return Task.CompletedTask;
                        },
                        OnAuthenticationFailed = context =>
                        {
                            _logger.LogError($"Authentication Failed(OnAuthenticationFailed): {context.Request.Path} Error: {context.Exception}");
                            return Task.CompletedTask;
                        },
                        OnChallenge = context =>
                        {
                            _logger.LogError($"Authentication Challenge(OnChallenge): {context.Request.Path}");
                            return Task.CompletedTask;
                        }
                    };
                });

            // JSON Date format
            void JsonSetup(MvcJsonOptions options) => options.SerializerSettings.DateFormatString = "yyyy-MM-dd HH:mm:ss";
            services.Configure((Action<MvcJsonOptions>) JsonSetup);

            // SignalR
            services.AddSignalR();
            services.Replace(ServiceDescriptor.Singleton(typeof(IUserIdProvider), typeof(NameUserIdProvider)));

            // AutoMapper
            services.AddAutoMapper();
            Initalizer.Initialize();

            // Swagger
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new Info { Title = "Tubumu API", Version = "v1" });
                c.AddSecurityDefinition("Bearer", new ApiKeyScheme
                {
                    Description = "权限认证(数据将在请求头中进行传输) 参数结构: \"Authorization: Bearer {token}\"",
                    Name = "Authorization",
                    In = "header",
                    Type = "apiKey"
                });
                var security = new Dictionary<string, IEnumerable<string>>
                {
                    {"Bearer", new string[] { }},
                };
                c.AddSecurityRequirement(security);
                c.DocumentFilter<HiddenApiFilter>();
            });
        }

        public override void Configure(IApplicationBuilder app, IRouteBuilder routes, IServiceProvider serviceProvider)
        {
            app.UseCookiePolicy();
            app.UseSession();
            app.UseCors("DefaultPolicy");
            app.UseAuthentication();

            // Swagger
            app.UseSwagger();
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "Tubumu API v1");
            });
        }
    }
}
