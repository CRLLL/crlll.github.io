(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-633059a4","chunk-2d21062b","chunk-10db1c36","chunk-2d21062b","chunk-c0571c22"],{2879:function(t,e,n){"use strict";n.r(e),n.d(e,"treeselect",(function(){return o})),n.d(e,"selectPfmcEmpList",(function(){return i})),n.d(e,"addPfmcOrg",(function(){return a})),n.d(e,"updatePfmcOrg",(function(){return s})),n.d(e,"delPfmcOrg",(function(){return u})),n.d(e,"searchEmp",(function(){return m})),n.d(e,"addEmpToOrg",(function(){return p})),n.d(e,"updatePfmcEmp",(function(){return f})),n.d(e,"delPfmcEmp",(function(){return l})),n.d(e,"batchTransferEmp",(function(){return d})),n.d(e,"listEmpNameOrNumber",(function(){return g})),n.d(e,"batchUpdateEmpStatus",(function(){return h})),n.d(e,"listEmp",(function(){return b})),n.d(e,"delOrgCheck",(function(){return O}));var r=n("b775"),c=n("b854");function o(){return Object(r["a"])({url:"".concat(c["pfmcAsist"],"/pfmcOrgEmp/treeselect"),method:"get"})}function i(t){return Object(r["a"])({url:"".concat(c["pfmcAsist"],"/pfmcOrgEmp/listEmpByOrgId"),method:"get",params:t})}function a(t){return Object(r["a"])({url:"".concat(c["pfmcAsist"],"/pfmcOrgEmp"),method:"post",data:t})}function s(t){return Object(r["a"])({url:"".concat(c["pfmcAsist"],"/pfmcOrgEmp"),method:"put",data:t})}function u(t){return Object(r["a"])({url:"".concat(c["pfmcAsist"],"/pfmcOrgEmp/deleteOrg/").concat(t),method:"delete"})}function m(t){return Object(r["a"])({url:"".concat(c["pfmcAsist"],"/pfmcOrgEmp/searchEmp"),method:"get",params:t})}function p(t){return Object(r["a"])({url:"".concat(c["pfmcAsist"],"/pfmcOrgEmp/updateEmpOfOrg"),method:"get",params:t})}function f(t){return Object(r["a"])({url:"".concat(c["pfmcAsist"],"/pfmcOrgEmp/updateEmp"),method:"post",data:t})}function l(t){return Object(r["a"])({url:"".concat(c["pfmcAsist"],"/pfmcOrgEmp/deleteEmp/").concat(t),method:"delete"})}function d(t){return Object(r["a"])({url:"".concat(c["pfmcAsist"],"/pfmcOrgEmp/batchTransferEmp"),method:"post",data:t})}function g(t){return Object(r["a"])({url:"".concat(c["pfmcAsist"],"/pfmcOrgEmp/listEmpNameOrNumber"),method:"get",params:t})}function h(t){return Object(r["a"])({url:"".concat(c["pfmcAsist"],"/pfmcOrgEmp/batchUpdateEmpStatus"),method:"post",data:t})}function b(t){return Object(r["a"])({url:"".concat(c["pfmcAsist"],"/pfmcOrgEmp/listEmp"),method:"post",data:t})}function O(t){return Object(r["a"])({url:"".concat(c["pfmcAsist"],"/pfmcOrgEmp/delOrgCheck/").concat(t),method:"delete"})}},"33c1":function(t,e,n){},"542c":function(t,e,n){},7965:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pfmc-import-button-container"},[n("el-button",{attrs:{size:t.size,type:t.type,plain:t.plain,round:t.round,circle:t.circle,disabled:t.disabled,icon:t.icon},on:{click:t.btnClick}},[t._v(t._s(t.btnText))]),t._v(" "),n("el-dialog",{attrs:{visible:t.showDialog,title:t.title,"close-on-click-modal":!1,"append-to-body":"",width:"500px"},on:{"update:visible":function(e){t.showDialog=e},open:t.openDialog,close:t.handleCancel}},[n("el-form",{ref:"form",attrs:{rules:t.rules,model:t.form,"label-width":"100px"}},[n("el-form-item",{attrs:{label:"所属新组织",prop:"orgId"}},[n("tree-select",{attrs:{clearable:!1,options:t.deptOptions,placeholder:"选择部门","default-expand-level":1},on:{input:t.validateForm,select:t.orgSelectChange},model:{value:t.form.orgId,callback:function(e){t.$set(t.form,"orgId",e)},expression:"form.orgId"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"待调整人员",prop:"emps"}},t._l(t.form.emps,(function(e){return n("el-tag",{key:e.empId,staticStyle:{"margin-right":"10px"},attrs:{closable:""},on:{close:function(n){return t.handleRemoveTag(e)}}},[t._v(t._s(e.empName))])})),1)],1),t._v(" "),n("div",{attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{plain:"",icon:"el-icon-close"},on:{click:t.handleCancel}},[t._v("取消")]),t._v(" "),n("el-button",{attrs:{type:"primary",icon:"el-icon-bank-card"},on:{click:t.sureBtnClick}},[t._v("保存")])],1)],1)],1)},c=[],o=n("7026"),i=n.n(o),a=(n("542c"),n("2879")),s={name:"TransferEmp",components:{TreeSelect:i.a},props:{size:{type:String,required:!1},type:{type:String,default:"primary"},plain:{type:Boolean,default:!0},round:{type:Boolean,default:!1},circle:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},icon:{type:String,default:"el-icon-edit"},btnText:{type:String,default:"调动人员"},title:{type:String,default:"调动人员"},emps:{type:Array,default:function(){return[]}}},data:function(){return{loading:!1,total:0,showDialog:!1,deptOptions:void 0,form:{orgId:void 0,emps:[]},rules:{orgId:[{required:!0,message:"所属新组织为空",trigger:"input"}],emps:[{type:"array",required:!0,message:"待调整人员为空",trigger:"change"}]},currOrgName:void 0}},created:function(){},mounted:function(){},computed:{},methods:{openDialog:function(){this.getTreeselect()},sureBtnClick:function(){var t=this;this.$refs.form.validate((function(e){if(e){var n=t.form.emps.map((function(t){return t.empName})).join("、");t.$confirm("您确定要调整"+n+'的部门为"'+t.currOrgName+'"吗',"警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var e=t.form.emps.map((function(t){return t.empId})),n={orgId:t.form.orgId,empIds:e};Object(a["batchTransferEmp"])(n).then((function(e){"0"===e.code?(t.msgSuccess("调动人员成功"),t.$refs.form.resetFields(),t.$emit("transfer-finished"),t.showDialog=!1):t.msgError(e.msg)}))})).catch((function(){}))}}))},orgSelectChange:function(t){if(this.form.emps.some((function(e){return e.orgId===t.orgId})))return this.$nextTick((function(){this.form.orgId=void 0})),void this.msgError("调入部门和原部门不能相同");this.currOrgName=t.label},getTreeselect:function(){var t=this;Object(a["treeselect"])().then((function(e){t.deptOptions=e.data}))},btnClick:function(){0!==this.emps.length?(this.form.emps=JSON.parse(JSON.stringify(this.emps)),this.showDialog=!0):this.msgError("请选择员工")},handleRemoveTag:function(t){this.form.emps=this.form.emps.filter((function(e){return e.empId!==t.empId}))},handleFinish:function(){this.$emit("select-finish",this.resultList),this.showDialog=!1},handleCancel:function(){this.resetForm(),this.showDialog=!1},validateForm:function(){this.$refs.form.validate((function(t){}))},resetForm:function(){this.form={orgId:void 0,emps:[]},this.$refs.form.clearValidate()}},watch:{}},u=s,m=(n("8aec"),n("2877")),p=Object(m["a"])(u,r,c,!1,null,"9e44bd02",null);e["default"]=p.exports},"8aec":function(t,e,n){"use strict";var r=n("33c1"),c=n.n(r);c.a},b854:function(t,e,n){"use strict";n.r(e),n.d(e,"pfmcSettings",(function(){return r})),n.d(e,"pfmcAsist",(function(){return c})),n.d(e,"pfmcExecution",(function(){return o})),n.d(e,"pfmcEval",(function(){return i}));var r="pfmc-settings",c="pfmc-asist",o="pfmc-execution",i="pfmc-eval"}}]);