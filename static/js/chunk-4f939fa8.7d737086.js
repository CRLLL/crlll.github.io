(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4f939fa8"],{a6dc:function(e,t,r){"use strict";r.d(t,"d",(function(){return o})),r.d(t,"c",(function(){return i})),r.d(t,"f",(function(){return c})),r.d(t,"e",(function(){return s})),r.d(t,"a",(function(){return l})),r.d(t,"g",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r("b775"),a=r("365c");function o(e){return Object(n["a"])({url:"".concat(a["d"],"/menu/list"),method:"get",params:e})}function i(e){return Object(n["a"])({url:"".concat(a["d"],"/menu/").concat(e),method:"get"})}function c(){return Object(n["a"])({url:"".concat(a["d"],"/menu/treeselect"),method:"get"})}function s(e){return Object(n["a"])({url:"".concat(a["d"],"/menu/roleMenuTreeselect/").concat(e),method:"get"})}function l(e){return Object(n["a"])({url:"".concat(a["d"],"/menu"),method:"post",data:e})}function u(e){return Object(n["a"])({url:"".concat(a["d"],"/menu"),method:"put",data:e})}function m(e){return Object(n["a"])({url:"".concat(a["d"],"/menu/").concat(e),method:"delete"})}},b8fa:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-container"},[r("el-form",{attrs:{inline:!0}},[r("el-form-item",{attrs:{label:"模型名称"}},[r("el-input",{attrs:{placeholder:"请输入模型名称",clearable:"",size:"small"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.KEYWORDS,callback:function(t){e.$set(e.queryParams,"KEYWORDS",t)},expression:"queryParams.KEYWORDS"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"分类"}},[r("el-select",{attrs:{placeholder:"模型分类",clearable:"",size:"small"},model:{value:e.queryParams.category,callback:function(t){e.$set(e.queryParams,"category",t)},expression:"queryParams.category"}},e._l(e.actModelCategory,(function(e){return r("el-option",{key:e.DICTIONARIES_ID,attrs:{label:e.NAME,value:e.BIANMA}})})),1)],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"mini"},on:{click:e.handleQuery}},[e._v("搜索")]),e._v(" "),r("el-button",{attrs:{type:"primary",icon:"el-icon-plus",size:"mini"},on:{click:e.handleAdd}},[e._v("新增")]),e._v(" "),r("el-button",{attrs:{type:"primary",icon:"el-icon-delete",size:"mini"},on:{click:e.handleDeleteAll}},[e._v("删除")])],1)],1),e._v(" "),r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{data:e.modelList,"row-key":"ID_","tree-props":{children:"children",hasChildren:"hasChildren"}},on:{"selection-change":e.handleSelectionChange}},[r("el-table-column",{attrs:{type:"selection",width:"50"}}),e._v(" "),r("el-table-column",{attrs:{label:"#",align:"center",type:"index",width:"50"}}),e._v(" "),r("el-table-column",{attrs:{prop:"NAME_",label:"模型名称"}}),e._v(" "),r("el-table-column",{attrs:{prop:"DNAME",label:"分类","show-overflow-tooltip":!0}}),e._v(" "),r("el-table-column",{attrs:{label:"创建时间",align:"center",prop:"CREATE_TIME_"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("span",[e._v(e._s(e.dateFormat(t.row.CREATE_TIME_)))])]}}])}),e._v(" "),r("el-table-column",{attrs:{label:"最后更新时间",align:"center",prop:"LAST_UPDATE_TIME_"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("span",[e._v(e._s(e.dateFormat(t.row.LAST_UPDATE_TIME_)))])]}}])}),e._v(" "),r("el-table-column",{attrs:{prop:"VERSION_",label:"版本",width:"60"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("span",[e._v("v."+e._s(t.row.VERSION_))])]}}])}),e._v(" "),r("el-table-column",{attrs:{label:"操作",align:"center","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"流程设计器",placement:"top"}},[r("el-button",{attrs:{size:"mini",type:"text",icon:"el-icon-edit"},on:{click:function(r){return e.handleDesigner(t.row)}}})],1),e._v(" "),r("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"部署",placement:"top"}},[r("el-button",{attrs:{size:"mini",type:"text",icon:"el-icon-document-checked"},on:{click:function(r){return e.handelArrange(t.row)}}})],1),e._v(" "),r("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"预览",placement:"top"}},[r("el-button",{attrs:{size:"mini",type:"text",icon:"el-icon-document"},on:{click:function(r){return e.handelPreview(t.row)}}})],1),e._v(" "),r("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"导出",placement:"top"}},[r("el-button",{attrs:{size:"mini",type:"text",icon:"el-icon-download"},on:{click:function(r){return e.handelExport(t.row)}}})],1),e._v(" "),r("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"删除",placement:"top"}},[r("el-button",{attrs:{size:"mini",type:"text",icon:"el-icon-delete"},on:{click:function(r){return e.handleDelete(t.row)}}})],1)]}}])})],1),e._v(" "),r("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.queryParams.currentPage,limit:e.queryParams.showCount},on:{"update:page":function(t){return e.$set(e.queryParams,"currentPage",t)},"update:limit":function(t){return e.$set(e.queryParams,"showCount",t)},pagination:e.getList}}),e._v(" "),r("el-dialog",{attrs:{title:e.title,visible:e.open,width:"500px"},on:{"update:visible":function(t){e.open=t}}},[r("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"80px"}},[r("el-form-item",{attrs:{label:"模型名称",prop:"modelname"}},[r("el-input",{attrs:{placeholder:"请输入模型名称"},model:{value:e.form.modelname,callback:function(t){e.$set(e.form,"modelname",t)},expression:"form.modelname"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"模型分类",prop:"category"}},[r("el-select",{attrs:{placeholder:"请选择模型分类"},model:{value:e.form.category,callback:function(t){e.$set(e.form,"category",t)},expression:"form.category"}},e._l(e.actModelCategory,(function(e){return r("el-option",{key:e.DICTIONARIES_ID,attrs:{label:e.NAME,value:e.BIANMA}})})),1)],1),e._v(" "),r("el-form-item",{attrs:{label:"模型描述",prop:"description"}},[r("el-input",{attrs:{placeholder:"请输入模型描述"},model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"流程名称",prop:"name"}},[r("el-input",{attrs:{placeholder:"请输入流程名称"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"流程标识",prop:"process_id"}},[r("el-select",{attrs:{placeholder:"请选择流程标识"},model:{value:e.form.process_id,callback:function(t){e.$set(e.form,"process_id",t)},expression:"form.process_id"}},e._l(e.actWorkflow,(function(e){return r("el-option",{key:e.DICTIONARIES_ID,attrs:{label:e.NAME,value:e.BIANMA}})})),1)],1),e._v(" "),r("el-form-item",{attrs:{label:"流程作者",prop:"process_author"}},[r("el-input",{attrs:{placeholder:"流程作者"},model:{value:e.form.process_author,callback:function(t){e.$set(e.form,"process_author",t)},expression:"form.process_author"}})],1)],1),e._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("确 定")]),e._v(" "),r("el-button",{on:{click:e.cancel}},[e._v("取 消")])],1)],1),e._v(" "),r("el-dialog",{attrs:{id:"desigerDialog",title:"流程设计器",visible:e.designerShow,fullscreen:""},on:{"update:visible":function(t){e.designerShow=t}}},[r("iframe",{attrs:{src:e.designerSrc,frameborder:"0",width:"100%",height:"100%"}})]),e._v(" "),r("el-dialog",{attrs:{id:"previewDialog",title:"预览",visible:e.previewShow,fullscreen:""},on:{"update:visible":function(t){e.previewShow=t}}},[r("editor",{attrs:{lang:"java",theme:"monokai",width:"100%",height:"100%"},on:{init:e.editorInit},model:{value:e.previewContext,callback:function(t){e.previewContext=t},expression:"previewContext"}})],1)],1)},a=[],o=(r("ac6a"),r("96cf"),r("3b8d")),i=r("b775"),c=r("365c");function s(e){return Object(i["a"])({url:"".concat(c["a"],"/fhmodel/list"),method:"get",params:e})}function l(e){return Object(i["a"])({url:"".concat(c["a"],"/fhmodel/delete?ID_=").concat(e),method:"delete"})}function u(e){return Object(i["a"])({url:"".concat(c["a"],"/fhmodel/isCanexportXml?modelId=").concat(e),method:"get"})}function m(e){return Object(i["a"])({url:"".concat(c["a"],"/fhmodel/getXmlView?modelId=").concat(e),method:"get"})}function d(e){return Object(i["a"])({url:"".concat(c["a"],"/fhmodel/deployment?modelId=").concat(e),method:"get"})}function p(e){return Object(i["a"])({url:"".concat(c["a"],"/fhmodel"),method:"post",data:e})}function h(e){return Object(i["a"])({url:"".concat(c["a"],"/fhmodel/deleteAll?DATA_IDS=").concat(e),method:"delete"})}function f(){var e="".concat(window.location.origin).concat("/cloud_pfmc/api");return new Promise((function(t){t(e)}))}function g(e){return Object(i["a"])({url:"".concat(c["a"],"/fhmodel/findDicListByPid?ID_=").concat(e),method:"get"})}r("a6dc");var v=r("7c9e"),b=r.n(v),_={components:{editor:b.a},data:function(){return{loading:!1,actModelCategory:[],actWorkflow:[],multipleSelection:[],title:"",open:!1,total:0,queryParams:{KEYWORDS:void 0,category:void 0,currentPage:1,showCount:10},menuOptions:[],modelList:[],form:{},rules:{modelname:[{required:!0,message:"模型名称不能为空",trigger:"blur"}],description:[{required:!0,message:"模型描述不能为空",trigger:"blur"}],name:[{required:!0,message:"流程名称不能为空",trigger:"blur"}],process_author:[{required:!0,message:"流程作者不能为空",trigger:"blur"}],category:[{required:!0,message:"模型分类不能为空",trigger:"blur"}],process_id:[{required:!0,message:"流程标识不能为空",trigger:"blur"}]},designerShow:!1,designerSrc:"",activitiUrl:"",previewShow:!1,previewContext:""}},created:function(){this.getActModelCategory(),this.getActWorkflow(),this.getList(),this.getActivitiUrl()},methods:{getActModelCategory:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g("act_model_category");case 3:t=e.sent,"success"===t.result?this.actModelCategory=t.varList:this.msgError("数据字典读取失败"),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),this.msgError(e.t0.message);case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));function t(){return e.apply(this,arguments)}return t}(),getActWorkflow:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g("workflow_act_002");case 3:t=e.sent,"success"===t.result?this.actWorkflow=t.varList:this.msgError("数据字典读取失败"),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),this.msgError(e.t0.message);case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));function t(){return e.apply(this,arguments)}return t}(),getList:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,this.loading=!0,e.next=4,s(this.addDateRange(this.queryParams,this.dateRange));case 4:t=e.sent,this.loading=!1,"success"===t.result&&(this.modelList=t.varList,this.total=t.page.totalResult),e.next=13;break;case 9:e.prev=9,e.t0=e["catch"](0),this.loading=!1,this.msgError(e.t0.message);case 13:case"end":return e.stop()}}),e,this,[[0,9]])})));function t(){return e.apply(this,arguments)}return t}(),cancel:function(){this.open=!1,this.reset()},reset:function(){this.form={modelname:"",category:"",description:"",name:"",process_id:"",process_author:""},this.resetForm("form")},handleDelete:function(e){var t=this;this.$confirm('是否确认删除名称为"'+e.NAME_+'"的数据项?',"警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){return l(e.ID_)})).then((function(){t.getList(),t.msgSuccess("删除成功")})).catch((function(){}))},isCanexportXml_exp:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u(t);case 3:r=e.sent,"success"===r.result?window.location.href="".concat(this.activitiUrl,"/march-activiti/fhmodel/exportXml?modelId=").concat(t):this.msgError("导出失败"),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),this.msgError(e.t0.message);case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));function t(t){return e.apply(this,arguments)}return t}(),handelExport:function(e){var t=this;this.$confirm('是否确认导出名称为"'+e.NAME_+'"的xml文件?',"警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.isCanexportXml_exp(e.ID_)}))},handleAdd:function(){this.reset(),this.open=!0,this.title="添加模型"},editorInit:function(){r("2099"),r("be9d"),r("3969"),r("0329"),r("14d4"),r("a849")},handelPreview:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u(t.ID_);case 3:if(r=e.sent,"success"!==r.result){e.next=11;break}return e.next=7,m(t.ID_);case 7:n=e.sent,"success"===n.result&&(this.previewShow=!0,this.previewContext=n.code,this.$nextTick((function(){var e=document.getElementById("previewDialog"),t=e.offsetHeight,r=e.getElementsByClassName("el-dialog__header")[0].offsetHeight,n=t-r;e.getElementsByClassName("el-dialog__body")[0].style.height=n+"px"}))),e.next=12;break;case 11:this.msgError("预览失败");case 12:e.next=17;break;case 14:e.prev=14,e.t0=e["catch"](0),this.msgError(e.t0.message);case 17:case"end":return e.stop()}}),e,this,[[0,14]])})));function t(t){return e.apply(this,arguments)}return t}(),handelArrange:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d(t.ID_);case 3:r=e.sent,"success"===r.result?this.msgSuccess("部署成功"):this.msgError("部署失败"),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),this.msgError(e.t0.message);case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));function t(t){return e.apply(this,arguments)}return t}(),handleQuery:function(){this.queryParams.pageNum=1,this.getList()},submitForm:function(){var e=this;try{this.$refs["form"].validate(function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(r){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!r){t.next=5;break}return t.next=3,p(e.form);case 3:n=t.sent,"success"===n.result?(e.msgSuccess("提交成功"),e.open=!1,e.getList()):e.msgError("提交失败");case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}catch(t){this.msgError(t.message)}},getActivitiUrl:function(){var e=this;f().then((function(t){e.activitiUrl=t}))},handleDesigner:function(e){this.designerShow=!0,this.designerSrc="".concat(this.activitiUrl,"/march-activiti/activiti-editor/modeler.html?modelId=").concat(e.ID_),this.$nextTick((function(){var e=document.getElementById("desigerDialog"),t=e.offsetHeight,r=e.getElementsByClassName("el-dialog__header")[0].offsetHeight,n=t-r;e.getElementsByClassName("el-dialog__body")[0].style.height=n+"px"}))},handleSelectionChange:function(e){this.multipleSelection=e},handleDeleteAll:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:0===this.multipleSelection.length&&(this.msgError("请选择一条数据"),retutn),r=this,this.$confirm("确定要删除选中的数据吗?","删除",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){r.batchDelCode()})).catch((function(e){this.msgError(e)}));case 3:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),batchDelCode:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t=[],this.multipleSelection.forEach((function(e){t.push(e.ID_)})),e.next=5,h(t);case 5:r=e.sent,"success"===r.result?(this.msgSuccess("删除成功"),this.getList()):this.msgError(r.msg),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),this.msgError(e.t0.message);case 12:case"end":return e.stop()}}),e,this,[[0,9]])})));function t(){return e.apply(this,arguments)}return t}()}},w=_,y=r("2877"),x=Object(y["a"])(w,n,a,!1,null,"7462e698",null);t["default"]=x.exports}}]);