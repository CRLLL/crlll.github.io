(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f832d162","chunk-2d21062b","chunk-10db1c36","chunk-2d21062b"],{"06a8":function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"ihr-wrapper"},[r("div",{staticClass:"box--tree--contant"},[r("div",{staticClass:"tree-left"},[r("div",{staticClass:"tree-left-top-btn-bar"},[r("update-org",{attrs:{plain:"",isAdd:""},on:{"update-finished":e.getTreeselect}}),e._v(" "),r("update-org",{attrs:{btnText:"修改部门",plain:"",icon:"el-icon-edit",orgId:e.queryParams.orgId},on:{"update-finished":e.getTreeselect}}),e._v(" "),r("el-button",{attrs:{type:"danger",plain:"",icon:"el-icon-delete"},on:{click:e.handleDelOrg}},[e._v("删除部门")])],1),e._v(" "),r("div",{staticClass:"tree-left-main"},[r("el-tree",{ref:"tree",attrs:{data:e.orgOptions,props:e.defaultProps,"node-key":"orgId","expand-on-click-node":!1,"highlight-current":e.highlight,"filter-node-method":e.filterNode,"default-expand-all":""},on:{"node-click":e.handleNodeClick}})],1)]),e._v(" "),r("div",{staticClass:"contant-right"},[r("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"100px"}},[r("div",{staticClass:"main-table"},[r("div",{staticClass:"button-wrap"},[r("div",{staticClass:"my-inp"},[r("el-input",{attrs:{placeholder:"搜索员工",clearable:""},model:{value:e.empNumber,callback:function(t){e.empNumber=t},expression:"empNumber"}},[r("el-button",{staticStyle:{"margin-left":"-20px!important"},attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.handleQueryUser},slot:"append"})],1)],1),e._v(" "),r("transfer-emp",{attrs:{emps:e.selectedEmps},on:{"transfer-finished":e.transferFinished}}),e._v(" "),r("el-button",{attrs:{type:"primary",plain:"",icon:"el-icon-bank-card"},on:{click:e.saveEmpStatus}},[e._v("保存")]),e._v(" "),r("export-data",{attrs:{"task-id":"pfmc_basicsettings_org","before-download":function(){return!0}}})],1),e._v(" "),r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"empTabel",attrs:{data:e.userList,"row-key":"empId"},on:{select:e.singleSele,"select-all":e.allSels}},[r("el-table-column",{attrs:{type:"selection"}}),e._v(" "),r("el-table-column",{attrs:{label:"序号",type:"index"}}),e._v(" "),r("el-table-column",{attrs:{label:"部门",prop:"orgName","show-overflow-tooltip":""}}),e._v(" "),r("el-table-column",{attrs:{label:"员工编号",prop:"empNumber","show-overflow-tooltip":""}}),e._v(" "),r("el-table-column",{attrs:{label:"姓名",prop:"empName","show-overflow-tooltip":""}}),e._v(" "),r("el-table-column",{attrs:{label:"有效",prop:"status"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-switch",{attrs:{"on-value":1,"off-value":0},on:{change:function(r){return e.statusChange(t.row)}},model:{value:t.row.status,callback:function(r){e.$set(t.row,"status",r)},expression:"scope.row.status"}})]}}])}),e._v(" "),r("el-table-column",{attrs:{label:"同步",prop:"isSync"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-switch",{attrs:{"on-value":1,"off-value":0},on:{change:function(r){return e.isSyncChange(t.row)}},model:{value:t.row.isSync,callback:function(r){e.$set(t.row,"isSync",r)},expression:"scope.row.isSync"}})]}}])})],1),e._v(" "),r("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],staticClass:"pagination-wrap",attrs:{total:e.total,page:e.queryParams.pageNum,limit:e.queryParams.pageSize},on:{"update:page":function(t){return e.$set(e.queryParams,"pageNum",t)},"update:limit":function(t){return e.$set(e.queryParams,"pageSize",t)},pagination:e.searchPfmcEmpListByOrgId}})],1)])],1)])])},n=[],c=(r("96cf"),r("3b8d")),a=(r("f400"),r("1c4c"),r("ac6a"),r("5df3"),r("4f7f"),r("2879")),i=r("7026"),o=r.n(i),l=(r("542c"),{components:{Treeselect:o.a,ExportData:function(){return r.e("chunk-336f6cc4").then(r.bind(null,"2ee5"))},UpdateOrg:function(){return r.e("chunk-0af4c832").then(r.bind(null,"95da"))},TransferEmp:function(){return r.e("chunk-c0571c22").then(r.bind(null,"7965"))}},data:function(){return{loading:!1,total:0,orgOptions:void 0,highlight:!0,orgName:void 0,empName:void 0,showOrgName:void 0,empNumber:void 0,selectedOrg:{},selectedUser:{},trueStatusUser:new Set,falseStatusUser:new Set,trueSyncUser:new Set,falseSyncUser:new Set,dataChangeUser:[],selectedEmpId:[],userList:[],selectedEmps:[],defaultProps:{children:"children",label:"label"},form:{},rules:{},queryParams:{orgId:void 0,pageNum:1,pageSize:10},currPagePreSelected:[]}},created:function(){this.getTreeselect()},beforeRouteLeave:function(e,t,r){var s=this;0===this.falseStatusUser.size&&0===this.trueStatusUser.size&&0===this.falseSyncUser.size&&0===this.trueSyncUser.size?r():this.$confirm("您有未保存的信息，是否保存？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){s.batchUpdateEmpInfo()})).catch((function(){r()}))},methods:{saveEmpStatus:function(){0===this.falseStatusUser.size&&0===this.trueStatusUser.size&&0===this.falseSyncUser.size&&0===this.trueSyncUser.size?this.msgInfo("您未修改员工信息"):this.batchUpdateEmpInfo()},batchUpdateEmpInfo:function(){var e=this,t={trueStatusUser:Array.from(this.trueStatusUser),falseStatusUser:Array.from(this.falseStatusUser),trueSyncUser:Array.from(this.trueSyncUser),falseSyncUser:Array.from(this.falseSyncUser)};this.loading=!0,Object(a["batchUpdateEmpStatus"])(t).then((function(t){e.loading=!1,"0"===t.code?(e.msgSuccess("修改成功"),e.trueStatusUser.clear(),e.falseStatusUser.clear(),e.trueSyncUser.clear(),e.falseSyncUser.clear()):e.msgError(t.msg)}))},statusChange:function(e){var t=e.empId;e.status?(this.falseStatusUser.delete(t),this.trueStatusUser.add(t)):(this.trueStatusUser.delete(t),this.falseStatusUser.add(t))},isSyncChange:function(e){var t=e.empId;e.isSync?(this.falseSyncUser.delete(t),this.trueSyncUser.add(t)):(this.trueSyncUser.delete(t),this.falseSyncUser.add(t))},transferFinished:function(){this.$refs.empTabel.clearSelection(),this.selectedEmps=[],this.searchPfmcEmpListByOrgId()},singleSele:function(e,t){this.selsChange(e,[t])},allSels:function(e){this.selsChange(e)},selsChange:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];e.length>this.currPagePreSelected.length?this.selectedEmps=this.addSels(this.selectedEmps,e):e.length>0&&0!==t.length?this.selectedEmps=this.delUnSels(this.selectedEmps,t):0===e.length&&(this.selectedEmps=this.delUnSels(this.selectedEmps,this.currPagePreSelected)),this.currPagePreSelected=e},addSels:function(e,t){var r=e.concat(t),s=new Map;r.forEach((function(e){return s.set(e.empId,e)}));var n=new Array;return s.forEach((function(e,t){n.push(e)})),n},delUnSels:function(e,t){return t.forEach((function(t,r){e.forEach((function(r,s){t.empId===r.empId&&e.splice(s,1)}))})),e},filterNode:function(e,t){return!e||-1!==t.label.indexOf(e)},handleNodeClick:function(e){this.reset(),this.selectedOrg=e,this.showOrgName=this.selectedOrg.label,this.queryParams.orgId=e.orgId,this.searchPfmcEmpListByOrgId()},searchPfmcEmpListByOrgId:function(){var e=this;this.loading=!0,Object(a["selectPfmcEmpList"])(this.queryParams).then((function(t){e.loading=!1,"0"===t.code&&(e.userList=t.data.list,e.total=t.data.total,e.$nextTick((function(){var e=this;this.currPagePreSelected=[],this.userList.forEach((function(t){e.selectedEmps.forEach((function(r){t.empId===r.empId&&(e.currPagePreSelected.push(t),e.$refs.empTabel.toggleRowSelection(t,!0))}))}))})))}))},setUserSelected:function(e){for(var t=this.$refs.user_all_area.options,r=0;r<t.length;r++){var s=t[r];if(s.innerHTML===e){this.selectedUser=this.userList[r],this.selectedEmpId=[this.selectedUser.empId];break}}},getSelectedUser:function(){if(this.userList.length>0){var e=this.$refs.user_all_area.options.selectedIndex;this.selectedUser=this.userList[e]}},handleSave:function(){var e=this;Object(a["updatePfmcEmp"])(this.selectedUser).then((function(t){"0"===t.code?(e.msgSuccess("修改成功"),e.open=!1,e.searchPfmcEmpListByOrgId(e.selectedUser.orgId)):e.msgError(t.msg)}))},handleExport:function(){},handleAddOrg:function(){var e=this;this.selectedOrg&&this.selectedOrg.orgId?this.$confirm('是否添加绩效组织"'+this.showOrgName+'"?',"警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var t={parentOrgId:e.selectedOrg.orgId,orgName:e.showOrgName};return Object(a["addPfmcOrg"])(t)})).then((function(t){console.log("addPfmcOrg",t),"0"===t.code?(e.getTreeselect(),e.msgSuccess("添加成功")):e.msgError(t.msg)})).catch((function(){})):this.msgError("请选择组织！")},handleModifyOrg:function(){var e=this;this.selectedOrg&&this.selectedOrg.orgId?this.$confirm('是否修改绩效组织"'+this.showOrgName+'"?',"警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var t={orgId:e.selectedOrg.orgId,orgName:e.showOrgName};return Object(a["updatePfmcOrg"])(t)})).then((function(t){console.log("updatePfmcOrg",t),"0"===t.code?(e.getTreeselect(),e.msgSuccess("修改成功")):e.msgError(t.msg)})).catch((function(){})):this.msgError("请选择组织！")},handleDelOrg:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(){var t,r=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.selectedOrg||!this.selectedOrg.orgId){e.next=10;break}return e.next=3,Object(a["delOrgCheck"])(this.selectedOrg.orgId);case 3:if(t=e.sent,"0"===t.code){e.next=7;break}return this.msgError(t.msg),e.abrupt("return");case 7:this.$confirm('您确定要删除部门名称为"'+this.showOrgName+'"数据吗，删除后不可恢复',"警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){return Object(a["delPfmcOrg"])(r.selectedOrg.orgId)})).then((function(e){console.log("delPfmcOrg",e),"0"===e.code?(r.getTreeselect(),r.msgSuccess("删除成功")):r.msgError(e.msg)})).catch((function(){})),e.next=11;break;case 10:this.msgError("请选择要删除的部门");case 11:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),handleAddUser:function(){var e=this;if(this.selectedOrg&&this.selectedOrg.orgId){if(!this.empNumber)return void this.msgError("请输入员工编号！");var t={empNumer:this.empNumber};Object(a["searchEmp"])(t).then((function(r){r.data?e.$confirm("是否确认添加员工?","警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){return t={pfmcOrgId:e.selectedOrg.orgId,empNumer:e.empNumber},Object(a["addEmpToOrg"])(t)})).then((function(t){console.log("addEmpToOrg",t),"0"===t.code?(e.searchPfmcEmpListByOrgId(e.selectedOrg.orgId),e.msgSuccess("添加成功")):e.msgError(t.msg)})).catch((function(){})):e.msgError("该员工编号不存在！")}))}else this.msgError("请选择组织！")},handleQueryUser:function(){var e=this;if(this.empNumber){var t={params:this.empNumber};this.loading=!0,Object(a["listEmpNameOrNumber"])(t).then((function(t){e.loading=!1,"0"===t.code?(e.total=0,e.userList=t.data):e.msgError(t.msg)}))}else this.msgError("请输入员工编号或员工姓名！")},handleDelUser:function(){var e=this;this.selectedUser?this.$confirm('是否确认删除员工"'+this.selectedUser.empName+'"的数据项?',"警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){return Object(a["delPfmcEmp"])(e.selectedUser.empId)})).then((function(t){console.log("delPfmcEmp",t),"0"===t.code?(e.searchPfmcEmpListByOrgId(e.selectedOrg.orgId),e.msgSuccess("删除成功")):e.msgError(t.msg)})).catch((function(){})):this.msgError("请选择一名员工！")},getTreeselect:function(){var e=this;Object(a["treeselect"])().then((function(t){e.orgOptions=t.data}))},reset:function(){this.selectedOrg={},this.selectedUser={},this.selectedEmpId=[],this.showOrgName=void 0,this.userList=[],this.resetForm("form")}},watch:{orgName:function(e){this.$refs.tree.filter(e)},empName:function(e){this.setUserSelected(e)}}}),u=l,d=(r("ff06"),r("2877")),m=Object(d["a"])(u,s,n,!1,null,"4091185a",null);t["default"]=m.exports},2879:function(e,t,r){"use strict";r.r(t),r.d(t,"treeselect",(function(){return c})),r.d(t,"selectPfmcEmpList",(function(){return a})),r.d(t,"addPfmcOrg",(function(){return i})),r.d(t,"updatePfmcOrg",(function(){return o})),r.d(t,"delPfmcOrg",(function(){return l})),r.d(t,"searchEmp",(function(){return u})),r.d(t,"addEmpToOrg",(function(){return d})),r.d(t,"updatePfmcEmp",(function(){return m})),r.d(t,"delPfmcEmp",(function(){return f})),r.d(t,"batchTransferEmp",(function(){return h})),r.d(t,"listEmpNameOrNumber",(function(){return p})),r.d(t,"batchUpdateEmpStatus",(function(){return g})),r.d(t,"listEmp",(function(){return O})),r.d(t,"delOrgCheck",(function(){return b}));var s=r("b775"),n=r("b854");function c(){return Object(s["a"])({url:"".concat(n["pfmcAsist"],"/pfmcOrgEmp/treeselect"),method:"get"})}function a(e){return Object(s["a"])({url:"".concat(n["pfmcAsist"],"/pfmcOrgEmp/listEmpByOrgId"),method:"get",params:e})}function i(e){return Object(s["a"])({url:"".concat(n["pfmcAsist"],"/pfmcOrgEmp"),method:"post",data:e})}function o(e){return Object(s["a"])({url:"".concat(n["pfmcAsist"],"/pfmcOrgEmp"),method:"put",data:e})}function l(e){return Object(s["a"])({url:"".concat(n["pfmcAsist"],"/pfmcOrgEmp/deleteOrg/").concat(e),method:"delete"})}function u(e){return Object(s["a"])({url:"".concat(n["pfmcAsist"],"/pfmcOrgEmp/searchEmp"),method:"get",params:e})}function d(e){return Object(s["a"])({url:"".concat(n["pfmcAsist"],"/pfmcOrgEmp/updateEmpOfOrg"),method:"get",params:e})}function m(e){return Object(s["a"])({url:"".concat(n["pfmcAsist"],"/pfmcOrgEmp/updateEmp"),method:"post",data:e})}function f(e){return Object(s["a"])({url:"".concat(n["pfmcAsist"],"/pfmcOrgEmp/deleteEmp/").concat(e),method:"delete"})}function h(e){return Object(s["a"])({url:"".concat(n["pfmcAsist"],"/pfmcOrgEmp/batchTransferEmp"),method:"post",data:e})}function p(e){return Object(s["a"])({url:"".concat(n["pfmcAsist"],"/pfmcOrgEmp/listEmpNameOrNumber"),method:"get",params:e})}function g(e){return Object(s["a"])({url:"".concat(n["pfmcAsist"],"/pfmcOrgEmp/batchUpdateEmpStatus"),method:"post",data:e})}function O(e){return Object(s["a"])({url:"".concat(n["pfmcAsist"],"/pfmcOrgEmp/listEmp"),method:"post",data:e})}function b(e){return Object(s["a"])({url:"".concat(n["pfmcAsist"],"/pfmcOrgEmp/delOrgCheck/").concat(e),method:"delete"})}},"542c":function(e,t,r){},b854:function(e,t,r){"use strict";r.r(t),r.d(t,"pfmcSettings",(function(){return s})),r.d(t,"pfmcAsist",(function(){return n})),r.d(t,"pfmcExecution",(function(){return c})),r.d(t,"pfmcEval",(function(){return a}));var s="pfmc-settings",n="pfmc-asist",c="pfmc-execution",a="pfmc-eval"},c419:function(e,t,r){},f400:function(e,t,r){"use strict";var s=r("c26b"),n=r("b39a"),c="Map";e.exports=r("e0b8")(c,(function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}}),{get:function(e){var t=s.getEntry(n(this,c),e);return t&&t.v},set:function(e,t){return s.def(n(this,c),0===e?0:e,t)}},s,!0)},ff06:function(e,t,r){"use strict";var s=r("c419"),n=r.n(s);n.a}}]);