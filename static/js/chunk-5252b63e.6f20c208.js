(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5252b63e","chunk-2d21062b","chunk-17bfbf0a","chunk-10db1c36","chunk-2d21062b"],{"0e5d":function(t,e,r){"use strict";var n=r("71c8"),c=r.n(n);c.a},2879:function(t,e,r){"use strict";r.r(e),r.d(e,"treeselect",(function(){return a})),r.d(e,"selectPfmcEmpList",(function(){return i})),r.d(e,"addPfmcOrg",(function(){return o})),r.d(e,"updatePfmcOrg",(function(){return d})),r.d(e,"delPfmcOrg",(function(){return s})),r.d(e,"searchEmp",(function(){return l})),r.d(e,"addEmpToOrg",(function(){return u})),r.d(e,"updatePfmcEmp",(function(){return f})),r.d(e,"delPfmcEmp",(function(){return m})),r.d(e,"batchTransferEmp",(function(){return p})),r.d(e,"listEmpNameOrNumber",(function(){return h})),r.d(e,"batchUpdateEmpStatus",(function(){return g})),r.d(e,"listEmp",(function(){return b})),r.d(e,"delOrgCheck",(function(){return I}));var n=r("b775"),c=r("b854");function a(){return Object(n["a"])({url:"".concat(c["pfmcAsist"],"/pfmcOrgEmp/treeselect"),method:"get"})}function i(t){return Object(n["a"])({url:"".concat(c["pfmcAsist"],"/pfmcOrgEmp/listEmpByOrgId"),method:"get",params:t})}function o(t){return Object(n["a"])({url:"".concat(c["pfmcAsist"],"/pfmcOrgEmp"),method:"post",data:t})}function d(t){return Object(n["a"])({url:"".concat(c["pfmcAsist"],"/pfmcOrgEmp"),method:"put",data:t})}function s(t){return Object(n["a"])({url:"".concat(c["pfmcAsist"],"/pfmcOrgEmp/deleteOrg/").concat(t),method:"delete"})}function l(t){return Object(n["a"])({url:"".concat(c["pfmcAsist"],"/pfmcOrgEmp/searchEmp"),method:"get",params:t})}function u(t){return Object(n["a"])({url:"".concat(c["pfmcAsist"],"/pfmcOrgEmp/updateEmpOfOrg"),method:"get",params:t})}function f(t){return Object(n["a"])({url:"".concat(c["pfmcAsist"],"/pfmcOrgEmp/updateEmp"),method:"post",data:t})}function m(t){return Object(n["a"])({url:"".concat(c["pfmcAsist"],"/pfmcOrgEmp/deleteEmp/").concat(t),method:"delete"})}function p(t){return Object(n["a"])({url:"".concat(c["pfmcAsist"],"/pfmcOrgEmp/batchTransferEmp"),method:"post",data:t})}function h(t){return Object(n["a"])({url:"".concat(c["pfmcAsist"],"/pfmcOrgEmp/listEmpNameOrNumber"),method:"get",params:t})}function g(t){return Object(n["a"])({url:"".concat(c["pfmcAsist"],"/pfmcOrgEmp/batchUpdateEmpStatus"),method:"post",data:t})}function b(t){return Object(n["a"])({url:"".concat(c["pfmcAsist"],"/pfmcOrgEmp/listEmp"),method:"post",data:t})}function I(t){return Object(n["a"])({url:"".concat(c["pfmcAsist"],"/pfmcOrgEmp/delOrgCheck/").concat(t),method:"delete"})}},"2d1b":function(t,e,r){"use strict";r.r(e),r.d(e,"indicatorTreeselect",(function(){return a})),r.d(e,"listIndicator",(function(){return i})),r.d(e,"categoryTreeselect",(function(){return o})),r.d(e,"addCategory",(function(){return d})),r.d(e,"updateCategory",(function(){return s})),r.d(e,"delCategoryCheck",(function(){return l})),r.d(e,"delCategory",(function(){return u})),r.d(e,"getIndicator",(function(){return f})),r.d(e,"addIndicator",(function(){return m})),r.d(e,"updateIndicator",(function(){return p})),r.d(e,"delIndicator",(function(){return h})),r.d(e,"batchDelIndicatorById",(function(){return g})),r.d(e,"fastLoadPreset",(function(){return b})),r.d(e,"custLoadPreset",(function(){return I}));var n=r("b775"),c=r("b854");function a(t){return Object(n["a"])({url:"".concat(c["pfmcSettings"],"/pfmcIndicatorLib/indicatorTreeselect"),method:"get",params:t})}function i(t){return Object(n["a"])({url:"".concat(c["pfmcSettings"],"/pfmcIndicatorLib/listIndicator"),method:"post",data:t})}function o(t){return Object(n["a"])({url:"".concat(c["pfmcSettings"],"/pfmcIndicatorLib/categoryTreeselect"),method:"get",params:t})}function d(t){return Object(n["a"])({url:"".concat(c["pfmcSettings"],"/pfmcIndicatorLib/addCategory"),method:"post",data:t})}function s(t){return Object(n["a"])({url:"".concat(c["pfmcSettings"],"/pfmcIndicatorLib/updateCategory"),method:"put",data:t})}function l(t){return Object(n["a"])({url:"".concat(c["pfmcSettings"],"/pfmcIndicatorLib/delCategoryCheck/").concat(t),method:"get"})}function u(t){return Object(n["a"])({url:"".concat(c["pfmcSettings"],"/pfmcIndicatorLib/delCategory/").concat(t),method:"delete"})}function f(t){return Object(n["a"])({url:"".concat(c["pfmcSettings"],"/pfmcIndicatorLib/getIndicator/").concat(t),method:"get"})}function m(t){return Object(n["a"])({url:"".concat(c["pfmcSettings"],"/pfmcIndicatorLib/addIndicator"),method:"post",data:t})}function p(t){return Object(n["a"])({url:"".concat(c["pfmcSettings"],"/pfmcIndicatorLib/updateIndicator"),method:"put",data:t})}function h(t){return Object(n["a"])({url:"".concat(c["pfmcSettings"],"/pfmcIndicatorLib/delIndicator/").concat(t),method:"delete"})}function g(t){return Object(n["a"])({url:"".concat(c["pfmcSettings"],"/pfmcIndicatorLib/batchDelIndicatorById"),method:"delete",data:t})}function b(){return Object(n["a"])({url:"".concat(c["pfmcSettings"],"/pfmcIndicatorLib/fastLoadPreset"),method:"get"})}function I(t){return Object(n["a"])({url:"".concat(c["pfmcSettings"],"/pfmcIndicatorLib/custLoadPreset"),method:"post",data:t})}},"542c":function(t,e,r){},"56a6":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"ihr-wrapper"},[r("div",{staticClass:"box--tree--contant"},[r("div",{staticClass:"tree-left"},[r("div",{staticClass:"tree-left-top-btn-bar"},[r("update-indicator-category",{attrs:{icon:"el-icon-plus",isAdd:""},on:{"update-finished":t.getIndicatorTreeselect}}),t._v(" "),r("update-indicator-category",{attrs:{"category-id":t.currNode?t.currNode.id:void 0,disabled:!t.currNode||!t.currNode.isCategory},on:{"update-finished":t.getIndicatorTreeselect}}),t._v(" "),r("el-button",{attrs:{type:"danger",plain:"",icon:"el-icon-delete",disabled:!t.currNode||!t.currNode.isCategory},on:{click:t.handleDelCategory}},[t._v("删除分类")])],1),t._v(" "),r("div",{staticClass:"tree-left-main"},[r("div",{staticStyle:{"margin-bottom":"10px"}},[r("el-radio-group",{model:{value:t.indicatorTypeRadio,callback:function(e){t.indicatorTypeRadio=e},expression:"indicatorTypeRadio"}},[r("el-radio",{attrs:{label:1}},[t._v("预设指标")]),t._v(" "),r("el-radio",{attrs:{label:0}},[t._v("自定义指标")])],1)],1),t._v(" "),r("el-input",{attrs:{placeholder:"搜索指标"},model:{value:t.indicatorFilterText,callback:function(e){t.indicatorFilterText=e},expression:"indicatorFilterText"}}),t._v(" "),r("el-tree",{ref:"tree",attrs:{data:t.indicatorTreeList,props:t.defaultProps,"node-key":"id","expand-on-click-node":!1,"highlight-current":!0,"filter-node-method":t.filterNode,"default-expand-all":""},on:{"node-click":t.handleNodeClick},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.node,c=e.data;return r("span",{},[c.isCategory?r("i",{staticClass:"el-icon-folder"}):t._e(),t._v(" "),r("span",[t._v(t._s(n.label))])])}}])})],1)]),t._v(" "),r("div",{staticClass:"contant-right"},[r("div",{staticClass:"top-query"},[r("el-form",{ref:"searchForm",attrs:{model:t.searchIndicatorParams,rules:t.rules,"label-width":"60px"}},[r("el-col",{attrs:{xs:24,sm:12,md:12,lg:12,xl:6}},[r("el-form-item",{attrs:{label:"名称:",prop:"indicatorName"}},[r("el-input",{attrs:{placeholder:"全部"},model:{value:t.searchIndicatorParams.indicatorName,callback:function(e){t.$set(t.searchIndicatorParams,"indicatorName",e)},expression:"searchIndicatorParams.indicatorName"}})],1)],1),t._v(" "),r("el-col",{attrs:{xs:24,sm:12,md:12,lg:12,xl:6}},[r("el-form-item",{attrs:{label:"分类:",prop:"categoryId"}},[r("tree-select",{attrs:{options:t.indicatorCategoryList,placeholder:"请选择...","default-expand-level":1},model:{value:t.searchIndicatorParams.categoryId,callback:function(e){t.$set(t.searchIndicatorParams,"categoryId",e)},expression:"searchIndicatorParams.categoryId"}})],1)],1),t._v(" "),r("el-col",{attrs:{xs:24,sm:24,md:12,lg:12,xl:6}},[r("el-form-item",{attrs:{label:"部门:",prop:"orgIdSet"}},[r("tree-select",{attrs:{options:t.deptOptions,multiple:"",placeholder:"全部","default-expand-level":1},model:{value:t.searchIndicatorParams.orgIdSet,callback:function(e){t.$set(t.searchIndicatorParams,"orgIdSet",e)},expression:"searchIndicatorParams.orgIdSet"}})],1)],1),t._v(" "),r("el-col",{attrs:{xs:24,sm:24,md:12,lg:12,xl:6}},[r("div",{staticStyle:{float:"right"}},[r("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.handleQuery}},[t._v("查询")]),t._v(" "),r("el-button",{attrs:{type:"primary",plain:"",icon:"el-icon-refresh-left"},on:{click:t.handleReset}},[t._v("重置")])],1)])],1)],1),t._v(" "),r("div",{staticClass:"main-table"},[r("div",{staticClass:"button-flex"},[r("load-preset-indicator",{on:{"load-finished":t.getIndicatorTreeselect}}),t._v(" "),r("update-indicator",{attrs:{"operater-mode":"add",btnText:"新增",title:"新增指标"},on:{"update-finished":t.getIndicatorTreeselect}}),t._v(" "),r("update-indicator",{attrs:{"operater-mode":"copy",btnText:"复制",title:"复制指标",disabled:1!==t.selectedIndicators.length,"indicator-id":t.selectedIndicators[0]?t.selectedIndicators[0].indicatorId:void 0},on:{"update-finished":t.refreshIndicatorList}}),t._v(" "),r("import-data",{attrs:{"task-id":"pfmc_basicsettings_indicator"},on:{"import-finished":t.importFinished}}),t._v(" "),r("export-data",{attrs:{"task-id":"pfmc_basicsettings_indicator",params:t.getExportParams,disabled:0===t.indicatorList.length}}),t._v(" "),r("el-button",{attrs:{type:"danger",plain:"",icon:"el-icon-remove",disabled:0===t.selectedIndicators.length},on:{click:t.handleBatchDel}},[t._v("删除")])],1),t._v(" "),r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"table",attrs:{data:t.indicatorList,"row-key":"indicatorId"},on:{"selection-change":t.selectChange}},[r("el-table-column",{attrs:{type:"selection"}}),t._v(" "),r("el-table-column",{attrs:{label:"序号",type:"index"}}),t._v(" "),r("el-table-column",{attrs:{label:"指标名称",prop:"indicatorName","show-overflow-tooltip":""}}),t._v(" "),r("el-table-column",{attrs:{label:"分类",prop:"categoryName","show-overflow-tooltip":""}}),t._v(" "),r("el-table-column",{attrs:{label:"部门",prop:"orgName","min-width":"100","show-overflow-tooltip":""}}),t._v(" "),r("el-table-column",{attrs:{label:"指标类型",formatter:t.indicatorTypeFormat,"show-overflow-tooltip":""}}),t._v(" "),r("el-table-column",{attrs:{label:"ID",prop:"indicatorId","show-overflow-tooltip":""}}),t._v(" "),r("el-table-column",{attrs:{label:"操作",fixed:"right",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("update-indicator",{attrs:{type:"text",icon:"",plain:!1,"indicator-id":e.row.indicatorId},on:{"update-finished":t.refreshIndicatorList}}),t._v(" "),r("el-popconfirm",{staticClass:"el-button-confirm",attrs:{title:"您确定要删除吗？"},on:{onConfirm:function(r){return t.handleDel(e.row)}}},[r("el-button",{attrs:{slot:"reference",type:"text"},slot:"reference"},[t._v("删除")])],1)]}}])})],1)],1)])])])},c=[],a=(r("96cf"),r("3b8d")),i=r("bd86"),o=r("2879"),d=r("2d1b"),s=(r("542c"),{components:{TreeSelect:function(){return r.e("chunk-5c5c1f08").then(r.t.bind(null,"7026",7))},ExportData:function(){return r.e("chunk-336f6cc4").then(r.bind(null,"2ee5"))},ImportData:function(){return r.e("chunk-a7c7fc38").then(r.bind(null,"77dc"))},UpdateIndicatorCategory:function(){return r.e("chunk-b44291b0").then(r.bind(null,"deca"))},LoadPresetIndicator:function(){return r.e("chunk-2d0e8def").then(r.bind(null,"8ab2"))},UpdateIndicator:function(){return r.e("chunk-2d21785c").then(r.bind(null,"c6a4"))}},data:function(){var t;return t={loading:!1,total:0,deptOptions:void 0,indicatorTreeList:[],defaultProps:{children:"children",label:"label"},form:{},rules:{},currPagePreSelected:[],indicatorCategoryList:[],indicatorFilterText:void 0,indicatorTypeRadio:0,indicatorList:[],searchIndicatorParams:{indicatorName:void 0,categoryId:void 0,orgIdSet:void 0}},Object(i["a"])(t,"rules",{categoryId:[{required:!0,message:"分类不能为空",trigger:"change"}]}),Object(i["a"])(t,"currNode",void 0),Object(i["a"])(t,"selectedIndicators",[]),Object(i["a"])(t,"searchMode",void 0),Object(i["a"])(t,"exportParams",void 0),t},created:function(){this.getTreeselect(),this.getIndicatorTreeselect(),this.getIndicatorCategoryList()},computed:{getExportParams:function(){var t=this.indicatorList.map((function(t){return t.indicatorId}));return{indicatorIds:t}}},methods:{getUserRole:function(){},selectChange:function(t){this.selectedIndicators=t},handleQuery:function(){var t=this;this.$refs.searchForm.validate((function(e){e&&(t.searchMode="btn",t.getIndicatorList(t.searchIndicatorParams))}))},handleReset:function(){this.searchIndicatorParams={indicatorName:void 0,categoryId:void 0,orgIdSet:void 0}},handleBatchDel:function(){var t=this;this.$confirm("确认删除？").then((function(e){t.loading=!0;var r=t.selectedIndicators.map((function(t){return t.indicatorId})).join(),n={indicatorIds:r};Object(d["batchDelIndicatorById"])(n).then((function(e){t.loading=!1,"0"===e.code?(t.msgSuccess("删除成功"),t.getIndicatorTreeselect(),t.refreshIndicatorList()):t.msgError(e.msg)})).catch((function(e){t.loading=!1,t.msgError(e)}))})).catch((function(){}))},handleDel:function(t){var e=this;Object(d["delIndicator"])(t.indicatorId).then((function(t){e.loading=!1,"0"===t.code?(e.msgSuccess("删除成功"),e.refreshIndicatorList()):e.msgError(t.msg)})).catch((function(t){e.loading=!1,e.msgError(t)}))},importFinished:function(t){t?(this.getIndicatorTreeselect(),this.refreshIndicatorList()):this.msgError("导入失败")},handleDelCategory:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){var e,r=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!this.currNode||!this.currNode.id){t.next=10;break}return t.next=3,Object(d["delCategoryCheck"])(this.currNode.id);case 3:if(e=t.sent,"0"===e.code){t.next=7;break}return this.msgError(e.msg),t.abrupt("return");case 7:this.$confirm('您确定要删除指标分类名称为"'+this.currNode.label+'"数据吗，删除后不可恢复',"警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){return Object(d["delCategory"])(r.currNode.id)})).then((function(t){"0"===t.code?(r.getIndicatorTreeselect(),r.msgSuccess("删除成功")):r.msgError(t.msg)})).catch((function(){})),t.next=11;break;case 10:this.msgError("请选择要删除的指标分类");case 11:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),getIndicatorTreeselect:function(){var t=this,e={isPreset:this.indicatorTypeRadio,dataMode:"tree"};Object(d["indicatorTreeselect"])(e).then((function(e){"0"===e.code?t.indicatorTreeList=e.data:t.msgError(e.msg)}))},getIndicatorList:function(t){var e=this,r=Object.assign(t,{dataMode:"list"});this.loading=!0,Object(d["listIndicator"])(r).then((function(t){e.loading=!1,"0"===t.code?e.indicatorList=t.data:e.msgError(t.msg)}))},getIndicatorInfo:function(t){var e=this;this.loading=!0,Object(d["getIndicator"])(t).then((function(t){e.loading=!1,"0"===t.code?e.indicatorList=[t.data]:e.msgError(t.msg)}))},getIndicatorCategoryList:function(){var t=this,e={dataMode:"tree"};Object(d["categoryTreeselect"])(e).then((function(e){"0"===e.code?t.indicatorCategoryList=e.data:t.msgError(e.msg)}))},filterNode:function(t,e){return!t||-1!==e.label.indexOf(t)},handleNodeClick:function(t){this.currNode=t,this.nodeClickSearch()},nodeClickSearch:function(){if(this.currNode)if(this.searchMode="node",this.currNode.isCategory){var t={categoryId:this.currNode.id};this.getIndicatorList(t)}else this.getIndicatorInfo(this.currNode.id)},refreshIndicatorList:function(){this.getIndicatorTreeselect(),"node"===this.searchMode?this.nodeClickSearch():"btn"===this.searchMode&&this.handleQuery()},indicatorTypeFormat:function(t,e){return t.isPreset?"预设指标":"自定义指标"},handleExport:function(){},getTreeselect:function(){var t=this;Object(o["treeselect"])().then((function(e){t.deptOptions=e.data}))}},watch:{indicatorFilterText:function(t){this.$refs.tree.filter(t)},indicatorTypeRadio:function(t){this.getIndicatorTreeselect()}}}),l=s,u=(r("0e5d"),r("2877")),f=Object(u["a"])(l,n,c,!1,null,"6ebd8357",null);e["default"]=f.exports},"71c8":function(t,e,r){},b854:function(t,e,r){"use strict";r.r(e),r.d(e,"pfmcSettings",(function(){return n})),r.d(e,"pfmcAsist",(function(){return c})),r.d(e,"pfmcExecution",(function(){return a})),r.d(e,"pfmcEval",(function(){return i}));var n="pfmc-settings",c="pfmc-asist",a="pfmc-execution",i="pfmc-eval"}}]);