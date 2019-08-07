webpackJsonp([6],{"/rEA":function(e,g,v){"use strict";(function(i){var e=v("//Fk"),r=v.n(e),t=v("mvHQ"),n=v.n(t),o=v("OvRC"),a=v.n(o),s=v("mtWM"),l=v.n(s),u=v("mw3O"),d=v.n(u),c=v("bzuE"),m="default",f="sysetem";function p(e,t,n){this.name="ApiError",this.message=e||"Default Message",this.errorType=t||m,this.innerError=n,this.stack=(new Error).stack}(p.prototype=a()(Error.prototype)).constructor=p;var h=l.a.create({baseURL:c.a,timeout:2e4,responseType:"json",withCredentials:!0});h.interceptors.request.use(function(e){return"post"===e.method||"put"===e.method||"patch"===e.method?(e.headers={"Content-Type":"application/json; charset=UTF-8"},e.data=n()(e.data)):"delete"!==e.method&&"get"!==e.method&&"head"!==e.method||(e.paramsSerializer=function(e){return d.a.stringify(e,{arrayFormat:"indices"})}),localStorage.token&&(e.headers.Authorization="Bearer "+localStorage.token),e},function(e){return e}),h.interceptors.response.use(function(e){if(-1===e.headers["content-type"].indexOf("json"))return e;var t=void 0;if("arraybuffer"===e.request.responseType&&"[object ArrayBuffer]"===e.data.toString()){var n=i.from(e.data).toString("utf8");t=JSON.parse(n)}else t=e.data;if(t){if(t.data&&(t.data.token&&(localStorage.token=t.data.token),t.data.refreshToken&&(localStorage.refreshToken=t.data.refreshToken)),t.url)return void(top.location=t.url);if(200!==t.code)return console.log(t),r.a.reject(new p(t.message))}return e},function(e){if(console.log(e.response.headers),401===e.response.status){if(-1!==e.response.headers["content-type"].indexOf("json")&&e.response.data.url)return void(top.location=e.response.data.url);if(e.response.headers["token-expired"]&&localStorage.token&&localStorage.refreshToken){console.log("Refresh Token");var t={token:localStorage.token,refreshToken:localStorage.refreshToken};return localStorage.removeItem("token"),localStorage.removeItem("refreshToken"),h.post("/admin/refreshToken",t),r.a.reject(new p("登录超时，自动登录中......",f,e))}}return r.a.reject(new p(e.message,f,e))}),g.a={install:function(e,t){e.httpClient=h,e.prototype.$httpClient=h}}}).call(g,v("EuP9").Buffer)},UEvC:function(e,t){},UKyY:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("tvR6"),r=(n.n(i),n("qBF2")),o=n.n(r),a=n("7+uW"),s=n("/rEA"),l=n("uN2V"),u=(n.n(l),n("gRoo"));a.default.config.productionTip=!1,a.default.use(s.a),a.default.use(o.a,{size:"mini"}),new a.default({el:"#app",render:function(e){return e(u.a)}})},VsUZ:function(e,t,n){"use strict";var i=n("7+uW");t.a={login:function(e){return i.default.httpClient.post("/admin/login",e)},refreshToken:function(e){return i.default.httpClient.post("/admin/refreshToken",e)},logout:function(){return i.default.httpClient.post("/admin/logout")},getProfile:function(){return i.default.httpClient.get("/admin/getProfile")},changeProfile:function(e){return i.default.httpClient.post("/admin/changeProfile",e)},changeAvatar:function(e){return i.default.uploadHttpClient.post("/admin/ChangeAvatar",e)},changeLogo:function(e){return i.default.uploadHttpClient.post("/admin/ChangeLogo",e)},changePassword:function(e){return i.default.httpClient.post("/admin/changePassword",e)},getMenus:function(){return i.default.httpClient.get("/admin/getMenus")},getBulletin:function(){return i.default.httpClient.get("/admin/getBulletin")},editBulletin:function(e){return i.default.httpClient.post("/admin/editBulletin",e)},getModuleMetaDatas:function(){return i.default.httpClient.get("/admin/getModuleMetaDatas")},extractModuleMetaDatas:function(){return i.default.httpClient.get("/admin/extractModuleMetaDatas")},clearModulePermissions:function(){return i.default.httpClient.get("/admin/clearModulePermissions")},getRoleList:function(){return i.default.httpClient.get("/admin/getRoleList")},addRole:function(e){return i.default.httpClient.post("/admin/addRole",e)},editRole:function(e){return i.default.httpClient.post("/admin/editRole",e)},removeRole:function(e){return i.default.httpClient.post("/admin/removeRole",e)},moveRole:function(e){return i.default.httpClient.post("/admin/moveRole",e)},saveRoleName:function(e){return i.default.httpClient.post("/admin/saveRoleName",e)},getGroupTree:function(){return i.default.httpClient.get("/admin/getGroupTree")},addGroup:function(e){return i.default.httpClient.post("/admin/addGroup",e)},editGroup:function(e){return i.default.httpClient.post("/admin/editGroup",e)},removeGroup:function(e){return i.default.httpClient.post("/admin/removeGroup",e)},moveGroup:function(e){return i.default.httpClient.post("/admin/moveGroup",e)},getUserPage:function(e){return i.default.httpClient.post("/admin/getUserPage",e)},addUser:function(e){return i.default.httpClient.post("/admin/addUser",e)},editUser:function(e){return i.default.httpClient.post("/admin/editUser",e)},removeUser:function(e){return i.default.httpClient.post("/admin/removeUser",e)},getUserStatuList:function(){return i.default.httpClient.get("/admin/getUserStatuList")},validateUsernameExists:function(e){return i.default.httpClient.post("/admin/ValidateUsernameExists",e)},validateMobileExists:function(e){return i.default.httpClient.post("/admin/ValidateMobileExists",e)},validateEmailExists:function(e){return i.default.httpClient.post("/admin/ValidateEmailExists",e)},changeUserAvatar:function(e){return i.default.uploadHttpClient.post("/admin/ChangeUserAvatar",e)},changeUserLogo:function(e){return i.default.uploadHttpClient.post("/admin/ChangeUserLogo",e)},getNotificationsForManager:function(e){return i.default.httpClient.post("/admin/getNotificationsForManager",e)},addNotification:function(e){return i.default.httpClient.post("/admin/addNotification",e)},editNotification:function(e){return i.default.httpClient.post("/admin/editNotification",e)},removeNotification:function(e){return i.default.httpClient.post("/admin/removeNotification",e)},getNotifications:function(e){return i.default.httpClient.post("/admin/getNotifications",e)},readNotifications:function(e){return i.default.httpClient.post("/admin/readNotifications",e)},deleteNotifications:function(e){return i.default.httpClient.post("/admin/deleteNotifications",e)},getNewestNotification:function(e){return i.default.httpClient.post("/admin/getNewestNotification",e)},getGroupList:function(){return i.default.httpClient.get("/admin/getGroupList")},getRoleBaseList:function(){return i.default.httpClient.get("/admin/getRoleBaseList")},getPermissionTree:function(){return i.default.httpClient.get("/admin/getPermissionTree")},callDirectly:function(e){return i.default.httpClient.get(e)},download:function(e,t){return i.default.httpClient.post(e,t,{responseType:"arraybuffer"})}}},bzuE:function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"b",function(){return r}),n.d(t,"c",function(){return o});var i="/api",r="",o=""},gRoo:function(e,t,n){"use strict";var i=n("nuCP"),r=n("puXq");function o(e){n("UEvC")}var a=n("VU/8")(i.a,r.a,!1,o,null,null);t.a=a.exports},nuCP:function(e,t,n){"use strict";var i=n("Lokx"),r=n.n(i),o=n("VsUZ");t.a={data:function(){return{isLoading:!1,list:null,removeActive:null,editActive:null,mainFormDialogVisible:!1,mainForm:{roleId:null,name:null,permissionIds:null},mainFormRules:{name:[{required:!0,message:"请输入角色名称",trigger:"blur"},{max:50,message:"最多支持50个字符",trigger:"blur"}]},editPermissionTreeData:null,editPermissionTreeDefaultProps:{children:"children",label:"name"}}},mounted:function(){this.getList(),this.getPermissionTree()},computed:{mainTableEmptyText:function(){return this.isLoading?"加载中...":"暂无数据"}},methods:{getList:function(){var t=this;this.isLoading=!0,o.a.getRoleList().then(function(e){t.isLoading=!1,t.list=e.data.data,t.$nextTick(function(){t.setupSortable()})},function(e){t.isLoading=!1,t.$message.error(e.message)})},getPermissionTree:function(){var t=this;o.a.getPermissionTree().then(function(e){t.editPermissionTreeData=e.data.data},function(e){t.$message.error(e.message)})},handleAdd:function(){var e=this;this.validateBaseData()&&(this.editActive=null,this.mainFormDialogVisible=!0,this.mainForm.roleId=null,this.mainForm.name=null,this.mainForm.permissionIds=null,this.$nextTick(function(){e.$refs.editPermissionTree.setCheckedKeys([],!0),e.$refs.name.focus(),e.clearValidate("mainForm")}))},handleEdit:function(e){var t=this;this.validateBaseData()||this.$message.error("基础数据缺失：权限列表"),this.editActive=e,this.mainFormDialogVisible=!0,this.mainForm.roleId=e.roleId,this.mainForm.name=e.name,this.mainForm.permissionIds=e.permissions.map(function(e){return e.permissionId}),this.$nextTick(function(){t.$refs.editPermissionTree.setCheckedKeys(t.mainForm.permissionIds,!0),t.clearValidate("mainForm")})},handleMainFormSure:function(e){e?this.editActive?this.edit():this.add():this.mainFormDialogVisible=!1},handleRemove:function(e){var t=this;this.removeActive=e,this.$confirm("删除该角色后，相关的数据也将被删除。是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.remove()}).catch(function(){t.removeActive=null})},add:function(){var n=this;this.$refs.mainForm.validate(function(e){if(!e)return!1;n.isLoading=!0;var t={name:n.mainForm.name,permissionIds:n.mainForm.permissionIds};o.a.addRole(t).then(function(e){n.list.push(e.data.data),n.isLoading=!1,n.mainFormDialogVisible=!1},function(e){n.isLoading=!1,n.$message.error(e.message)})})},edit:function(){var n=this;this.editActive?this.$refs.mainForm.validate(function(e){if(!e)return!1;n.isLoading=!0;var t={roleId:n.mainForm.roleId,name:n.mainForm.name,permissionIds:n.mainForm.permissionIds};o.a.editRole(t).then(function(e){n.list.splice(n.list.indexOf(n.editActive),1,e.data.data),n.isLoading=!1,n.editActive=null,n.mainFormDialogVisible=!1},function(e){n.isLoading=!1,n.$message.error(e.message)})}):this.$message.error("异常：无编辑目标")},remove:function(){var n=this;if(this.removeActive){var e={roleId:this.removeActive.roleId};this.isLoading=!0,o.a.removeRole(e).then(function(e){n.isLoading=!1;var t=n.list.indexOf(n.removeActive);n.list.splice(t,1),n.removeActive=null},function(e){n.isLoading=!1,n.$message.error(e.message)})}},move:function(e,t){var n=this,i={sourceDisplayOrder:e,targetDisplayOrder:t};this.isLoading=!0,o.a.moveRole(i).then(function(e){n.isLoading=!1},function(e){n.isLoading=!1,n.$message.error(e.message)})},validateBaseData:function(){return!!this.editPermissionTreeData||(this.$message.error("基础数据缺失：权限列表"),!1)},handlePermissionTreeCheckChange:function(e,t,n){this.mainForm.permissionIds=this.$refs.editPermissionTree.getCheckedKeys()},resetForm:function(e){this.$refs[e].resetFields()},clearValidate:function(e){this.$refs[e].clearValidate()},setupSortable:function(){var i=this,e=document.querySelectorAll(".el-table__body-wrapper > table > tbody")[0];this.sortable=r.a.create(e,{ghostClass:"sortable-ghost",group:"name",handle:".el-icon-rank",filter:".ignore-elements",onMove:function(e,t){return 0!==e.dragged.rowIndex&&0!==e.related.rowIndex},onEnd:function(e){if(e.oldIndex!==e.newIndex){var t=e.oldIndex+1,n=e.newIndex+1;i.move(t,n)}}})}}}},puXq:function(e,t,n){"use strict";var i={render:function(){var n=this,e=n.$createElement,i=n._self._c||e;return i("el-container",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:n.isLoading,expression:"isLoading",modifiers:{fullscreen:!0,lock:!0}}]},[i("el-header",{staticClass:"header"},[i("el-breadcrumb",{staticClass:"breadcrumb",attrs:{"separator-class":"el-icon-arrow-right"}},[i("el-breadcrumb-item",[n._v("用户管理")]),n._v(" "),i("el-breadcrumb-item",[n._v("角色列表")])],1)],1),n._v(" "),i("el-main",{staticClass:"main"},[i("el-row",[i("el-col",[i("el-button",{attrs:{type:"primary",icon:"el-icon-circle-plus-outline"},on:{click:n.handleAdd}},[n._v("添加")])],1)],1),n._v(" "),i("el-table",{staticStyle:{width:"100%"},attrs:{data:n.list,"empty-text":n.mainTableEmptyText}},[i("el-table-column",{attrs:{prop:"name",label:"名称"}}),n._v(" "),i("el-table-column",{attrs:{align:"center",width:"42"},scopedSlots:n._u([{key:"default",fn:function(e){return[i("el-button",{directives:[{name:"show",rawName:"v-show",value:!e.row.isSystem,expression:"!scope.row.isSystem"}],class:{"ignore-elements":e.row.isSystem},attrs:{type:"text",size:"small",icon:"el-icon-rank"}})]}}])}),n._v(" "),i("el-table-column",{attrs:{align:"center",width:"42"},scopedSlots:n._u([{key:"default",fn:function(t){return[i("el-button",{attrs:{type:"text",size:"small",icon:"el-icon-edit"},on:{click:function(e){return n.handleEdit(t.row)}}})]}}])}),n._v(" "),i("el-table-column",{attrs:{align:"center",width:"42"},scopedSlots:n._u([{key:"default",fn:function(t){return[t.row.isSystem?n._e():i("el-button",{attrs:{type:"text",size:"small",icon:"el-icon-delete"},on:{click:function(e){return n.handleRemove(t.row)}}})]}}])})],1),n._v(" "),i("el-dialog",{attrs:{visible:n.mainFormDialogVisible,"close-on-click-modal":!1,width:"400px"},on:{"update:visible":function(e){n.mainFormDialogVisible=e}},nativeOn:{submit:function(e){e.preventDefault()}}},[i("span",{attrs:{slot:"title"},slot:"title"},[n._v("\r\n          "+n._s(n.editActive?"编辑":"添加")+"\r\n        ")]),n._v(" "),i("el-form",{ref:"mainForm",attrs:{model:n.mainForm,rules:n.mainFormRules,"label-position":"right","label-width":"120px"}},[i("el-form-item",{attrs:{label:"角色名称",prop:"name"}},[i("el-input",{ref:"name",attrs:{"auto-complete":"off",placeholder:"请输入角色名称"},model:{value:n.mainForm.name,callback:function(e){n.$set(n.mainForm,"name","string"==typeof e?e.trim():e)},expression:"mainForm.name"}})],1),n._v(" "),i("el-form-item",{attrs:{label:"包含权限"}},[i("el-tree",{ref:"editPermissionTree",attrs:{data:n.editPermissionTreeData,props:n.editPermissionTreeDefaultProps,"node-key":"id","empty-text":"","show-checkbox":"","default-expand-all":"","check-strictly":""},on:{"check-change":n.handlePermissionTreeCheckChange}})],1)],1),n._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){return n.handleMainFormSure(!1)}}},[n._v("取 消")]),n._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:function(e){return n.handleMainFormSure(!0)}}},[n._v("确 定")])],1)],1)],1)],1)},staticRenderFns:[]};t.a=i},tvR6:function(e,t){},uN2V:function(e,t){}},["UKyY"]);
//# sourceMappingURL=role.js.map