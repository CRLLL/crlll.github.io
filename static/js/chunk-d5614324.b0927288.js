(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d5614324"],{"304f6":function(e,r,i){"use strict";var t=i("4f0b"),n=i.n(t);n.a},4569:function(e,r,i){"use strict";i.r(r);var t=function(){var e=this,r=e.$createElement,i=e._self._c||r;return i("div",{staticClass:"button-container"},[i("el-button",{attrs:{size:e.size,type:e.type,plain:e.plain,round:e.round,circle:e.circle,disabled:e.disabled,icon:e.icon},on:{click:function(r){e.showDialog=!0}}},[e._v(e._s(e.btnText))]),e._v(" "),i("el-dialog",{ref:"dialog",attrs:{visible:e.showDialog,title:e.title,"close-on-click-modal":!1,"append-to-body":"",width:"700px"},on:{"update:visible":function(r){e.showDialog=r},open:e.open,close:e.handleCancel}},[i("el-form",{ref:"remindForm",attrs:{model:e.remindForm,rules:e.rules}},[i("el-row",[i("el-form-item",e._l(e.remindForm.empList,(function(r){return i("el-tag",{key:r.procInstId,staticStyle:{"margin-right":"10px"},attrs:{closable:""},on:{close:function(i){return e.handleRemoveEmp(r)}}},[e._v(e._s(r.empName+r.cycleName))])})),1)],1),e._v(" "),i("el-row",[i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:"催办开始时间",prop:"startDate"}},[i("el-date-picker",{model:{value:e.remindForm.startDate,callback:function(r){e.$set(e.remindForm,"startDate",r)},expression:"remindForm.startDate"}})],1)],1),e._v(" "),i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:"催办结束时间",prop:"endDate"}},[i("el-date-picker",{model:{value:e.remindForm.endDate,callback:function(r){e.$set(e.remindForm,"endDate",r)},expression:"remindForm.endDate"}})],1)],1)],1),e._v(" "),i("el-row",[i("el-form-item",{attrs:{label:"催办方式",prop:"remindType"}},[i("el-radio-group",{model:{value:e.remindForm.remindType,callback:function(r){e.$set(e.remindForm,"remindType",r)},expression:"remindForm.remindType"}},[i("el-radio",{attrs:{label:"sms"}},[e._v("短信")]),e._v(" "),i("el-radio",{attrs:{label:"email"}},[e._v("邮件")])],1)],1)],1),e._v(" "),i("el-row",[i("el-form-item",{attrs:{label:"发送时间",prop:"remindTimeType"}},[i("el-radio-group",{model:{value:e.remindForm.remindTimeType,callback:function(r){e.$set(e.remindForm,"remindTimeType",r)},expression:"remindForm.remindTimeType"}},[i("el-radio",{attrs:{label:"immediate"}},[e._v("即时发送")]),e._v(" "),i("el-radio",{attrs:{label:"timing"}},[e._v("定时发送")])],1),e._v(" "),i("el-time-select",{directives:[{name:"show",rawName:"v-show",value:"timing"===e.remindForm.remindTimeType,expression:"remindForm.remindTimeType==='timing'"}],attrs:{"picker-options":{start:"00:00",step:"01:00",end:"23:00"},clearable:!1},model:{value:e.remindForm.remindTime,callback:function(r){e.$set(e.remindForm,"remindTime",r)},expression:"remindForm.remindTime"}})],1)],1),e._v(" "),i("el-row",[i("el-form-item",{attrs:{label:"催办主题",prop:"remindTitle"}},[i("el-input",{staticStyle:{width:"450px"},attrs:{placeholder:"请输入"},model:{value:e.remindForm.remindTitle,callback:function(r){e.$set(e.remindForm,"remindTitle",r)},expression:"remindForm.remindTitle"}})],1)],1),e._v(" "),i("el-row",[i("el-form-item",{attrs:{label:"催办内容",prop:"remindContent"}},[i("el-input",{staticStyle:{width:"450px"},attrs:{type:"textarea",rows:2,placeholder:"请输入"},model:{value:e.remindForm.remindContent,callback:function(r){e.$set(e.remindForm,"remindContent",r)},expression:"remindForm.remindContent"}})],1)],1)],1),e._v(" "),i("div",{attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{plain:"",icon:"el-icon-close"},on:{click:e.handleCancel}},[e._v("取消")]),e._v(" "),i("el-button",{attrs:{type:"primary",icon:"el-icon-bank-card"},on:{click:e.handleFinish}},[e._v("确定")])],1)],1)],1)},n=[],o=i("b907"),m={name:"FlowRemind",components:{},props:{size:{type:String,required:!1},type:{type:String,default:"primary"},plain:{type:Boolean,default:!0},round:{type:Boolean,default:!1},circle:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},icon:{type:String,default:"el-icon-bell"},btnText:{type:String,default:"流程催办"},title:{type:String,default:"流程催办"},empList:{type:Array,default:function(){return[]}}},data:function(){return{loading:!1,total:0,showDialog:!1,deptOptions:void 0,searchList:[],searchSelectedRows:[],resultList:[],resultSelectedRows:[],remindForm:{empList:[],startDate:void 0,endDate:void 0,remindType:void 0,remindTimeType:void 0,remindTime:void 0,remindTitle:void 0,remindContent:void 0},rules:{empList:[{type:"array",required:!0,message:"请选择催办流程",trigger:"change"}],startDate:[{required:!0,message:"开始时间不能为空",trigger:"change"}],endDate:[{required:!0,message:"结束时间不能为空",trigger:"change"}],remindType:[{required:!0,message:"请选择催办方式",trigger:"change"}],remindTimeType:[{required:!0,message:"发送时间不能为空",trigger:"change"}],remindContent:[{required:!0,message:"催办内容不能为空",trigger:"change"}],remindTitle:[{required:!0,message:"催办主题不能为空",trigger:"change"}]}}},created:function(){},mounted:function(){},computed:{},methods:{open:function(){this.remindForm.empList=this.empList},handleRemoveEmp:function(e){this.remindForm.empList=this.remindForm.empList.filter((function(r){return r.procInstId!==e.procInstId}))},handleFinish:function(){var e=this;this.$refs.remindForm.validate((function(r){if(r){if("timing"===e.remindForm.remindTimeType&&!e.remindForm.remindTime)return void e.msgError("请选择发送时间");if(0===e.remindForm.empList.length)return void e.msgError("要催办的流程不能为空");var i=e.remindForm.empList.map((function(e){return e.procInstId}));e.remindForm.procInstIds=i,Object(o["flowRemind"])(e.remindForm).then((function(r){e.loading=!1,"0"===r.code?(e.msgSuccess("催办成功"),e.$emit("select-finish",e.resultList),e.showDialog=!1):e.msgError(r.msg)})).catch((function(r){e.msgError(r)}))}}))},handleCancel:function(){this.reset(),this.$refs.remindForm.clearValidate(),this.showDialog=!1},reset:function(){this.remindForm={empList:[],startDate:void 0,endDate:void 0,remindType:void 0,remindFrequency:void 0,remindTimeType:void 0,remindTime:void 0,remindContent:void 0}}},watch:{}},a=m,l=(i("304f6"),i("2877")),d=Object(l["a"])(a,t,n,!1,null,"40656cca",null);r["default"]=d.exports},"4f0b":function(e,r,i){}}]);