(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d226d27"],{e9fc:function(e,o,t){"use strict";t.r(o);var i=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("el-dialog",{attrs:{visible:e.showModal,title:(e.isAdd?"新增":"修改")+"定时任务","close-on-click-modal":!1},on:{"update:visible":function(o){e.showModal=o},closed:e.$_onClose}},[t("el-form",{ref:"editForm",attrs:{rules:e.editRules,model:e.editForm,"label-width":"150px","label-position":"right"}},[t("el-form-item",{attrs:{label:"任务名称(英文)：",prop:"jobName"}},[t("el-input",{attrs:{placeholder:"请输入任务名称",disabled:!e.isAdd},model:{value:e.editForm.jobName,callback:function(o){e.$set(e.editForm,"jobName","string"===typeof o?o.trim():o)},expression:"editForm.jobName"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"任务说明(中文)：",prop:"jobDescription"}},[t("el-input",{attrs:{placeholder:"请输入任务说明"},model:{value:e.editForm.jobDescription,callback:function(o){e.$set(e.editForm,"jobDescription","string"===typeof o?o.trim():o)},expression:"editForm.jobDescription"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"执行类：",prop:"jobClassName"}},[t("el-input",{attrs:{placeholder:"请输入执行类"},model:{value:e.editForm.jobClassName,callback:function(o){e.$set(e.editForm,"jobClassName","string"===typeof o?o.trim():o)},expression:"editForm.jobClassName"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"触发器名称(英文)：",prop:"triggerName"}},[t("el-input",{attrs:{placeholder:"请输入触发器名称",disabled:!e.isAdd},model:{value:e.editForm.triggerName,callback:function(o){e.$set(e.editForm,"triggerName","string"===typeof o?o.trim():o)},expression:"editForm.triggerName"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"cron表达式：",prop:"cronExpression"}},[t("el-input",{attrs:{placeholder:"请输入cron表达式"},model:{value:e.editForm.cronExpression,callback:function(o){e.$set(e.editForm,"cronExpression","string"===typeof o?o.trim():o)},expression:"editForm.cronExpression"}})],1)],1),e._v(" "),t("div",{attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:e.$_closeModal}},[e._v("取消")]),e._v(" "),t("el-button",{attrs:{type:"primary",loading:e.isSaving},on:{click:e.$_onModalConfirm}},[e._v("确定")])],1)],1)},s=[],r=t("3e61");function a(){return{jobName:"",jobDescription:"",triggerName:"",jobClassName:"",cronExpression:""}}var l={props:{show:{type:Boolean,required:!0},job:{type:Object}},data:function(){return{showModal:!1,isSaving:!1,successFlag:!1,editForm:a(),editRules:{jobName:[{required:!0,message:"任务名称不能为空"}],jobDescription:[{required:!0,message:"任务说明不能为空"}],triggerName:[{required:!0,message:"触发器名称不能为空"}],jobClassName:[{required:!0,message:"执行类不能为空"}],cronExpression:[{required:!0,message:"cron表达式不能为空"}]}}},computed:{isAdd:function(){return!(this.job&&this.job.jobName)}},watch:{show:function(e,o){this.showModal=e,e&&(this.successFlag=!1,Object.assign(this.editForm,this.job||a()))}},methods:{$_onModalConfirm:function(){var e=this;this.isSaving||this.$refs.editForm.validate((function(o){o&&(e.isSaving=!0,Object(r["saveJob"])(e.editForm,e.isAdd).then((function(o){"0"===o.code?(e.msgSuccess("操作成功"),e.successFlag=!0,e.showModal=!1):e.$notify.error({title:"服务调用异常",message:o.msg})})).catch((function(o){e.$notify.error({title:"网络错误",message:o.message})})).finally((function(){e.isSaving=!1})))}))},$_closeModal:function(){this.showModal=!1},$_onClose:function(){this.editForm=a(),this.$emit("close-editor",this.successFlag)}}},n=l,c=t("2877"),d=Object(c["a"])(n,i,s,!1,null,null,null);o["default"]=d.exports}}]);