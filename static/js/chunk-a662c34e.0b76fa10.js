(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a662c34e"],{3528:function(e,t,a){"use strict";a.d(t,"f",(function(){return o})),a.d(t,"e",(function(){return l})),a.d(t,"a",(function(){return s})),a.d(t,"g",(function(){return i})),a.d(t,"c",(function(){return c})),a.d(t,"b",(function(){return u})),a.d(t,"d",(function(){return d}));var r=a("b775"),n=a("365c");function o(e){return Object(r["a"])({url:"".concat(n["d"],"/role/list"),method:"get",params:e})}function l(e){return Object(r["a"])({url:"".concat(n["d"],"/role/").concat(e),method:"get"})}function s(e){return Object(r["a"])({url:"".concat(n["d"],"/role"),method:"post",data:e})}function i(e){return Object(r["a"])({url:"".concat(n["d"],"/role"),method:"put",data:e})}function c(e){return Object(r["a"])({url:"".concat(n["d"],"/role/dataScope"),method:"put",data:e})}function u(e,t){var a={roleId:e,status:t};return Object(r["a"])({url:"".concat(n["d"],"/role/changeStatus"),method:"put",data:a})}function d(e){return Object(r["a"])({url:"".concat(n["d"],"/role/").concat(e),method:"delete"})}},"70eb":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("el-form",{attrs:{inline:!0}},[a("el-form-item",{attrs:{label:"角色名称"}},[a("el-input",{staticStyle:{width:"240px"},attrs:{placeholder:"请输入角色名称",clearable:"",size:"small"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.roleName,callback:function(t){e.$set(e.queryParams,"roleName",t)},expression:"queryParams.roleName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"角色标识"}},[a("el-input",{staticStyle:{width:"240px"},attrs:{placeholder:"请输入角色标识",clearable:"",size:"small"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.roleKey,callback:function(t){e.$set(e.queryParams,"roleKey",t)},expression:"queryParams.roleKey"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"状态"}},[a("el-select",{staticStyle:{width:"240px"},attrs:{placeholder:"角色状态",clearable:"",size:"small"},model:{value:e.queryParams.status,callback:function(t){e.$set(e.queryParams,"status",t)},expression:"queryParams.status"}},e._l(e.statusOptions,(function(e){return a("el-option",{key:e.dictValue,attrs:{label:e.dictLabel,value:e.dictValue}})})),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"创建时间"}},[a("el-date-picker",{staticStyle:{width:"240px"},attrs:{size:"small","value-format":"yyyy-MM-dd",type:"daterange","range-separator":"-","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.dateRange,callback:function(t){e.dateRange=t},expression:"dateRange"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"mini"},on:{click:e.handleQuery}},[e._v("搜索")]),e._v(" "),a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["system:role:add"],expression:"['system:role:add']"}],attrs:{type:"primary",icon:"el-icon-plus",size:"mini"},on:{click:e.handleAdd}},[e._v("新增")])],1)],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{data:e.roleList}},[a("el-table-column",{attrs:{label:"#",type:"index"}}),e._v(" "),a("el-table-column",{attrs:{label:"角色名称",prop:"roleName","show-overflow-tooltip":!0,width:"150"}}),e._v(" "),a("el-table-column",{attrs:{label:"角色标识",prop:"roleKey","show-overflow-tooltip":!0,width:"180"}}),e._v(" "),a("el-table-column",{attrs:{label:"显示顺序",prop:"roleSort",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{label:"状态",align:"center",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-switch",{attrs:{"active-value":"0","inactive-value":"1"},on:{change:function(a){return e.handleStatusChange(t.row)}},model:{value:t.row.status,callback:function(a){e.$set(t.row,"status",a)},expression:"scope.row.status"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"创建时间",align:"center",prop:"createTime",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e.dateFormat(t.row.createTime)))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"操作",align:"center","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"修改",placement:"top"}},[a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["system:role:edit"],expression:"['system:role:edit']"}],attrs:{size:"mini",type:"text",icon:"el-icon-edit"},on:{click:function(a){return e.handleUpdate(t.row)}}})],1),e._v(" "),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"数据权限",placement:"top"}},[a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["system:role:edit"],expression:"['system:role:edit']"}],attrs:{size:"mini",type:"text",icon:"el-icon-circle-check"},on:{click:function(a){return e.handleDataScope(t.row)}}})],1),e._v(" "),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"删除",placement:"top"}},[a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["system:role:remove"],expression:"['system:role:remove']"}],attrs:{size:"mini",type:"text",icon:"el-icon-delete"},on:{click:function(a){return e.handleDelete(t.row)}}})],1)]}}])})],1),e._v(" "),a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.queryParams.pageNum,limit:e.queryParams.pageSize},on:{"update:page":function(t){return e.$set(e.queryParams,"pageNum",t)},"update:limit":function(t){return e.$set(e.queryParams,"pageSize",t)},pagination:e.getList}}),e._v(" "),a("el-dialog",{attrs:{title:e.title,visible:e.open,width:"500px"},on:{"update:visible":function(t){e.open=t}}},[a("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"角色名称",prop:"roleName"}},[a("el-input",{attrs:{placeholder:"请输入角色名称"},model:{value:e.form.roleName,callback:function(t){e.$set(e.form,"roleName",t)},expression:"form.roleName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"角色标识",prop:"roleKey"}},[a("el-input",{attrs:{placeholder:"请输入角色标识"},model:{value:e.form.roleKey,callback:function(t){e.$set(e.form,"roleKey",t)},expression:"form.roleKey"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"角色顺序",prop:"roleSort"}},[a("el-input-number",{attrs:{"controls-position":"right",min:1},model:{value:e.form.roleSort,callback:function(t){e.$set(e.form,"roleSort",t)},expression:"form.roleSort"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"状态"}},[a("el-radio-group",{model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}},e._l(e.statusOptions,(function(t){return a("el-radio",{key:t.dictValue,attrs:{label:t.dictValue}},[e._v(e._s(t.dictLabel))])})),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"菜单权限"}},[a("el-tree",{ref:"menu",attrs:{data:e.menuOptions,"show-checkbox":"","node-key":"id","empty-text":"加载中，请稍后",props:e.defaultProps}})],1),e._v(" "),a("el-form-item",{attrs:{label:"备注"}},[a("el-input",{attrs:{type:"textarea",placeholder:"请输入内容"},model:{value:e.form.remark,callback:function(t){e.$set(e.form,"remark",t)},expression:"form.remark"}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("确 定")]),e._v(" "),a("el-button",{on:{click:e.cancel}},[e._v("取 消")])],1)],1),e._v(" "),a("el-dialog",{attrs:{title:e.title,visible:e.openDataScope,width:"500px"},on:{"update:visible":function(t){e.openDataScope=t}}},[a("el-form",{attrs:{model:e.form,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"角色名称"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.form.roleName,callback:function(t){e.$set(e.form,"roleName",t)},expression:"form.roleName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"角色标识"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.form.roleKey,callback:function(t){e.$set(e.form,"roleKey",t)},expression:"form.roleKey"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"权限范围"}},[a("el-select",{model:{value:e.form.dataScope,callback:function(t){e.$set(e.form,"dataScope",t)},expression:"form.dataScope"}},e._l(e.dataScopeOptions,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),e._v(" "),a("el-form-item",{directives:[{name:"show",rawName:"v-show",value:2==e.form.dataScope,expression:"form.dataScope == 2"}],attrs:{label:"数据权限"}},[a("el-tree",{ref:"dept",attrs:{data:e.deptOptions,"show-checkbox":"","default-expand-all":"","node-key":"id","empty-text":"加载中，请稍后",props:e.defaultProps}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:e.submitDataScope}},[e._v("确 定")]),e._v(" "),a("el-button",{on:{click:e.cancelDataScope}},[e._v("取 消")])],1)],1)],1)},n=[],o=a("3528"),l=a("a6dc"),s=a("fcb7"),i={data:function(){return{loading:!0,total:0,roleList:[],title:"",open:!1,openDataScope:!1,dateRange:[],statusOptions:[],dataScopeOptions:[{value:"1",label:"全部数据权限"},{value:"2",label:"自定数据权限"},{value:"3",label:"本部门数据权限"},{value:"4",label:"本部门及以下数据权限"},{value:"5",label:"仅本人数据权限"}],menuOptions:[],deptOptions:[],queryParams:{pageNum:1,pageSize:10,roleName:void 0,roleKey:void 0,status:void 0},form:{},defaultProps:{children:"children",label:"label"},rules:{roleName:[{required:!0,message:"角色名称不能为空",trigger:"blur"}],roleKey:[{required:!0,message:"角色标识不能为空",trigger:"blur"}],roleSort:[{required:!0,message:"角色顺序不能为空",trigger:"blur"}]}}},created:function(){var e=this;this.getList(),this.getDicts("sys_normal_disable").then((function(t){e.statusOptions=t.data}))},methods:{getList:function(){var e=this;this.loading=!0,Object(o["f"])(this.addDateRange(this.queryParams,this.dateRange)).then((function(t){e.roleList=t.data.list,e.total=t.data.total,e.loading=!1}))},getMenuTreeselect:function(e){var t=this;Object(l["f"])().then((function(a){t.menuOptions=a.data,t.$refs.menu.setCheckedKeys(e.data)}))},getDeptTreeselect:function(e){var t=this;Object(s["f"])().then((function(a){t.deptOptions=a.data,t.$refs.dept.setCheckedKeys(e.data)}))},getMenuAllCheckedKeys:function(){var e=this.$refs.menu.getHalfCheckedKeys(),t=this.$refs.menu.getCheckedKeys();return e.unshift.apply(e,t),e},getDeptAllCheckedKeys:function(){var e=this.$refs.dept.getHalfCheckedKeys(),t=this.$refs.dept.getCheckedKeys();return e.unshift.apply(e,t),e},getRoleMenuTreeselect:function(e){var t=this;Object(l["e"])(e).then((function(e){t.getMenuTreeselect(e)}))},getRoleDeptTreeselect:function(e){var t=this;Object(s["e"])(e).then((function(e){t.getDeptTreeselect(e)}))},handleStatusChange:function(e){var t=this,a="0"===e.status?"启用":"停用";this.$confirm('确认要"'+a+'""'+e.roleName+'"角色吗?',"警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){return Object(o["b"])(e.roleId,e.status)})).then((function(){t.msgSuccess(a+"成功")})).catch((function(){e.status="0"===e.status?"1":"0"}))},cancel:function(){this.open=!1,this.reset()},cancelDataScope:function(){this.openDataScope=!1,this.reset()},reset:function(){void 0!==this.$refs.tree&&this.$refs.tree.setCheckedKeys([]),this.form={roleId:void 0,roleName:void 0,roleKey:void 0,roleSort:1,status:"0",menuIds:[],deptIds:[],remark:void 0},this.resetForm("form")},handleQuery:function(){this.queryParams.pageNum=1,this.getList()},handleAdd:function(){this.reset(),this.getMenuTreeselect(),this.open=!0,this.title="添加角色"},handleUpdate:function(e){var t=this;this.reset(),this.$nextTick((function(){t.getRoleMenuTreeselect(e.roleId)})),Object(o["e"])(e.roleId).then((function(e){t.form=e.data,t.open=!0,t.title="修改角色"}))},handleDataScope:function(e){var t=this;this.reset(),this.$nextTick((function(){t.getRoleDeptTreeselect(e.roleId)})),Object(o["e"])(e.roleId).then((function(e){t.form=e.data,t.openDataScope=!0,t.title="分配数据权限"}))},submitForm:function(){var e=this;this.$refs["form"].validate((function(t){t&&(void 0!==e.form.roleId?(e.form.menuIds=e.getMenuAllCheckedKeys(),Object(o["g"])(e.form).then((function(t){"0"===t.code?(e.msgSuccess("修改成功"),e.open=!1,e.getList()):e.msgError(t.msg)}))):(e.form.menuIds=e.getMenuAllCheckedKeys(),Object(o["a"])(e.form).then((function(t){"0"===t.code?(e.msgSuccess("新增成功"),e.open=!1,e.getList()):e.msgError(t.msg)}))))}))},submitDataScope:function(){var e=this;void 0!==this.form.roleId&&(this.form.deptIds=this.getDeptAllCheckedKeys(),Object(o["c"])(this.form).then((function(t){"0"===t.code?(e.msgSuccess("修改成功"),e.openDataScope=!1,e.getList()):e.msgError(t.msg)})))},handleDelete:function(e){var t=this;this.$confirm('是否确认删除名称为"'+e.roleName+'"的数据项?',"警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){return Object(o["d"])(e.roleId)})).then((function(){t.getList(),t.msgSuccess("删除成功")})).catch((function(){}))}}},c=i,u=a("2877"),d=Object(u["a"])(c,r,n,!1,null,null,null);t["default"]=d.exports},a6dc:function(e,t,a){"use strict";a.d(t,"d",(function(){return o})),a.d(t,"c",(function(){return l})),a.d(t,"f",(function(){return s})),a.d(t,"e",(function(){return i})),a.d(t,"a",(function(){return c})),a.d(t,"g",(function(){return u})),a.d(t,"b",(function(){return d}));var r=a("b775"),n=a("365c");function o(e){return Object(r["a"])({url:"".concat(n["d"],"/menu/list"),method:"get",params:e})}function l(e){return Object(r["a"])({url:"".concat(n["d"],"/menu/").concat(e),method:"get"})}function s(){return Object(r["a"])({url:"".concat(n["d"],"/menu/treeselect"),method:"get"})}function i(e){return Object(r["a"])({url:"".concat(n["d"],"/menu/roleMenuTreeselect/").concat(e),method:"get"})}function c(e){return Object(r["a"])({url:"".concat(n["d"],"/menu"),method:"post",data:e})}function u(e){return Object(r["a"])({url:"".concat(n["d"],"/menu"),method:"put",data:e})}function d(e){return Object(r["a"])({url:"".concat(n["d"],"/menu/").concat(e),method:"delete"})}},fcb7:function(e,t,a){"use strict";a.d(t,"d",(function(){return o})),a.d(t,"c",(function(){return l})),a.d(t,"f",(function(){return s})),a.d(t,"e",(function(){return i})),a.d(t,"a",(function(){return c})),a.d(t,"g",(function(){return u})),a.d(t,"b",(function(){return d}));var r=a("b775"),n=a("365c");function o(e){return Object(r["a"])({url:"".concat(n["d"],"/dept/list"),method:"get",params:e})}function l(e){return Object(r["a"])({url:"".concat(n["d"],"/dept/").concat(e),method:"get"})}function s(){return Object(r["a"])({url:"".concat(n["d"],"/dept/treeselect"),method:"get"})}function i(e){return Object(r["a"])({url:"".concat(n["d"],"/dept/roleDeptTreeselect/").concat(e),method:"get"})}function c(e){return Object(r["a"])({url:"".concat(n["d"],"/dept"),method:"post",data:e})}function u(e){return Object(r["a"])({url:"".concat(n["d"],"/dept"),method:"put",data:e})}function d(e){return Object(r["a"])({url:"".concat(n["d"],"/dept/").concat(e),method:"delete"})}}}]);