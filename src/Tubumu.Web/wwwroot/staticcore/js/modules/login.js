webpackJsonp([12],{"/rEA":function(e,t,n){"use strict";(function(e){function o(e,t,n){this.name="ApiError",this.message=e||"Default Message",this.errorType=t||h.Default,this.innerError=n,this.stack=(new Error).stack}var r=n("//Fk"),i=n.n(r),a=n("mvHQ"),s=n.n(a),l=n("OvRC"),u=n.n(l),d=n("mtWM"),f=n.n(d),c=n("mw3O"),m=n.n(c),p=n("bzuE"),h={Default:"default",Sysetem:"sysetem"};(o.prototype=u()(Error.prototype)).constructor=o;var g=f.a.create({baseURL:p.a,timeout:2e4,responseType:"json",withCredentials:!0});g.interceptors.request.use(function(e){return"post"===e.method||"put"===e.method||"patch"===e.method?(e.headers={"Content-Type":"application/json; charset=UTF-8"},e.data=s()(e.data)):"delete"!==e.method&&"get"!==e.method&&"head"!==e.method||(e.paramsSerializer=function(e){return m.a.stringify(e,{arrayFormat:"indices"})}),localStorage.token&&(e.headers.Authorization="Bearer "+localStorage.token),e},function(e){return e}),g.interceptors.response.use(function(t){if(-1===t.headers["content-type"].indexOf("json"))return t;var n=void 0;if("arraybuffer"===t.request.responseType&&"[object ArrayBuffer]"===t.data.toString()){var r=e.from(t.data).toString("utf8");console.log(r),n=JSON.parse(r)}else n=t.data;if(n){if(n.token&&(localStorage.token=n.token),n.refreshToken&&(localStorage.refreshToken=n.refreshToken),n.url)return void(top.location=n.url);if(200!==n.code)return console.log(n),i.a.reject(new o(n.message))}return t},function(e){if(console.log(e.response.headers),401===e.response.status&&e.response.headers["token-expired"]&&localStorage.token&&localStorage.refreshToken){console.log("Refresh Token");var t={token:localStorage.token,refreshToken:localStorage.refreshToken};return localStorage.removeItem("token"),localStorage.removeItem("refreshToken"),g.post("/admin/refreshToken",t),i.a.reject(new o("登录超时，自动登录中......",h.Sysetem,e))}return i.a.reject(new o(e.message,h.Sysetem,e))}),t.a={install:function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];e.httpClient=g,e.prototype.$httpClient=g}}}).call(t,n("EuP9").Buffer)},Humt:function(e,t,n){"use strict";var o={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-form",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:e.isLoading,expression:"isLoading",modifiers:{fullscreen:!0,lock:!0}}],ref:"mainForm",staticClass:"container",attrs:{model:e.mainForm,rules:e.mainFormRules,"label-position":"left","label-width":"0px"}},[n("h3",{staticClass:"title"},[e._v("系统登录")]),e._v(" "),n("el-form-item",{attrs:{prop:"account"}},[n("el-input",{ref:"account",attrs:{type:"text",autocomplete:"on",placeholder:"账号(用户名、手机号或邮箱)",autofocus:""},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.handleFocus("password")}},model:{value:e.mainForm.account,callback:function(t){e.$set(e.mainForm,"account","string"==typeof t?t.trim():t)},expression:"mainForm.account"}},[n("font-awesome-icon",{attrs:{slot:"prefix",icon:"user-secret"},slot:"prefix"})],1)],1),e._v(" "),n("el-form-item",{attrs:{prop:"password"}},[n("el-input",{ref:"password",attrs:{type:"password",autocomplete:"off",placeholder:"密码"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.handleFocus("validationCode")}},model:{value:e.mainForm.password,callback:function(t){e.$set(e.mainForm,"password","string"==typeof t?t.trim():t)},expression:"mainForm.password"}},[n("font-awesome-icon",{attrs:{slot:"prefix",icon:"key"},slot:"prefix"})],1)],1),e._v(" "),n("el-form-item",{attrs:{prop:"validationCode"}},[n("el-input",{ref:"validationCode",staticClass:"validationCode",attrs:{type:"text",autocomplete:"off",placeholder:"验证码"},nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.handleSubmit(t):null}},model:{value:e.mainForm.validationCode,callback:function(t){e.$set(e.mainForm,"validationCode","string"==typeof t?t.trim():t)},expression:"mainForm.validationCode"}}),e._v(" "),n("img",{staticClass:"validationCodeImage",attrs:{src:e.refreshValidationCodeUrl},on:{click:e.handleRefreshValidationCode}})],1),e._v(" "),n("el-form-item",{staticStyle:{width:"100%"}},[n("el-button",{staticClass:"login",attrs:{type:"primary"},on:{click:e.handleSubmit}},[e._v("登录")])],1)],1)},staticRenderFns:[]};t.a=o},PxPL:function(e,t,n){"use strict";var o=n("bzuE"),r=n("M4fF"),i=n.n(r),a=n("VsUZ"),s=n("NC6I"),l=n.n(s),u=n("3UNf");t.a={data:function(){return{isLoading:!1,refreshValidationCodeUrlBase:o.a+"/Admin/GetValidationCode",refreshValidationCodeUrl:null,mainForm:{account:o.b,password:o.c,validationCode:""},mainFormRules:{account:[{required:!0,message:"请输入账号",trigger:"blur"},{min:2,message:"最少支持2个字符",trigger:"blur"},{max:20,message:"最多支持20个字符",trigger:"blur"},{pattern:/^([a-zA-Z][a-zA-Z0-9-_]*)|(1(3|4|5|7|8)\d{9})|([\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?)$/,message:"请输入合法的用户名、手机号或邮箱",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:6,message:"最少支持6个字符",trigger:"blur"},{max:32,message:"最多支持32个字符",trigger:"blur"}],validationCode:[{required:!0,message:"请输入验证码",trigger:"blur"},{max:32,message:"最多支持32个字符",trigger:"blur"}]},isRemberPassword:!0}},mounted:function(){this.refreshValidationCodeUrl=this.refreshValidationCodeUrlBase},methods:{handleReset:function(e){this.$refs.mainForm.resetFields()},handleSubmit:function(e){var t=this;this.$refs.mainForm.validate(function(e){if(!e)return!1;t.isLoading=!0;var n=i.a.cloneDeep(t.mainForm);n.password=l()(n.password),a.a.login(n).then(function(e){},function(e){t.isLoading=!1,t.showErrorMessage(e.message),t.handleRefreshValidationCode(null)})})},handleRefreshValidationCode:function(e){this.refreshValidationCodeUrl=this.refreshValidationCodeUrlBase+"?"+(new Date).getTime(),this.mainForm.validationCode="",e&&this.$refs.validationCode.focus()},handleFocus:function(e){this.$refs[e].focus()},showErrorMessage:function(e){this.$message({message:e,type:"error"})},testDownload:function(){var e=this;this.isLoading=!0;a.a.download("http://192.168.0.108:9005/manager/api/Project/Report/ImportAttendance",{Cityname:"35dea0e5-9b9f-4b8b-981e-2e1120b1c317",DeliveryFeeBillCsvPath:"/UserFiles/5/files/2017-11-27-2017-12-04配送费账单(1).csv"}).then(function(t){e.isLoading=!1,u(t.data,"test.xlsx")},function(t){e.isLoading=!1,e.showErrorMessage(t.message)})}}}},VsUZ:function(e,t,n){"use strict";var o=n("7+uW");t.a={login:function(e){return o.default.httpClient.post("/admin/login",e)},refreshToken:function(e){return o.default.httpClient.post("/admin/refreshToken",e)},logout:function(){return o.default.httpClient.post("/admin/logout")},getProfile:function(){return o.default.httpClient.get("/admin/getProfile")},changeProfile:function(e){return o.default.httpClient.post("/admin/changeProfile",e)},changePassword:function(e){return o.default.httpClient.post("/admin/changePassword",e)},getMenus:function(){return o.default.httpClient.get("/admin/getMenus")},getBulletin:function(){return o.default.httpClient.get("/admin/getBulletin")},editBulletin:function(e){return o.default.httpClient.post("/admin/editBulletin",e)},getModulePermissions:function(){return o.default.httpClient.get("/admin/getModulePermissions")},extractModulePermissions:function(){return o.default.httpClient.get("/admin/extractModulePermissions")},clearModulePermissions:function(){return o.default.httpClient.get("/admin/clearModulePermissions")},getRoles:function(){return o.default.httpClient.get("/admin/getRoles")},addRole:function(e){return o.default.httpClient.post("/admin/addRole",e)},editRole:function(e){return o.default.httpClient.post("/admin/editRole",e)},removeRole:function(e){return o.default.httpClient.post("/admin/removeRole",e)},moveRole:function(e){return o.default.httpClient.post("/admin/moveRole",e)},saveRoleName:function(e){return o.default.httpClient.post("/admin/saveRoleName",e)},getGroupTree:function(){return o.default.httpClient.get("/admin/getGroupTree")},addGroup:function(e){return o.default.httpClient.post("/admin/addGroup",e)},editGroup:function(e){return o.default.httpClient.post("/admin/editGroup",e)},removeGroup:function(e){return o.default.httpClient.post("/admin/removeGroup",e)},moveGroup:function(e){return o.default.httpClient.post("/admin/moveGroup",e)},getUsers:function(e){return o.default.httpClient.post("/admin/getUsers",e)},addUser:function(e){return o.default.httpClient.post("/admin/addUser",e)},editUser:function(e){return o.default.httpClient.post("/admin/editUser",e)},removeUser:function(e){return o.default.httpClient.post("/admin/removeUser",e)},getUserStatus:function(){return o.default.httpClient.get("/admin/getUserStatus")},getNotificationsForManager:function(e){return o.default.httpClient.post("/admin/getNotificationsForManager",e)},addNotification:function(e){return o.default.httpClient.post("/admin/addNotification",e)},editNotification:function(e){return o.default.httpClient.post("/admin/editNotification",e)},removeNotification:function(e){return o.default.httpClient.post("/admin/removeNotification",e)},getNotifications:function(e){return o.default.httpClient.post("/admin/getNotifications",e)},readNotifications:function(e){return o.default.httpClient.post("/admin/readNotifications",e)},deleteNotifications:function(e){return o.default.httpClient.post("/admin/deleteNotifications",e)},getNewestNotification:function(e){return o.default.httpClient.post("/admin/getNewestNotification",e)},getGroups:function(){return o.default.httpClient.get("/admin/getGroups")},getRoleBases:function(){return o.default.httpClient.get("/admin/getRoleBases")},getPermissionTree:function(){return o.default.httpClient.get("/admin/getPermissionTree")},callDirectly:function(e){return o.default.httpClient.get(e)},download:function(e,t){return o.default.httpClient.post(e,t,{responseType:"arraybuffer"})}}},Z4L9:function(e,t,n){"use strict";var o=n("PxPL"),r=n("Humt"),i=function(e){n("zo9y")},a=n("VU/8")(o.a,r.a,!1,i,"data-v-7262417a",null);t.a=a.exports},bzuE:function(e,t,n){"use strict";n.d(t,"a",function(){return o}),n.d(t,"b",function(){return r}),n.d(t,"c",function(){return i});var o="/api",r="",i=""},rFs4:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("tvR6"),r=(n.n(o),n("qBF2")),i=n.n(r),a=n("7+uW"),s=n("/rEA"),l=n("Z4L9"),u=n("C/JF"),d=n("fhbW"),f=n("1e6/");u.c.add(d.b,d.a),a.default.config.productionTip=!1,a.default.use(s.a),a.default.use(i.a,{size:"small"}),a.default.component("font-awesome-icon",f.a),new a.default({el:"#app",render:function(e){return e(l.a)}})},tvR6:function(e,t){},zo9y:function(e,t){}},["rFs4"]);
//# sourceMappingURL=login.js.map