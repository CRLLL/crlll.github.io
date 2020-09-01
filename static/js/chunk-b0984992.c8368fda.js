(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b0984992"],{1610:function(e,o,t){},"36f9":function(e,o,t){"use strict";var a=t("1610"),r=t.n(a);r.a},"3af8":function(e,o,t){"use strict";t.r(o);var a=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"app-container"},[t("el-dialog",{attrs:{title:e.title,visible:e.show,width:"800px","close-on-click-modal":!1},on:{"update:visible":function(o){e.show=o},open:e.open,close:e.cancel}},[t("el-form",{ref:"noevalForm",staticClass:"form-item-width250",attrs:{model:e.noevalForm,rules:e.rules,"label-width":"130px"}},[t("el-form-item",{attrs:{label:"年份:",prop:"periodYear"}},[t("el-date-picker",{attrs:{type:"year",placeholder:"选择年份",disabled:!e.isAdd},on:{change:e.getCycleList},model:{value:e.noevalForm.periodYear,callback:function(o){e.$set(e.noevalForm,"periodYear",o)},expression:"noevalForm.periodYear"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"考核周期:",prop:"periodId"}},[t("el-select",{attrs:{clearable:"",size:"small",disabled:!e.isAdd},model:{value:e.noevalForm.periodId,callback:function(o){e.$set(e.noevalForm,"periodId",o)},expression:"noevalForm.periodId"}},e._l(e.periodOptions,(function(e){return t("el-option",{key:e.cycleId,attrs:{label:e.cycleName,value:e.cycleId}})})),1)],1),e._v(" "),t("el-form-item",{attrs:{label:"人员选择:",prop:"empName"}},[t("el-input",{attrs:{readonly:"",disabled:!e.isAdd},model:{value:e.noevalForm.empName,callback:function(o){e.$set(e.noevalForm,"empName",o)},expression:"noevalForm.empName"}},[t("select-emp",{directives:[{name:"show",rawName:"v-show",value:e.isAdd,expression:"isAdd"}],attrs:{slot:"append",icon:"el-icon-search"},on:{"select-finish":e.handleSelectEmp},slot:"append"})],1)],1),e._v(" "),t("el-form-item",{attrs:{label:"不参加考核原因:",prop:"noevalReason"}},[t("el-input",{attrs:{type:"textarea",rows:"3",maxlength:"100"},model:{value:e.noevalForm.noevalReason,callback:function(o){e.$set(e.noevalForm,"noevalReason",o)},expression:"noevalForm.noevalReason"}})],1)],1),e._v(" "),t("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{attrs:{plain:"",icon:"el-icon-close"},on:{click:e.cancel}},[e._v("取消")]),e._v(" "),t("el-button",{attrs:{type:"primary",icon:"el-icon-bank-card"},on:{click:e.submitForm}},[e._v("保存")])],1)],1)],1)},r=[],n=(t("55dd"),t("ac6a"),t("304f")),l=t("f724"),i={name:"UpdateNoevalDialog",components:{SelectEmp:function(){return Promise.all([t.e("chunk-5c5c1f08"),t.e("chunk-457809e8")]).then(t.bind(null,"2cc9"))}},props:{visible:{type:Boolean,default:!1},isAdd:{type:Boolean,default:!0},title:{type:String,default:""},noevalId:{type:String,default:"0"}},data:function(){return{show:!1,noevalForm:{noevalId:"0",empId:"",empNumber:"",empName:"",deptId:"",deptName:"",periodYear:new Date,periodId:"",periodName:"",noevalReason:""},periodOptions:[],rules:{periodYear:[{required:!0,message:"年份不能为空",trigger:"change"}],periodId:[{required:!0,message:"考核周期不能为空",trigger:"change"}],empName:[{required:!0,message:"不参加考核员工不能为空",trigger:"change"}],noevalReason:[{required:!0,message:"不参加考核原因不能为空",trigger:"change"}]}}},computed:{},created:function(){},methods:{submitForm:function(){var e=this;this.$refs.noevalForm.validate((function(o){o&&(e.isAdd?e.addNoevalInfo():e.updateNoevalInfo())}))},handleSelectEmp:function(e){var o=this;e.forEach((function(e){o.noevalForm.empId+=e.empId+",",o.noevalForm.empName+=e.empName+","}))},resetForm:function(){this.noevalForm={noevalId:"0",empId:"",empNumber:"",empName:"",deptId:"",deptName:"",periodYear:new Date,periodId:"",periodName:"",noevalReason:""},this.$refs.noevalForm.resetFields()},open:function(){this.isAdd?this.getCycleList():this.getNoevalInfo()},cancel:function(){this.resetForm(),this.show=!1},getNoevalInfo:function(){var e=this;Object(l["getNoeval"])(this.noevalId).then((function(o){"0"===o.code?(e.noevalForm=o.data,e.getCycleList()):e.msgError(o.msg)})).catch((function(o){e.msgError(o)}))},addNoevalInfo:function(){var e=this;Object(l["addNoeval"])(this.noevalForm).then((function(o){"0"===o.code?(e.msgSuccess("新增不参加考核人员成功"),e.show=!1):e.msgError(o.msg)})).catch((function(o){e.msgError(erro)}))},updateNoevalInfo:function(){var e=this;Object(l["updateNoeval"])(this.noevalForm).then((function(o){"0"===o.code?(e.msgSuccess("修改不参加考核人员成功"),e.cancel()):e.msgError("修改不参加考核人员失败")})).catch((function(o){e.msgError(o)}))},getCycleList:function(){var e=this,o={cycleYear:"string"===typeof this.noevalForm.periodYear?this.noevalForm.periodYear:this.noevalForm.periodYear.getFullYear(),pageNum:1,pageSize:0};Object(n["listPfmcCycle"])(o).then((function(o){"0"===o.code?e.periodOptions=e.cycleSort(o.data.list):e.msgError("查询考核周期列表失败")})).catch((function(o){e.msgError(o)}))},cycleCompare:function(e,o){var t=e.cycleTypeOrder,a=o.cycleTypeOrder,r=e.startDate,n=o.startDate;return t>a||t<a?t>a?1:-1:t==a?r>n?1:r==n?0:-1:void 0},cycleSort:function(e){var o=e.map((function(e){switch(e.cycleType){case"month_pfmc":e.cycleTypeOrder=1;break;case"quarter_pfmc":e.cycleTypeOrder=2;break;case"half_year_pfmc":e.cycleTypeOrder=3;break;case"year_pfmc":e.cycleTypeOrder=4;break;default:e.cycleTypeOrder=5;break}return e}));return o.sort(this.cycleCompare)}},watch:{show:function(){0==this.show&&this.$emit("update:visible",!1)},visible:function(){this.show=this.visible}}},s=i,c=(t("36f9"),t("2877")),d=Object(c["a"])(s,a,r,!1,null,"cdd73ed4",null);o["default"]=d.exports}}]);