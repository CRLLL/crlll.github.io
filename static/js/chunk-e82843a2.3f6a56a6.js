(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e82843a2","chunk-a48fbeb6","chunk-e47dafd6"],{"019b":function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var r=a("b775"),i=a("365c");function n(e,t){return Object(r["a"])({url:"".concat(i["a"],"/rutask/getNextNode?task_id=").concat(e),method:"post",data:t||{}})}},"3ad5":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("el-dialog",{attrs:{title:"选择审批人",visible:e.open,width:"920px",top:"20px"},on:{"update:visible":function(t){e.open=t}}},[a("el-form",{attrs:{inline:!0,"label-width":"68px"}},[a("el-form-item",{attrs:{label:"用户名"}},[a("el-input",{attrs:{placeholder:"请输入用户名",clearable:"",size:"small"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.userName,callback:function(t){e.$set(e.queryParams,"userName",t)},expression:"queryParams.userName"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"mini"},on:{click:e.handleQuery}},[e._v("搜索")])],1)],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{data:e.personList,width:"100%"}},[a("el-table-column",{attrs:{label:"#",align:"center",type:"index"}}),e._v(" "),a("el-table-column",{attrs:{label:"用户名",align:"center",prop:"userName"}}),e._v(" "),a("el-table-column",{attrs:{label:"角色",align:"center",prop:"roles.0.roleName"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini"},on:{click:function(a){return e.selectRow(t.row,t)}}},[e._v("选择")])]}}])})],1),e._v(" "),a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.queryParams.pageNum,limit:e.queryParams.pageSize},on:{"update:page":function(t){return e.$set(e.queryParams,"pageNum",t)},"update:limit":function(t){return e.$set(e.queryParams,"pageSize",t)},pagination:e.getList}})],1)],1)},i=[],n=(a("96cf"),a("3b8d")),l=a("745c"),s={data:function(){return{open:!1,total:0,personList:[],query:{pageNum:1,pageSize:10},queryParams:{userName:void 0,pageNum:1,pageSize:10},userNameInfo:"",userIdInfo:""}},created:function(){this.getList()},methods:{getList:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,this.loading=!0,e.next=4,Object(l["c"])(this.queryParams);case 4:t=e.sent,this.loading=!1,"0"===t.code&&(this.personList=t.data.list,this.total=t.data.total),e.next=13;break;case 9:e.prev=9,e.t0=e["catch"](0),this.loading=!1,this.msgError(e.t0.message);case 13:case"end":return e.stop()}}),e,this,[[0,9]])})));function t(){return e.apply(this,arguments)}return t}(),handleQuery:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.queryParams.pageNum=1,this.getList();case 2:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),selectRow:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.open=!1,this.$emit("handleApprover",t);case 2:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),cancel:function(){this.open=!1}}},o=s,u=a("2877"),c=Object(u["a"])(o,r,i,!1,null,null,null);t["default"]=c.exports},4011:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("el-dialog",{attrs:{title:e.title,visible:e.open,width:"500px"},on:{"update:visible":function(t){e.open=t}}},[a("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"100px"}},["applicantSubmit"!==e.submitType?a("el-form-item",{attrs:{label:"下一处理节点"}},[a("div",[e._v(e._s(e.nextNodeName))])]):e._e(),e._v(" "),"end"!==e.nextNodeCode?a("el-form-item",{attrs:{label:"审批人",prop:"ASSIGNEE_"}},[a("el-input",{staticStyle:{width:"78%",display:"inline-block"},attrs:{placeholder:"请输入审批人",clearable:""},model:{value:e.form.ASSIGNEE_,callback:function(t){e.$set(e.form,"ASSIGNEE_",t)},expression:"form.ASSIGNEE_"}}),e._v(" "),a("el-button",{attrs:{round:""},on:{click:e.addPerson}},[e._v("选择")])],1):e._e(),e._v(" "),a("el-form-item",{attrs:{label:"审批意见",prop:"option"}},[a("el-input",{attrs:{type:"textarea",placeholder:"请输入审批意见"},model:{value:e.form.option,callback:function(t){e.$set(e.form,"option",t)},expression:"form.option"}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("确 定")]),e._v(" "),a("el-button",{on:{click:e.cancel}},[e._v("取 消")])],1)],1),e._v(" "),a("select-approver",{ref:"field",on:{handleApprover:e.handleApprover}})],1)},i=[],n=(a("7f7f"),a("96cf"),a("3b8d")),l=a("3ad5"),s=(a("745c"),a("b775")),o=a("365c"),u=a("019b"),c={props:{formData:Object,submitType:String,processKey:String,startUrl:String,approveUrl:{type:String,default:"".concat(o["a"],"/rutask/handle")}},components:{selectApprover:l["default"]},data:function(){return{open:!1,title:"提交审批",approver:"",form:{ASSIGNEE_:"",option:""},nextNodeCode:"",nextNodeName:"",rules:{ASSIGNEE_:[{required:!0,message:"审批人不能为空",trigger:"blur"}],option:[{required:!0,message:"审批意见不能为空",trigger:"blur"}]}}},created:function(){},watch:{formData:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("applicantSubmit"===this.submitType){e.next=5;break}return e.next=3,this.getNextNode();case 3:t=e.sent,"0"===t.code&&t.data&&(this.nextNodeCode=t.data.code,this.nextNodeName=t.data.name);case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},methods:{addPerson:function(){this.$refs.field.open=!0},handleApprover:function(e){this.form.ASSIGNEE_=e.userName},submitApplicant:function(){return Object(s["a"])({url:this.startUrl,method:"post",data:{businessId:this.formData.id,ASSIGNEE_:this.form.ASSIGNEE_,OPINION:this.form.option,processKey:this.processKey}})},submitApprover:function(e){return Object(s["a"])({url:this.approveUrl,method:"post",data:{PROC_INST_ID_:this.formData.PROC_INST_ID_,ID_:this.formData.ID_,TASK_DEF_KEY_:this.formData.TASK_DEF_KEY_,EXECUTION_ID_:this.formData.EXECUTION_ID_,msg:e,ASSIGNEE_:this.form.ASSIGNEE_,OPINION:this.form.option,businessId:this.formData.BUSINESS_ID,processKey:this.formData.BUSINESS_KEY}})},getNextNode:function(){Object(u["a"])(this.formData.PROC_INST_ID_)},submitForm:function(){var e=this;this.$refs["form"].validate(function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(a){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!a){t.next=25;break}if(r={},"applicantSubmit"!==e.submitType){t.next=8;break}return t.next=5,e.submitApplicant();case 5:r=t.sent,t.next=24;break;case 8:if("approverSubmit"!==e.submitType){t.next=14;break}return t.next=11,e.submitApprover("yes");case 11:r=t.sent,t.next=24;break;case 14:if("returnDraft"!==e.submitType){t.next=20;break}return t.next=17,e.submitApprover("no");case 17:r=t.sent,t.next=24;break;case 20:if("returnPreviou"!==e.submitType){t.next=24;break}return t.next=23,e.submitApprover("no");case 23:r=t.sent;case 24:"0"===r.code&&r.data?(e.msgSuccess(r.data.result),e.open=!1,e.reset(),e.$emit("handleClose")):e.msgError(r.msg);case 25:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},reset:function(){this.form={ASSIGNEE_:void 0,option:void 0},this.resetForm("form")},cancel:function(){this.open=!1,this.reset()}}},m=c,p=a("2877"),d=Object(p["a"])(m,r,i,!1,null,null,null);t["default"]=d.exports},"55da":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("el-form",{attrs:{inline:!0,"label-width":"120px"}},[a("el-form-item",{attrs:{label:"出差申请单号"}},[a("el-input",{attrs:{placeholder:"请输入出差申请单号",clearable:"",size:"small"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.travel_code,callback:function(t){e.$set(e.queryParams,"travel_code",t)},expression:"queryParams.travel_code"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"出差申请单名称"}},[a("el-input",{attrs:{placeholder:"请输入出差申请单名称",clearable:"",size:"small"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.travel_name,callback:function(t){e.$set(e.queryParams,"travel_name",t)},expression:"queryParams.travel_name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"出差目的地"}},[a("el-input",{attrs:{placeholder:"请输入出差目的地",clearable:"",size:"small"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.travel_place,callback:function(t){e.$set(e.queryParams,"travel_place",t)},expression:"queryParams.travel_place"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"出差理由"}},[a("el-input",{attrs:{placeholder:"请输入出差理由",clearable:"",size:"small"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.travel_remark,callback:function(t){e.$set(e.queryParams,"travel_remark",t)},expression:"queryParams.travel_remark"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"出差开始时间"}},[a("el-input",{attrs:{placeholder:"请输入出差开始时间",clearable:"",size:"small"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.begin_time,callback:function(t){e.$set(e.queryParams,"begin_time",t)},expression:"queryParams.begin_time"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"出差结束时间"}},[a("el-input",{attrs:{placeholder:"请输入出差结束时间",clearable:"",size:"small"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.end_time,callback:function(t){e.$set(e.queryParams,"end_time",t)},expression:"queryParams.end_time"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"申请人"}},[a("el-input",{attrs:{placeholder:"请输入申请人",clearable:"",size:"small"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.travel_apply,callback:function(t){e.$set(e.queryParams,"travel_apply",t)},expression:"queryParams.travel_apply"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"出差申请金额"}},[a("el-input",{attrs:{placeholder:"请输入出差申请金额",clearable:"",size:"small"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.travel_amount,callback:function(t){e.$set(e.queryParams,"travel_amount",t)},expression:"queryParams.travel_amount"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"mini"},on:{click:e.handleQuery}},[e._v("搜索")]),e._v(" "),a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["travel:add"],expression:"['travel:add']"}],attrs:{type:"primary",icon:"el-icon-plus",size:"mini"},on:{click:e.handleAdd}},[e._v("新增")])],1)],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{data:e.dataList}},[a("el-table-column",{attrs:{label:"#",align:"center",type:"index"}}),e._v(" "),a("el-table-column",{attrs:{label:"出差申请单号",align:"center",prop:"travel_code","show-overflow-tooltip":!0}}),e._v(" "),a("el-table-column",{attrs:{label:"出差申请单名称",align:"center",prop:"travel_name","show-overflow-tooltip":!0}}),e._v(" "),a("el-table-column",{attrs:{label:"出差目的地",align:"center",prop:"travel_place","show-overflow-tooltip":!0}}),e._v(" "),a("el-table-column",{attrs:{label:"出差理由",align:"center",prop:"travel_remark","show-overflow-tooltip":!0}}),e._v(" "),a("el-table-column",{attrs:{label:"出差开始时间",align:"center",prop:"begin_time","show-overflow-tooltip":!0}}),e._v(" "),a("el-table-column",{attrs:{label:"出差结束时间",align:"center",prop:"end_time","show-overflow-tooltip":!0}}),e._v(" "),a("el-table-column",{attrs:{label:"申请人",align:"center",prop:"travel_apply","show-overflow-tooltip":!0}}),e._v(" "),a("el-table-column",{attrs:{label:"出差申请金额",align:"center",prop:"travel_amount","show-overflow-tooltip":!0}}),e._v(" "),a("el-table-column",{attrs:{label:"出差申请天数",align:"center",prop:"days","show-overflow-tooltip":!0}}),e._v(" "),a("el-table-column",{attrs:{label:"状态",align:"center",prop:"status","show-overflow-tooltip":!0}}),e._v(" "),a("el-table-column",{attrs:{label:"操作",align:"center","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"查看",placement:"top"}},[a("el-button",{attrs:{size:"mini",type:"text",icon:"el-icon-view"},on:{click:function(a){return e.handleView(t.row)}}})],1),e._v(" "),a("el-tooltip",{directives:[{name:"show",rawName:"v-show",value:"草稿"===t.row.status,expression:"scope.row.status === '草稿'"}],staticClass:"item",attrs:{effect:"dark",content:"修改",placement:"top"}},[a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["travel:edit"],expression:"['travel:edit']"}],attrs:{size:"mini",type:"text",icon:"el-icon-edit"},on:{click:function(a){return e.handleUpdate(t.row)}}})],1),e._v(" "),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"删除",placement:"top"}},[a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["travel:remove"],expression:"['travel:remove']"}],attrs:{size:"mini",type:"text",icon:"el-icon-delete"},on:{click:function(a){return e.handleDelete(t.row)}}})],1)]}}])})],1),e._v(" "),a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.queryParams.pageNum,limit:e.queryParams.pageSize},on:{"update:page":function(t){return e.$set(e.queryParams,"pageNum",t)},"update:limit":function(t){return e.$set(e.queryParams,"pageSize",t)},pagination:e.getList}}),e._v(" "),a("el-dialog",{attrs:{title:e.title,visible:e.open,width:"800px"},on:{"update:visible":function(t){e.open=t}}},[a("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"200px"}},[a("el-form-item",{attrs:{label:"出差申请单号",prop:"travel_code"}},[a("el-input",{directives:[{name:"show",rawName:"v-show",value:!e.isView,expression:"!isView"}],attrs:{placeholder:"请输入出差申请单号"},model:{value:e.form.travel_code,callback:function(t){e.$set(e.form,"travel_code",t)},expression:"form.travel_code"}}),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.isView,expression:"isView"}],staticClass:"el-input el-input__inner"},[e._v(e._s(e.form.travel_code))])],1),e._v(" "),a("el-form-item",{attrs:{label:"出差申请单名称",prop:"travel_name"}},[a("el-input",{directives:[{name:"show",rawName:"v-show",value:!e.isView,expression:"!isView"}],attrs:{placeholder:"请输入出差申请单名称"},model:{value:e.form.travel_name,callback:function(t){e.$set(e.form,"travel_name",t)},expression:"form.travel_name"}}),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.isView,expression:"isView"}],staticClass:"el-input el-input__inner"},[e._v(e._s(e.form.travel_name))])],1),e._v(" "),a("el-form-item",{attrs:{label:"出差目的地",prop:"travel_place"}},[a("el-input",{directives:[{name:"show",rawName:"v-show",value:!e.isView,expression:"!isView"}],attrs:{placeholder:"请输入出差目的地"},model:{value:e.form.travel_place,callback:function(t){e.$set(e.form,"travel_place",t)},expression:"form.travel_place"}}),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.isView,expression:"isView"}],staticClass:"el-input el-input__inner"},[e._v(e._s(e.form.travel_place))])],1),e._v(" "),a("el-form-item",{attrs:{label:"出差理由",prop:"travel_remark"}},[a("el-input",{directives:[{name:"show",rawName:"v-show",value:!e.isView,expression:"!isView"}],attrs:{placeholder:"请输入出差理由"},model:{value:e.form.travel_remark,callback:function(t){e.$set(e.form,"travel_remark",t)},expression:"form.travel_remark"}}),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.isView,expression:"isView"}],staticClass:"el-input el-input__inner"},[e._v(e._s(e.form.travel_remark))])],1),e._v(" "),a("el-form-item",{attrs:{label:"出差开始时间",prop:"begin_time"}},[a("el-input",{directives:[{name:"show",rawName:"v-show",value:!e.isView,expression:"!isView"}],attrs:{placeholder:"请输入出差开始时间"},model:{value:e.form.begin_time,callback:function(t){e.$set(e.form,"begin_time",t)},expression:"form.begin_time"}}),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.isView,expression:"isView"}],staticClass:"el-input el-input__inner"},[e._v(e._s(e.form.begin_time))])],1),e._v(" "),a("el-form-item",{attrs:{label:"出差结束时间",prop:"end_time"}},[a("el-input",{directives:[{name:"show",rawName:"v-show",value:!e.isView,expression:"!isView"}],attrs:{placeholder:"请输入出差结束时间"},model:{value:e.form.end_time,callback:function(t){e.$set(e.form,"end_time",t)},expression:"form.end_time"}}),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.isView,expression:"isView"}],staticClass:"el-input el-input__inner"},[e._v(e._s(e.form.end_time))])],1),e._v(" "),a("el-form-item",{attrs:{label:"申请人",prop:"travel_apply"}},[a("el-input",{directives:[{name:"show",rawName:"v-show",value:!e.isView,expression:"!isView"}],attrs:{placeholder:"请输入申请人"},model:{value:e.form.travel_apply,callback:function(t){e.$set(e.form,"travel_apply",t)},expression:"form.travel_apply"}}),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.isView,expression:"isView"}],staticClass:"el-input el-input__inner"},[e._v(e._s(e.form.travel_apply))])],1),e._v(" "),a("el-form-item",{attrs:{label:"出差申请金额",prop:"travel_amount"}},[a("el-input",{directives:[{name:"show",rawName:"v-show",value:!e.isView,expression:"!isView"}],attrs:{placeholder:"请输入出差申请金额"},model:{value:e.form.travel_amount,callback:function(t){e.$set(e.form,"travel_amount",t)},expression:"form.travel_amount"}}),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.isView,expression:"isView"}],staticClass:"el-input el-input__inner"},[e._v(e._s(e.form.travel_amount))])],1),e._v(" "),a("el-form-item",{attrs:{label:"出差申请天数",prop:"days"}},[a("el-input",{directives:[{name:"show",rawName:"v-show",value:!e.isView,expression:"!isView"}],attrs:{placeholder:"请输入出差申请天数"},model:{value:e.form.days,callback:function(t){e.$set(e.form,"days",t)},expression:"form.days"}}),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.isView,expression:"isView"}],staticClass:"el-input el-input__inner"},[e._v(e._s(e.form.days))])],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{directives:[{name:"show",rawName:"v-show",value:!e.isView,expression:"!isView"}],attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("提 交")]),e._v(" "),a("el-button",{directives:[{name:"show",rawName:"v-show",value:!e.isView,expression:"!isView"}],attrs:{type:"primary"},on:{click:e.saveForm}},[e._v("保 存")]),e._v(" "),a("el-button",{on:{click:e.cancel}},[e._v("取 消")])],1)],1),e._v(" "),a("submit-dialog",{ref:"field",attrs:{"form-data":e.form,"submit-type":"applicantSubmit","start-url":e.marchDemo+"/travel/startFlow","process-key":"KEY_travel"},on:{handleClose:e.handleClose}})],1)},i=[],n=a("b775"),l=a("365c"),s=a("4011"),o={components:{submitDialog:s["default"]},data:function(){return{isView:!0,loading:!0,total:0,dataList:[],title:"",open:!1,typeOptions:[],dateRange:[],queryParams:{pageNum:1,pageSize:10},form:{},rules:{travel_code:[{required:!0,message:"出差申请单号不能为空",trigger:"blur"}],travel_name:[{required:!0,message:"出差申请单名称不能为空",trigger:"blur"}],travel_place:[{required:!0,message:"出差目的地不能为空",trigger:"blur"}],travel_remark:[{required:!0,message:"出差理由不能为空",trigger:"blur"}],begin_time:[{required:!0,message:"出差开始时间不能为空",trigger:"blur"}],end_time:[{required:!0,message:"出差结束时间不能为空",trigger:"blur"}],travel_apply:[{required:!0,message:"申请人不能为空",trigger:"blur"}],travel_amount:[{required:!0,message:"出差申请金额不能为空",trigger:"blur"}],days:[{required:!0,message:"出差申请天数不能为空",trigger:"blur"}]}}},created:function(){this.getList()},methods:{getList:function(){var e=this;this.loading=!0,this.listData(this.addDateRange(this.queryParams,this.dateRange)).then((function(t){e.dataList=t.data.list,e.total=t.data.total,e.loading=!1}))},cancel:function(){this.open=!1,this.reset()},handleClose:function(){this.open=!1,this.reset(),this.getList()},reset:function(){this.form={travel_code:void 0,travel_name:void 0,travel_place:void 0,travel_remark:void 0,begin_time:void 0,end_time:void 0,travel_apply:void 0,travel_amount:void 0,days:void 0},this.resetForm("form")},handleQuery:function(){this.queryParams.pageNum=1,this.getList()},handleAdd:function(){this.isView=!1,this.reset(),this.open=!0,this.title="添加出差审批申请"},handleView:function(e){this.handleUpdate(e,!0)},handleUpdate:function(e){var t=this,a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];this.isView=a,this.reset(),this.getData(e.id).then((function(e){t.form=e.data,t.open=!0,t.title="修改出差审批申请"}))},saveForm:function(){var e=this;this.$refs["form"].validate((function(t){t&&(void 0!=e.form.id?e.updateData(e.form).then((function(t){"0"===t.code?(e.msgSuccess("修改成功"),e.open=!1,e.getList()):e.msgError(t.msg)})):e.addData(e.form).then((function(t){"0"===t.code?(e.msgSuccess("新增成功"),e.open=!1,e.getList()):e.msgError(t.msg)})))}))},submitForm:function(){void 0===this.form.id?this.msgError("请先保存数据"):this.$refs.field.open=!0},handleDelete:function(e){var t=this;this.$confirm("是否确认删除该数据项?","警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.delData(e.id).then((function(){t.getList(),t.msgSuccess("删除成功")}))})).catch((function(){}))},listData:function(e){return Object(n["a"])({url:"".concat(l["b"],"/travel/condition/page"),method:"get",params:e})},getData:function(e){return Object(n["a"])({url:"".concat(l["b"],"/travel/").concat(e),method:"get"})},addData:function(e){return Object(n["a"])({url:"".concat(l["b"],"/travel"),method:"post",data:e})},updateData:function(e){return Object(n["a"])({url:"".concat(l["b"],"/travel"),method:"put",data:e})},delData:function(e){return Object(n["a"])({url:"".concat(l["b"],"/travel/").concat(e),method:"delete"})}}},u=o,c=a("2877"),m=Object(c["a"])(u,r,i,!1,null,null,null);t["default"]=m.exports},"745c":function(e,t,a){"use strict";a.d(t,"e",(function(){return n})),a.d(t,"c",(function(){return l})),a.d(t,"d",(function(){return s})),a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return u}));var r=a("b775"),i=a("365c");function n(e){return Object(r["a"])({url:"".concat(i["a"],"/rutask/list"),method:"get",params:e})}function l(e){return Object(r["a"])({url:"".concat(i["d"],"/user/list"),method:"get",params:e})}function s(e){return Object(r["a"])({url:"".concat(i["d"],"/role/list"),method:"get",params:e})}function o(e,t){return Object(r["a"])({url:"".concat(i["a"],"/ruprocdef/delegate?ID_=").concat(e,"&ASSIGNEE_=").concat(t),method:"get"})}function u(e,t,a){return Object(r["a"])({url:"".concat(i["a"],"/rutask/getHandleData?PROC_INST_ID_=").concat(e,"&ID_=").concat(t,"&FILENAME=").concat(a),method:"get"})}}}]);