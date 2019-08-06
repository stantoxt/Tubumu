webpackJsonp([4],{"/rEA":function(e,h,v){"use strict";(function(i){var e=v("//Fk"),o=v.n(e),t=v("mvHQ"),n=v.n(t),r=v("OvRC"),a=v.n(r),s=v("mtWM"),l=v.n(s),u=v("mw3O"),d=v.n(u),c=v("bzuE"),f="default",m="sysetem";function p(e,t,n){this.name="ApiError",this.message=e||"Default Message",this.errorType=t||f,this.innerError=n,this.stack=(new Error).stack}(p.prototype=a()(Error.prototype)).constructor=p;var g=l.a.create({baseURL:c.a,timeout:2e4,responseType:"json",withCredentials:!0});g.interceptors.request.use(function(e){return"post"===e.method||"put"===e.method||"patch"===e.method?(e.headers={"Content-Type":"application/json; charset=UTF-8"},e.data=n()(e.data)):"delete"!==e.method&&"get"!==e.method&&"head"!==e.method||(e.paramsSerializer=function(e){return d.a.stringify(e,{arrayFormat:"indices"})}),localStorage.token&&(e.headers.Authorization="Bearer "+localStorage.token),e},function(e){return e}),g.interceptors.response.use(function(e){if(-1===e.headers["content-type"].indexOf("json"))return e;var t=void 0;if("arraybuffer"===e.request.responseType&&"[object ArrayBuffer]"===e.data.toString()){var n=i.from(e.data).toString("utf8");t=JSON.parse(n)}else t=e.data;if(t){if(t.data&&(t.data.token&&(localStorage.token=t.data.token),t.data.refreshToken&&(localStorage.refreshToken=t.data.refreshToken)),t.url)return void(top.location=t.url);if(200!==t.code)return console.log(t),o.a.reject(new p(t.message))}return e},function(e){if(console.log(e.response.headers),401===e.response.status){if(-1!==e.response.headers["content-type"].indexOf("json")&&e.response.data.url)return void(top.location=e.response.data.url);if(e.response.headers["token-expired"]&&localStorage.token&&localStorage.refreshToken){console.log("Refresh Token");var t={token:localStorage.token,refreshToken:localStorage.refreshToken};return localStorage.removeItem("token"),localStorage.removeItem("refreshToken"),g.post("/admin/refreshToken",t),o.a.reject(new p("登录超时，自动登录中......",m,e))}}return o.a.reject(new p(e.message,m,e))}),h.a={install:function(e,t){e.httpClient=g,e.prototype.$httpClient=g}}}).call(h,v("EuP9").Buffer)},"01L+":function(e,t,n){"use strict";var i=n("dpSG"),o=n("4Wj6");function r(e){n("vhE5")}var a=n("VU/8")(i.a,o.a,!1,r,null,null);t.a=a.exports},"1Hg3":function(e,t){},"2eif":function(e,t,n){"use strict";t.a={name:"XLMenu",props:["model","index"],data:function(){return{}}}},"4Wj6":function(e,t,n){"use strict";var i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-container",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:t.isLoading,expression:"isLoading",modifiers:{fullscreen:!0,lock:!0}}]},[n("el-header",[n("el-row",[n("el-col",{attrs:{span:16}},[t._v("系统管理")]),t._v(" "),n("el-col",{staticClass:"userinfo",attrs:{span:8}},[n("el-badge",{attrs:{value:"new",hidden:!t.hasNewMessage}},[n("i",{staticClass:"el-icon-message newMessage",on:{click:t.handleNewMessage}})]),t._v(" "),n("el-dropdown",{attrs:{trigger:"hover","show-timeout":150}},[n("span",{staticClass:"el-dropdown-link userinfo-inner"},[n("img",{directives:[{name:"show",rawName:"v-show",value:t.profileDisplay.avatarUrl,expression:"profileDisplay.avatarUrl"}],attrs:{src:t.profileDisplay.avatarUrl}}),t._v(" [ "+t._s(t.profileDisplay.groups.map(function(e){return e.name}).join(" - "))+" ] "+t._s(t.profileDisplay.displayName||t.profileDisplay.username)+"\r\n          ")]),t._v(" "),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",{nativeOn:{click:function(e){return t.profile(e)}}},[t._v("我的资料")]),t._v(" "),n("el-dropdown-item",{attrs:{divided:""},nativeOn:{click:function(e){return t.logout(e)}}},[t._v("退出登录")])],1)],1)],1)],1)],1),t._v(" "),n("el-container",{staticClass:"el-container-inner"},[n("el-aside",{directives:[{name:"loading",rawName:"v-loading",value:t.isGetMenusLoading,expression:"isGetMenusLoading"}],attrs:{width:"200"}},[n("el-menu",{staticClass:"el-menu-vertical-main",attrs:{"unique-opened":"","default-active":"menuActiveIndex"},on:{open:t.handleOpen,close:t.handleClose,select:t.handleSelect}},t._l(t.menus,function(e,t){return n("xl-menu",{key:t,attrs:{model:e,index:t.toString()}})}),1)],1),t._v(" "),n("el-main",[n("iframe",{staticClass:"el-main-content",attrs:{src:t.mainFrameUrl,scrolling:"auto",frameBorder:"0",width:t.iframeWidth,height:t.iframeHeight}})])],1)],1)},staticRenderFns:[]};t.a=i},DjhF:function(e,t,n){"use strict";var i={render:function(){var n=this,e=n.$createElement,i=n._self._c||e;return 0===n.model.type?i("el-menu-item",{attrs:{index:n.index}},[i("span",{attrs:{slot:"title"},slot:"title"},[n._v(n._s(n.model.title))])]):1===n.model.type?i("el-submenu",{attrs:{index:n.index}},[i("template",{slot:"title"},[i("i",{staticClass:"el-icon-menu"}),n._v(" "),i("span",{attrs:{slot:"title"},slot:"title"},[n._v(n._s(n.model.title))])]),n._v(" "),n._l(n.model.children,function(e,t){return i("xl-menu",{key:n.index+"-"+t,attrs:{model:e,index:n.index+"-"+t}})})],2):2===n.model.type?i("el-menu-item-group",{attrs:{title:n.model.title}},n._l(n.model.children,function(e,t){return i("xl-menu",{key:n.index+"-"+t,attrs:{model:e,index:n.index+"-"+t}})}),1):n._e()},staticRenderFns:[]};t.a=i},"Rt+6":function(e,t,n){"use strict";var i=n("2eif"),o=n("DjhF"),r=n("VU/8")(i.a,o.a,!1,null,null,null);t.a=r.exports},VsUZ:function(e,t,n){"use strict";var i=n("7+uW");t.a={login:function(e){return i.default.httpClient.post("/admin/login",e)},refreshToken:function(e){return i.default.httpClient.post("/admin/refreshToken",e)},logout:function(){return i.default.httpClient.post("/admin/logout")},getProfile:function(){return i.default.httpClient.get("/admin/getProfile")},changeProfile:function(e){return i.default.httpClient.post("/admin/changeProfile",e)},changeAvatar:function(e){return i.default.uploadHttpClient.post("/admin/ChangeAvatar",e)},changeLogo:function(e){return i.default.uploadHttpClient.post("/admin/ChangeLogo",e)},changePassword:function(e){return i.default.httpClient.post("/admin/changePassword",e)},getMenus:function(){return i.default.httpClient.get("/admin/getMenus")},getBulletin:function(){return i.default.httpClient.get("/admin/getBulletin")},editBulletin:function(e){return i.default.httpClient.post("/admin/editBulletin",e)},getModuleMetaDatas:function(){return i.default.httpClient.get("/admin/getModuleMetaDatas")},extractModuleMetaDatas:function(){return i.default.httpClient.get("/admin/extractModuleMetaDatas")},clearModulePermissions:function(){return i.default.httpClient.get("/admin/clearModulePermissions")},getRoleList:function(){return i.default.httpClient.get("/admin/getRoleList")},addRole:function(e){return i.default.httpClient.post("/admin/addRole",e)},editRole:function(e){return i.default.httpClient.post("/admin/editRole",e)},removeRole:function(e){return i.default.httpClient.post("/admin/removeRole",e)},moveRole:function(e){return i.default.httpClient.post("/admin/moveRole",e)},saveRoleName:function(e){return i.default.httpClient.post("/admin/saveRoleName",e)},getGroupTree:function(){return i.default.httpClient.get("/admin/getGroupTree")},addGroup:function(e){return i.default.httpClient.post("/admin/addGroup",e)},editGroup:function(e){return i.default.httpClient.post("/admin/editGroup",e)},removeGroup:function(e){return i.default.httpClient.post("/admin/removeGroup",e)},moveGroup:function(e){return i.default.httpClient.post("/admin/moveGroup",e)},getUserPage:function(e){return i.default.httpClient.post("/admin/getUserPage",e)},addUser:function(e){return i.default.httpClient.post("/admin/addUser",e)},editUser:function(e){return i.default.httpClient.post("/admin/editUser",e)},removeUser:function(e){return i.default.httpClient.post("/admin/removeUser",e)},getUserStatuList:function(){return i.default.httpClient.get("/admin/getUserStatuList")},changeUserAvatar:function(e){return i.default.uploadHttpClient.post("/admin/ChangeUserAvatar",e)},changeUserLogo:function(e){return i.default.uploadHttpClient.post("/admin/ChangeUserLogo",e)},getNotificationsForManager:function(e){return i.default.httpClient.post("/admin/getNotificationsForManager",e)},addNotification:function(e){return i.default.httpClient.post("/admin/addNotification",e)},editNotification:function(e){return i.default.httpClient.post("/admin/editNotification",e)},removeNotification:function(e){return i.default.httpClient.post("/admin/removeNotification",e)},getNotifications:function(e){return i.default.httpClient.post("/admin/getNotifications",e)},readNotifications:function(e){return i.default.httpClient.post("/admin/readNotifications",e)},deleteNotifications:function(e){return i.default.httpClient.post("/admin/deleteNotifications",e)},getNewestNotification:function(e){return i.default.httpClient.post("/admin/getNewestNotification",e)},getGroupList:function(){return i.default.httpClient.get("/admin/getGroupList")},getRoleBaseList:function(){return i.default.httpClient.get("/admin/getRoleBaseList")},getPermissionTree:function(){return i.default.httpClient.get("/admin/getPermissionTree")},callDirectly:function(e){return i.default.httpClient.get(e)},download:function(e,t){return i.default.httpClient.post(e,t,{responseType:"arraybuffer"})}}},bzuE:function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"b",function(){return o}),n.d(t,"c",function(){return r});var i="/api",o="",r=""},dpSG:function(e,t,n){"use strict";var i=n("VsUZ");t.a={data:function(){return{isLoading:!1,isGetMenusLoading:!1,hasNewMessage:null,mainFrameUrl:"",profileDisplay:{username:"",displayName:"",avatarUrl:null,groups:[]},menus:null,menuActiveIndex:"0-0",iframeWidth:document.documentElement.clientWidth-200,iframeHeight:document.documentElement.clientHeight-60}},created:function(){},mounted:function(){var t=this,e=this;window.onresize=function(){e.iframeWidth=document.documentElement.clientWidth-200,e.iframeHeight=document.documentElement.clientHeight-60},window.onresize(),this.isGetMenusLoading=!0,i.a.getMenus().then(function(e){t.isGetMenusLoading=!1,t.menus=e.data.data},function(e){t.isGetMenusLoading=!1,t.$message.error(e.message)}),i.a.getProfile().then(function(e){t.profileDisplay=e.data.data,t.connectNotifictionServer()},function(e){t.$message.error(e.message)})},methods:{handleOpen:function(e,t){},handleClose:function(e,t){},handleSelect:function(e,t){for(var n=e.split("-"),i=this.menus,o=null,r=0;r<n.length;r++)o=i[n[r]],r===n.length-1?o.directly?this.callDirectly(o.link):o.linkTarget?window.open(o.link,o.linkTarget):this.mainFrameUrl=o.link:i=o.children},profile:function(){this.mainFrameUrl="/Admin/View?IsCore=true&Title=%E6%88%91%E7%9A%84%E8%B5%84%E6%96%99&Name=profile&Components=ckfinder"},resources:function(){this.mainFrameUrl="/Admin/View?IsCore=true&Title=%E6%88%91%E7%9A%84%E8%B5%84%E6%96%99&Name=resources&Components=ckfinder"},logout:function(){var t=this;this.isLoading=!0,i.a.logout().then(function(e){localStorage.removeItem("token"),localStorage.removeItem("refreshToken")},function(e){t.isLoading=!1,t.$message.error(e.message)})},callDirectly:function(e){var t=this;this.isLoading=!0,i.a.callDirectly(e).then(function(e){t.isLoading=!1,t.$message.success(e.data.message)},function(e){t.isLoading=!1,t.$message.error(e.message)})},connectNotifictionServer:function(){var t=this;try{var e=(new signalR.HubConnectionBuilder).withUrl("/hubs/notificationHub",{accessTokenFactory:function(){return localStorage.token}}).build();e.on("ReceiveMessage",function(e){console.log(e),201===e.code?(t.hasNewMessage=!0,t.$notify.info({dangerouslyUseHTMLString:!0,offset:64,duration:5e3,title:e.title||"新的消息",message:e.message})):202===e.code?t.hasNewMessage=!1:400===e.code&&t.$message.error(e.message)}),e.start().catch(function(e){return console.error(e.toString())})}catch(e){console.log(e.message)}},handleNewMessage:function(){this.hasNewMessage=!1,this.mainFrameUrl="/Admin/View?IsCore=true&Title=%E9%80%9A%E7%9F%A5%E4%B8%AD%E5%BF%83&Name=notification&t="+(new Date).getTime()}}}},sSkr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("tvR6"),o=(n.n(i),n("qBF2")),r=n.n(o),a=n("7+uW"),s=n("/rEA"),l=n("Rt+6"),u=n("1Hg3"),d=(n.n(u),n("01L+"));a.default.config.productionTip=!1,a.default.use(s.a),a.default.use(r.a,{size:"mini"}),a.default.component("xl-menu",l.a),new a.default({el:"#app",render:function(e){return e(d.a)}})},tvR6:function(e,t){},vhE5:function(e,t){}},["sSkr"]);
//# sourceMappingURL=index.js.map