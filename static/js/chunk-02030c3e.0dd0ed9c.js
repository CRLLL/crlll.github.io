(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-02030c3e","chunk-2d21062b","chunk-20710bfc","chunk-142d866f","chunk-bb07ed0a","chunk-2d21062b"],{"2dd3":function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-row",{staticClass:"app-container"},[n("el-dialog",{attrs:{title:e.title,visible:e.show,width:"980px","close-on-click-modal":!1},on:{"update:visible":function(t){e.show=t},open:e.open,close:e.cancel}},[n("el-form",{ref:"relationForm",attrs:{inline:!0,model:e.form,rules:e.rules,"label-width":"88px"}},[n("el-form-item",{attrs:{label:"年份",prop:"year"}},[n("el-date-picker",{ref:"yearPicker",attrs:{type:"year",placeholder:"请选择年份",width:"4px",disabled:e.isUpdate},on:{change:e.getCycleList},model:{value:e.form.year,callback:function(t){e.$set(e.form,"year",t)},expression:"form.year"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"考核周期",prop:"cycleId"}},[n("el-select",{attrs:{placeholder:"选择考核周期",disabled:e.isUpdate},model:{value:e.form.cycleId,callback:function(t){e.$set(e.form,"cycleId",t)},expression:"form.cycleId"}},e._l(e.cycleOptions,(function(e){return n("el-option",{key:e.cycleId,attrs:{label:e.cycleName,value:e.cycleId}})})),1)],1),e._v(" "),n("el-row",[n("el-col",{attrs:{span:9}},[n("div",[n("div",{staticClass:"table-top"},[n("el-row",[n("span",[e._v("被考核人列表")]),e._v(" "),!1===e.isUpdate?n("select-emp",{staticClass:"fr",attrs:{plain:"",icon:"el-icon-plus",btnText:"新增"},on:{"select-finish":e.handleSelectEmp}}):e._e()],1)],1),e._v(" "),n("el-table",{ref:"empTable",attrs:{data:e.form.relationVOList,"row-key":"personId","empty-text":"请查询员工",height:"300px"}},[n("el-table-column",{attrs:{label:"部门",prop:"deptName",width:"121","show-overflow-tooltip":!0}}),e._v(" "),n("el-table-column",{attrs:{label:"员工编号",prop:"empNumber",width:"91"}}),e._v(" "),n("el-table-column",{attrs:{label:"姓名",prop:"empName",width:"91"}}),e._v(" "),!1===e.isUpdate?n("el-table-column",{attrs:{label:"操作",align:"center","class-name":"small-padding fixed-width",width:"50"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"删除",placement:"top",enterable:!1}},[n("el-button",{attrs:{size:"mini",type:"text",icon:"el-icon-delete"},on:{click:function(n){return e.deleteRow(t.$index,e.form.relationVOList)}}})],1)]}}],null,!1,38030880)}):e._e()],1),e._v(" "),n("pagination",{directives:[{name:"show",rawName:"v-show",value:e.empTotal>0,expression:"empTotal>0"}],attrs:{total:e.empTotal,small:"",layout:"sizes, prev, pager, next"}})],1)]),e._v(" "),n("el-col",{attrs:{span:1}},[n("div",{staticStyle:{width:"5px"}},[e._v(" ")])]),e._v(" "),n("el-col",{attrs:{span:13}},[n("div",[n("div",{staticClass:"table-top"},[n("el-row",[n("span",[e._v("考核人列表")]),e._v(" "),n("select-emp",{staticClass:"fr",attrs:{plain:"",icon:"el-icon-plus",btnText:"新增"},on:{"select-finish":e.handleSelectEvalPer}})],1)],1),e._v(" "),n("el-table",{ref:"empTable",attrs:{data:e.form.evalPersonVOList,"row-key":"personId","empty-text":"请查询员工",height:"300px"}},[n("el-table-column",{attrs:{label:"员工编号",prop:"empNumber",width:"120"}}),e._v(" "),n("el-table-column",{attrs:{label:"姓名",prop:"empName",width:"100"}}),e._v(" "),n("el-table-column",{attrs:{label:"权重",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-form-item",{staticStyle:{"margin-bottom":"0px"},attrs:{prop:"evalPersonVOList."+t.$index+".weight",rules:e.rules.weight}},[n("el-input",{attrs:{type:"number",min:0,max:100},model:{value:t.row.weight,callback:function(n){e.$set(t.row,"weight",e._n(n))},expression:"scope.row.weight"}})],1)]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"审批顺序",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",{staticStyle:{"margin-right":"5px"}},[e._v(e._s(t.row.orderNumber))]),e._v(" "),n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"上移",placement:"top",enterable:!1}},[n("el-button",{attrs:{type:"text",icon:"el-icon-upload2"},on:{click:function(n){return n.stopPropagation(),e.moveUpTable(t.$index,t.row,e.form.evalPersonVOList)}}})],1),e._v(" "),n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"下移",placement:"top",enterable:!1}},[n("el-button",{staticStyle:{"margin-left":"0"},attrs:{type:"text",icon:"el-icon-download"},on:{click:function(n){return n.stopPropagation(),e.moveDownTable(t.$index,t.row,e.form.evalPersonVOList)}}})],1)]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"目标审核",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-checkbox",{model:{value:t.row.targetFlag,callback:function(n){e.$set(t.row,"targetFlag",n)},expression:"scope.row.targetFlag"}})]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"考核打分",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-checkbox",{model:{value:t.row.scoreFlag,callback:function(n){e.$set(t.row,"scoreFlag",n)},expression:"scope.row.scoreFlag"}})]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"操作",align:"center","class-name":"small-padding fixed-width",width:"50"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"删除",placement:"top",enterable:!1}},[n("el-button",{attrs:{size:"mini",type:"text",icon:"el-icon-delete"},on:{click:function(n){return e.deleteRow(t.$index,e.form.evalPersonVOList)}}})],1)]}}])})],1),e._v(" "),n("pagination",{directives:[{name:"show",rawName:"v-show",value:e.evalPerTotal>0,expression:"evalPerTotal>0"}],attrs:{total:e.evalPerTotal,small:"",layout:"sizes, prev, pager, next"}})],1)])],1)],1),e._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{plain:"",icon:"el-icon-close"},on:{click:e.cancel}},[e._v("取消")]),e._v(" "),n("el-button",{attrs:{type:"primary",icon:"el-icon-bank-card"},on:{click:e.submitForm}},[e._v("保存")])],1)],1)],1)},r=[],a=(n("c5f6"),n("ac6a"),n("e31f")),c=n("304f"),l={components:{SelectEmp:function(){return Promise.all([n.e("chunk-5c5c1f08"),n.e("chunk-457809e8")]).then(n.bind(null,"2cc9"))}},props:{visible:{type:Boolean,default:!1},isUpdate:{type:Boolean,default:!1},title:{type:String,default:""},queryYear:{type:Date,default:function(){return new Date}},queryCycleId:{type:String,default:""},relationId:{type:String,default:"0"}},data:function(){return{show:!1,year:new Date,empTotal:0,evalPerTotal:0,cycleOptions:[],form:{year:void 0,cycleId:void 0,cycleList:[],relationVOList:[],evalPersonVOList:[]},rules:{year:[{required:!0,message:"年份不能为空",trigger:"blur"}],cycleId:[{required:!0,message:"考核周期不能为空",trigger:"blur"}],weight:[{type:"number",min:0,max:100,message:"权重为0-100之间的数字",trigger:"blur"}]}}},created:function(){},methods:{handleRow:function(e){return row},handleSelectEmp:function(e){var t=this;e.forEach((function(e){var n={personId:e.empId,deptName:e.orgName,empName:e.empName,empNumber:e.empNumber},o=!1,r=!1;t.form.relationVOList.forEach((function(t){t.personId!=e.empId||(o=!0)})),t.form.evalPersonVOList.forEach((function(n){if(n.personId==e.empId)return t.msgError("考核人与被考核人不能为同一人"),void(r=!0)})),o||r||t.form.relationVOList.push(n)}))},handleSelectEvalPer:function(e){var t=this,n=this.form.evalPersonVOList.length+1;e.forEach((function(e){var o={personId:e.empId,empNumber:e.empNumber,empName:e.empName,orderNumber:n};n++;var r=!1,a=!1;t.form.evalPersonVOList.forEach((function(t){t.personId!=e.empId||(r=!0)})),t.form.relationVOList.forEach((function(n){if(n.personId==e.empId)return t.msgError("考核人与被考核人不能为同一人"),void(a=!0)})),r||a||t.form.evalPersonVOList.push(o)}))},deleteRow:function(e,t){t.splice(e,1)},moveUpTable:function(e,t,n){if(e>0){var o=n[e-1];o.orderNumber++,n[e].orderNumber--,n.splice(e-1,1),n.splice(e,0,o)}else this.$message({type:"onfo",message:"已经是第一条，不可上移"})},moveDownTable:function(e,t,n){if(e+1!==n.length){var o=n[e+1];o.orderNumber--,n[e].orderNumber++,n.splice(e+1,1),n.splice(e,0,o)}else this.$message({type:"onfo",message:"已经是最后一条，不可下移"})},getCycleList:function(){var e=this,t={cycleYear:this.form.year.getFullYear(),pageNum:1,pageSize:0};Object(c["listPfmcCycle"])(t).then((function(t){"0"===t.code?e.cycleOptions=t.data.list:e.msgError("查询考核周期列表失败")})).catch((function(t){e.msgError(t)}))},open:function(){var e=this;"0"!=this.relationId?Object(a["getPfmcRelation"])(this.relationId).then((function(t){"0"===t.code?(e.form=t.data,e.cycleOptions=e.form.cycleList):e.msgError(t.msg)})).catch((function(t){e.msgError(erro)})):(this.form.year=this.queryYear,this.form.cycleId=this.queryCycleId,this.getCycleList())},cancel:function(){this.show=!1},reset:function(){this.resetForm("relationForm"),this.form.relationVOList=[],this.form.evalPersonVOList=[]},submitForm:function(){var e=this;this.$refs["relationForm"].validate((function(t){t&&e.validateForm()&&("0"!==e.relationId?Object(a["updatePfmcRelation"])(e.form).then((function(t){"0"===t.code?(e.msgSuccess("修改成功"),e.cancel()):e.msgError(t.msg)})):Object(a["addPfmcRelation"])(e.form).then((function(t){"0"===t.code?(e.msgSuccess("新增成功"),e.cancel()):e.msgError(t.code)})))}))},validateForm:function(){var e=0,t=0,n=!0,o=0,r="";return this.form.evalPersonVOList.forEach((function(a){return Number(a.weight)&&(o+=Number(a.weight)),1==a.scoreFlag&&e++,1==a.targetFlag&&t++,0==a.scoreFlag&&0==a.targetFlag?(n=!1,void(r="目标审核和考核打分至少勾选一个，请修改")):1==a.scoreFlag&&null==a.weight?(n=!1,r="设置为考核打分人的，权重不能为空，请修改",!1):void 0})),n?e>4||t>4?(this.msgError("目标审核和考核打分每种最多可维护4位人员，请修改"),!1):!(e>0&&100!=o)||(this.msgError("权重总和不等于100，请修改"),!1):(this.msgError(r),!1)}},watch:{show:function(){0==this.show&&this.$emit("update:visible",!1)},visible:function(){this.show=this.visible}}},i=l,s=(n("d5e0"),n("2877")),u=Object(s["a"])(i,o,r,!1,null,"12d29348",null);t["default"]=u.exports},"304f":function(e,t,n){"use strict";n.r(t),n.d(t,"listPfmcCycle",(function(){return a})),n.d(t,"getPfmcCycle",(function(){return c})),n.d(t,"addPfmcCycle",(function(){return l})),n.d(t,"updatePfmcCycle",(function(){return i})),n.d(t,"batchAddPfmcCycle",(function(){return s}));var o=n("b775"),r=n("b854");function a(e){return Object(o["a"])({url:"".concat(r["pfmcSettings"],"/pfmccycle/list"),method:"get",params:e})}function c(e){return Object(o["a"])({url:"".concat(r["pfmcSettings"],"/pfmccycle/").concat(e),method:"get"})}function l(e){return Object(o["a"])({url:"".concat(r["pfmcSettings"],"/pfmccycle/add"),method:"post",data:e})}function i(e){return Object(o["a"])({url:"".concat(r["pfmcSettings"],"/pfmccycle/update"),method:"put",data:e})}function s(e){return Object(o["a"])({url:"".concat(r["pfmcSettings"],"/pfmccycle/batchAdd"),method:"post",data:e})}},b854:function(e,t,n){"use strict";n.r(t),n.d(t,"pfmcSettings",(function(){return o})),n.d(t,"pfmcAsist",(function(){return r})),n.d(t,"pfmcExecution",(function(){return a})),n.d(t,"pfmcEval",(function(){return c}));var o="pfmc-settings",r="pfmc-asist",a="pfmc-execution",c="pfmc-eval"},d5e0:function(e,t,n){"use strict";var o=n("d9b1"),r=n.n(o);r.a},d9b1:function(e,t,n){},e31f:function(e,t,n){"use strict";n.r(t),n.d(t,"listPfmcRelation",(function(){return a})),n.d(t,"getPfmcRelation",(function(){return c})),n.d(t,"addPfmcRelation",(function(){return l})),n.d(t,"updatePfmcRelation",(function(){return i})),n.d(t,"deletePfmcRelation",(function(){return s})),n.d(t,"batchDelRelation",(function(){return u})),n.d(t,"batchAddPfmcRelation",(function(){return m})),n.d(t,"recordCopyRelation",(function(){return d})),n.d(t,"noRecordCopyRelation",(function(){return f}));var o=n("b775"),r=n("b854");function a(e){return Object(o["a"])({url:"".concat(r["pfmcSettings"],"/pfmcrelation/list"),method:"post",data:e})}function c(e){return Object(o["a"])({url:"".concat(r["pfmcSettings"],"/pfmcrelation/").concat(e),method:"get"})}function l(e){return Object(o["a"])({url:"".concat(r["pfmcSettings"],"/pfmcrelation/add"),method:"post",data:e})}function i(e){return Object(o["a"])({url:"".concat(r["pfmcSettings"],"/pfmcrelation/update"),method:"put",data:e})}function s(e){return Object(o["a"])({url:"".concat(r["pfmcSettings"],"/pfmcrelation/delete"),method:"put",data:e})}function u(e){return Object(o["a"])({url:"".concat(r["pfmcSettings"],"/pfmcrelation/batchdel"),method:"put",data:e})}function m(e){return Object(o["a"])({url:"".concat(r["pfmcSettings"],"/pfmcrelation/batchAdd"),method:"post",data:e})}function d(e){return Object(o["a"])({url:"".concat(r["pfmcSettings"],"/pfmcrelation/recordCopy"),method:"post",data:e})}function f(e){return Object(o["a"])({url:"".concat(r["pfmcSettings"],"/pfmcrelation/noRecordCopy"),method:"post",data:e})}}}]);