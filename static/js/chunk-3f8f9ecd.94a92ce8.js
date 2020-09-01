(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3f8f9ecd","chunk-2d21062b","chunk-08244774","chunk-b5844298","chunk-6b4879f5","chunk-2d21062b"],{"3fbf":function(t,i,e){"use strict";e.r(i);var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("el-form",{ref:"distributionForm",attrs:{model:t.distributionForm,rules:t.rules,"label-width":"80px",disabled:!t.isEdit}},[e("el-row",[e("el-col",{attrs:{span:12}},[e("el-form-item",{attrs:{label:"名称",prop:"distribution.distributionName"}},[e("el-input",{model:{value:t.distributionForm.distribution.distributionName,callback:function(i){t.$set(t.distributionForm.distribution,"distributionName",i)},expression:"distributionForm.distribution.distributionName"}})],1)],1),t._v(" "),e("el-col",{attrs:{span:12}},[e("el-form-item",{attrs:{label:"状态",prop:"distribution.status"}},[e("el-select",{attrs:{placeholder:"状态",clearable:"",size:"small"},model:{value:t.distributionForm.distribution.status,callback:function(i){t.$set(t.distributionForm.distribution,"status",i)},expression:"distributionForm.distribution.status"}},t._l(t.statusOptions,(function(t){return e("el-option",{key:t.dictValue,attrs:{label:t.dictLabel,value:t.dictValue}})})),1)],1)],1)],1),t._v(" "),e("el-row",[e("el-col",{attrs:{span:24}},[e("el-form-item",{attrs:{label:"附件"}},[e("file-upload",{attrs:{"business-type":"pfmc-distrib","business-id":t.tmpBusinessId},on:{"update-business-id":t.updateBusinessId}})],1)],1)],1),t._v(" "),e("el-row",{staticClass:"button-float-right"},[e("el-button",{attrs:{type:"primary",icon:"el-icon-plus",size:"mini"},on:{click:t.handleAddRow}},[t._v("增加")]),t._v(" "),e("el-button",{attrs:{type:"danger",icon:"el-icon-remove",size:"mini",disabled:0==this.selectedRows.length},on:{click:function(i){return t.handleDelRow(t.selectedRows)}}},[t._v("删除")])],1),t._v(" "),e("el-table",{ref:"scaleTable",attrs:{data:t.distributionForm.items,"empty-text":" ",height:"300"},on:{"selection-change":t.selsChange}},[e("el-table-column",{attrs:{type:"selection",align:"center"}}),t._v(" "),e("el-table-column",{attrs:{label:"比例",align:"center"},scopedSlots:t._u([{key:"default",fn:function(i){return[e("el-form-item",{attrs:{prop:"items."+i.$index+".scale",rules:[{required:!0,message:"比例不能为空",trigger:"change"}]}},[e("el-row",[e("el-col",{attrs:{span:8}},[e("el-input",{staticClass:"light-blue-theme",attrs:{type:"text",minlength:"1",maxlength:"3"},nativeOn:{keyup:function(e){return t.numberValid(i.row)}},model:{value:i.row.scale,callback:function(e){t.$set(i.row,"scale",e)},expression:"scope.row.scale"}})],1),t._v(" "),e("el-col",{attrs:{span:2}},[t._v("%")])],1)],1)]}}])})],1)],1)},s=[],o=(e("ac6a"),e("a481"),{name:"DistributionDetail",components:{FileUpload:function(){return e.e("chunk-85cbf3cc").then(e.bind(null,"705e"))}},props:{isEdit:{type:Boolean,default:!1},distributionForm:{type:Object,default:function(){return{distribution:{distributionId:"0",distributionName:"",status:"1"},items:[{distributionItemId:"",distributionId:"",scale:"",orderNum:1,isDeleted:!1}]}}}},data:function(){return{title:"",statusOptions:[],selectedRows:[],rules:{"distribution.distributionName":[{required:!0,message:"正态分布名称不能为空",trigger:"blur"}],"distribution.status":[{required:!0,message:"状态不能为空",trigger:"change"}]},tmpBusinessId:""}},computed:{},watch:{distributionForm:function(t,i){this.$emit("update:distributionForm",this.distributionForm)},"distributionForm.distribution.distributionId":function(t,i){this.tmpBusinessId=t&&"0"!==t?t:""}},created:function(){var t=this;this.getDicts("sys_normal_status").then((function(i){t.statusOptions=i.data}))},mounted:function(){},methods:{updateBusinessId:function(t){t&&t.newBusinessId!==this.tmpBusinessId&&(this.tmpBusinessId=t.newBusinessId)},numberValid:function(t){t.scale=t.scale.replace(/[^\.\d]/g,"").replace(".","")},handleAddRow:function(){var t=this.distributionForm.items,i=0==t.length?1:parseInt(t[t.length-1].orderNum)+1;this.distributionForm.items.push({distributionItemId:"0",distributionId:this.distributionForm.distribution.distributionId,scale:"",orderNum:i,isDeleted:!1})},handleDelRow:function(t){var i=this,e=t;e&&e.forEach((function(t,e){i.distributionForm.items.forEach((function(e,n){t.orderNum===e.orderNum&&i.distributionForm.items.splice(n,1)}))})),this.$refs.scaleTable.clearSelection(),this.selectedRows=[]},selsChange:function(t){this.selectedRows=t},validateForm:function(){var t=this,i=!0;this.$refs.distributionForm.validate((function(t){i=t}));var e=this.distributionForm.items,n=0;return i&&e.every((function(i,s){return""===i.scale?(t.$message({showClose:!0,message:"比例不能为空"}),!1):(n+=parseInt(i.scale),e.length==s+1&&100!=n?(t.$message({showClose:!0,message:"比例总和不为100"}),!1):e.length==s+1&&100==n||void 0)}))},resetFormValidate:function(t){this.$refs["distributionForm"].resetFields()}}}),a=o,r=(e("8cfc"),e("2877")),u=Object(r["a"])(a,n,s,!1,null,"4e1b4f6c",null);i["default"]=u.exports},"85ff":function(t,i,e){"use strict";var n=e("c3a6"),s=e.n(n);s.a},"8cfc":function(t,i,e){"use strict";var n=e("a270"),s=e.n(n);s.a},"907a":function(t,i,e){"use strict";e.r(i),e.d(i,"listPfmcDistribution",(function(){return o})),e.d(i,"getDistribution",(function(){return a})),e.d(i,"addDistributionDetail",(function(){return r})),e.d(i,"updateDistribution",(function(){return u})),e.d(i,"updateDistributionDetail",(function(){return l}));var n=e("b775"),s=e("b854");function o(t){return Object(n["a"])({url:"".concat(s["pfmcSettings"],"/pfmcdistribution/list"),method:"get",params:t})}function a(t){return Object(n["a"])({url:"".concat(s["pfmcSettings"],"/pfmcdistribution/").concat(t),method:"get"})}function r(t){return Object(n["a"])({url:"".concat(s["pfmcSettings"],"/pfmcdistribution/add"),method:"post",data:t})}function u(t){return Object(n["a"])({url:"".concat(s["pfmcSettings"],"/pfmcdistribution/update"),method:"put",data:t})}function l(t){return Object(n["a"])({url:"".concat(s["pfmcSettings"],"/pfmcdistribution/updatedetail"),method:"put",data:t})}},a270:function(t,i,e){},b854:function(t,i,e){"use strict";e.r(i),e.d(i,"pfmcSettings",(function(){return n})),e.d(i,"pfmcAsist",(function(){return s})),e.d(i,"pfmcExecution",(function(){return o})),e.d(i,"pfmcEval",(function(){return a}));var n="pfmc-settings",s="pfmc-asist",o="pfmc-execution",a="pfmc-eval"},c3a6:function(t,i,e){},ebf8:function(t,i,e){"use strict";e.r(i);var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"app-container"},[e("el-dialog",{attrs:{title:t.title,visible:t.show,width:"500px","close-on-click-modal":!1},on:{"update:visible":function(i){t.show=i},open:t.open,close:t.cancel}},[e("distribution-detail",{ref:"dialogForm",attrs:{isEdit:t.isEdit,distributionForm:t.distributionForm},on:{"update:distributionForm":function(i){t.distributionForm=i},"update:distribution-form":function(i){t.distributionForm=i}}}),t._v(" "),e("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{attrs:{type:"primary"},on:{click:t.submitForm}},[t._v("确 定")]),t._v(" "),e("el-button",{on:{click:t.cancel}},[t._v("取 消")])],1)],1)],1)},s=[],o=e("3fbf"),a=e("907a"),r={name:"UpdateDistributionDialog",components:{DistributionDetail:o["default"]},props:{visible:{type:Boolean,default:!1},isEdit:{type:Boolean,default:!0},title:{type:String,default:""},distributionId:{type:String,default:"0"}},data:function(){return{show:!1,distributionForm:{distribution:{distributionId:"0",distributionName:"",status:"1"},items:[{distributionItemId:"0",distributionId:"0",scale:"",orderNum:1,isDeleted:!1}]}}},computed:{},created:function(){},methods:{submitForm:function(){this.$refs.dialogForm.validateForm()&&("0"==this.distributionId?this.addDistributionInfo():this.updateDistributionInfo())},resetForm:function(){this.$refs.dialogForm.resetFormValidate(),this.distributionForm={distribution:{distritutionId:"0",distributionName:"",status:"1"},items:[{distributionItemId:"0",distributionId:"0",scale:"",orderNum:1,isDeleted:!1}]}},open:function(){"0"!=this.distributionId&&this.getDistributionInfo()},cancel:function(){this.resetForm(),this.show=!1},getDistributionInfo:function(){var t=this;Object(a["getDistribution"])(this.distributionId).then((function(i){"0"===i.code?t.distributionForm=i.data:t.$notify({title:"警告",message:i.msg,type:"warning"})})).catch((function(i){t.$notify.error({title:"错误",message:i})}))},addDistributionInfo:function(){var t=this;Object(a["addDistributionDetail"])(this.distributionForm).then((function(i){"0"===i.code?(t.$message({showClose:!0,message:"新增正太分布定义成功"}),t.cancel()):t.$notify({title:"警告",message:"新增正态分布定义失败",type:"warning"})})).catch((function(i){t.$notify.error({title:"错误",message:i})}))},updateDistributionInfo:function(){var t=this;Object(a["updateDistributionDetail"])(this.distributionForm).then((function(i){"0"===i.code?(t.$message({showClose:!0,message:"修改正太分布定义成功"}),t.cancel()):t.$notify({title:"警告",message:"修改正态分布定义失败",type:"warning"})})).catch((function(i){t.$notify.error({title:"错误",message:i})}))}},watch:{show:function(){0==this.show&&this.$emit("update:visible",!1)},visible:function(){this.show=this.visible}}},u=r,l=e("2877"),d=Object(l["a"])(u,n,s,!1,null,null,null);i["default"]=d.exports},f232:function(t,i,e){"use strict";e.r(i);var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"app-container"},[e("el-card",{staticClass:"box-card"},[e("el-form",{attrs:{inline:!0,rules:t.rules}},[e("el-form-item",{attrs:{label:"正态分布定义名称"}},[e("el-input",{attrs:{placeholder:"正态分布定义名称",clearable:"",size:"small"},nativeOn:{keyup:function(i){return!i.type.indexOf("key")&&t._k(i.keyCode,"enter",13,i.key,"Enter")?null:t.handleQuery(i)}},model:{value:t.queryParams.distributionName,callback:function(i){t.$set(t.queryParams,"distributionName",i)},expression:"queryParams.distributionName"}})],1),t._v(" "),e("el-form-item",{attrs:{label:"状态"}},[e("el-select",{attrs:{placeholder:"选择状态",clearable:"",size:"small"},model:{value:t.queryParams.status,callback:function(i){t.$set(t.queryParams,"status",i)},expression:"queryParams.status"}},t._l(t.statusOptions,(function(t){return e("el-option",{key:t.dictValue,attrs:{label:t.dictLabel,value:t.dictValue}})})),1)],1),t._v(" "),e("el-form-item",{staticClass:"button-float-right"},[e("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"mini"},on:{click:t.handleQuery}},[t._v("查询")]),t._v(" "),e("el-button",{attrs:{type:"primary",icon:"el-icon-plus",size:"mini"},on:{click:t.handleAdd}},[t._v("新增")]),t._v(" "),e("import-data",{attrs:{"task-id":"example_pfmc_section",size:"mini"},on:{"import-finished":function(i){i&&t.$message({type:"success",message:"TODO 业务处理"})}}}),t._v(" "),e("export-data",{attrs:{"task-id":"example_pfmc_distribution",size:"mini",params:t.exportParams,"before-download":function(){return!(t.total<=0)||(t.$message({type:"info",message:"没有结果，无需导出"}),!1)}}})],1)],1)],1),t._v(" "),e("el-card",{staticClass:"box-card"},[e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{data:t.distributionList,"row-key":"distributionId"}},[e("el-table-column",{attrs:{label:"正态分布定义名称",prop:"distributionName"}}),t._v(" "),e("el-table-column",{attrs:{label:"状态",align:"center",width:"120"},scopedSlots:t._u([{key:"default",fn:function(i){return[e("el-switch",{attrs:{"active-value":"1","inactive-value":"0"},on:{change:function(e){return t.handleUpdateStatus(i.row)}},model:{value:i.row.status,callback:function(e){t.$set(i.row,"status",e)},expression:"scope.row.status"}})]}}])}),t._v(" "),e("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(i){return[e("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"编辑",placement:"top",enterable:!1}},[e("el-button",{attrs:{size:"mini",type:"text",icon:"el-icon-edit"},on:{click:function(e){return t.handleUpdate(i.row)}}})],1),t._v(" "),e("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"删除",placement:"top",enterable:!1}},[e("el-button",{attrs:{size:"mini",type:"text",icon:"el-icon-delete"},on:{click:function(e){return t.handleDel(i.row)}}})],1)]}}])})],1)],1),t._v(" "),e("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],attrs:{total:t.total,page:t.queryParams.pageNum,limit:t.queryParams.pageSize},on:{"update:page":function(i){return t.$set(t.queryParams,"pageNum",i)},"update:limit":function(i){return t.$set(t.queryParams,"pageSize",i)},pagination:t.getList}}),t._v(" "),e("update-distribution-dialog",{attrs:{visible:t.updateDialogShow,title:t.title,distributionId:t.distributionId},on:{"update:visible":function(i){t.updateDialogShow=i}}})],1)},s=[],o=e("ebf8"),a=e("907a"),r={components:{UpdateDistributionDialog:o["default"],ImportData:function(){return e.e("chunk-a7c7fc38").then(e.bind(null,"77dc"))},ExportData:function(){return e.e("chunk-336f6cc4").then(e.bind(null,"2ee5"))}},data:function(){return{updateDialogShow:!1,title:"",distributionId:"0",total:0,loading:!1,rules:{},distributionList:[],statusOptions:[],queryParams:{pageNum:1,pageSize:10,distributionName:void 0,status:"1"}}},computed:{exportParams:function(){return{distributionName:this.queryParams.distributionName,status:"1"===this.queryParams.status||"0"!==this.queryParams.status&&null}}},created:function(){var t=this;this.getList(),this.getDicts("sys_normal_status").then((function(i){t.statusOptions=i.data}))},methods:{getList:function(){var t=this;this.loading=!0,Object(a["listPfmcDistribution"])(this.queryParams).then((function(i){"0"===i.code?(t.distributionList=i.data.list,t.total=i.data.total,t.loading=!1):t.$notify({title:"警告",message:"正态分布定义查询失败",type:"warning"})})).catch((function(i){t.$notify.error({title:"错误",message:i})}))},handleQuery:function(){this.queryParams.pageNum=1,this.getList()},handleAdd:function(){this.distributionId="0",this.title="增加正态分布定义",this.updateDialogShow=!0},handleUpdateStatus:function(t){var i=this;this.loading=!0;var e=t.distributionId,n=t.status,s=t.isDeleted,o={distributionId:e,status:n,isDeleted:s};Object(a["updateDistribution"])(o).then((function(t){i.loading=!1,"0"===t.code?i.getList():i.$notify({title:"警告",message:t.msg,type:"warning"})})).catch((function(t){i.loading=!1,i.$notify.error({title:"错误",message:t})}))},handleUpdate:function(t){this.distributionId=t.distributionId,this.title="修改正态分布定义",this.updateDialogShow=!0},handleDel:function(t){var i=this;this.$confirm("确认删除？").then((function(e){i.loading=!0;var n=t.distributionId,s={distributionId:n,isDeleted:!0};Object(a["updateDistribution"])(s).then((function(t){i.loading=!1,"0"===t.code?i.getList():i.$notify({title:"警告",message:t.msg,type:"warning"})})).catch((function(t){i.loading=!1,i.$notify.error({title:"错误",message:t})}))})).catch((function(){}))}},watch:{updateDialogShow:function(){0==this.updateDialogShow&&this.getList()}}},u=r,l=(e("85ff"),e("2877")),d=Object(l["a"])(u,n,s,!1,null,"4e6f6ae4",null);i["default"]=d.exports}}]);