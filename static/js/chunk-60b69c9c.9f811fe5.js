(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-60b69c9c","chunk-2d21062b","chunk-b5d27614","chunk-04bac318","chunk-6b480e81","chunk-2d21062b","chunk-33b1b42a","chunk-0efcce37"],{"2f21":function(e,t,i){"use strict";var r=i("79e5");e.exports=function(e,t){return!!e&&r((function(){t?e.call(null,(function(){}),1):e.call(null)}))}},"55dd":function(e,t,i){"use strict";var r=i("5ca1"),o=i("d8e8"),n=i("4bf8"),l=i("79e5"),c=[].sort,s=[1,2,3];r(r.P+r.F*(l((function(){s.sort(void 0)}))||!l((function(){s.sort(null)}))||!i("2f21")(c)),"Array",{sort:function(e){return void 0===e?c.call(n(this)):c.call(n(this),o(e))}})},"81c7":function(e,t,i){"use strict";i.r(t),i.d(t,"listFormSet",(function(){return n})),i.d(t,"addFormSet",(function(){return l})),i.d(t,"getformSet",(function(){return c})),i.d(t,"updateFormSet",(function(){return s})),i.d(t,"delFormSet",(function(){return a})),i.d(t,"disableFormSet",(function(){return p})),i.d(t,"progListByFormId",(function(){return d}));var r=i("b775"),o=i("b854");function n(e){return Object(r["a"])({url:"".concat(o["pfmcSettings"],"/pfmcPresetFormSet/list"),method:"get",params:e})}function l(e){return Object(r["a"])({url:"".concat(o["pfmcSettings"],"/pfmcPresetFormSet"),method:"post",data:e})}function c(e){return Object(r["a"])({url:"".concat(o["pfmcSettings"],"/pfmcPresetFormSet/").concat(e),method:"get"})}function s(e){return Object(r["a"])({url:"".concat(o["pfmcSettings"],"/pfmcPresetFormSet"),method:"put",data:e})}function a(e){return Object(r["a"])({url:"".concat(o["pfmcSettings"],"/pfmcPresetFormSet/").concat(e),method:"delete"})}function p(e){return Object(r["a"])({url:"".concat(o["pfmcSettings"],"/pfmcPresetFormSet/disableFormSet/").concat(e),method:"get"})}function d(e){return Object(r["a"])({url:"".concat(o["pfmcSettings"],"/pfmcPresetFormSet/getProgByFormId/").concat(e),method:"get"})}},"9eda":function(e,t,i){"use strict";i.r(t);var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"pfmc-import-button-container"},[i("el-button",{staticStyle:{"margin-top":"3px"},attrs:{size:e.size,type:e.type,plain:e.plain,round:e.round,circle:e.circle,disabled:e.disabled,icon:e.icon},on:{click:e.handlePreview}},[e._v(e._s(e.btnText))]),e._v(" "),i("el-dialog",{ref:"previewContain",attrs:{title:e.title,width:"870px",visible:e.showDialog,"append-to-body":""},on:{"update:visible":function(t){e.showDialog=t},close:e.resetForm}},[i("el-collapse",{staticStyle:{width:"800px","border-bottom":"1"},model:{value:e.activeNames,callback:function(t){e.activeNames=t},expression:"activeNames"}},e._l(e.previewSectionList,(function(t,r){return i("el-collapse-item",{key:r,attrs:{name:r}},[i("template",{slot:"title"},[i("div",{on:{click:function(e){}}},[i("div",{staticStyle:{float:"left","margin-top":"13px",width:"150px","font-weight":"bold"}},[e._v(e._s(t.sectionName))])])]),e._v(" "),i("div",{staticStyle:{width:"95%"}},[i("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,"row-key":"fieldName","tree-props":{children:"children",hasChildren:"hasChildren"}}},[i("el-table-column",{attrs:{label:"序号",type:"index"}}),e._v(" "),e._l(t.previewFieldList,(function(t,r){return i("el-table-column",{key:r,attrs:{prop:t.prop,width:t.width,label:t.fieldName,"show-overflow-tooltip":!0},scopedSlots:e._u([{key:"default",fn:function(r){return["select"===t.fieldType?i("div",[i("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择"},model:{value:r.row[t.prop],callback:function(i){e.$set(r.row,t.prop,i)},expression:"scope.row[item.prop]"}},e._l(t.selectValue,(function(e){return i("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1):"date"===t.fieldType?i("div",[i("el-date-picker",{staticStyle:{width:"100%",height:"100%","line-height":"100%"},attrs:{type:"date",placeholder:"选择日期"},model:{value:r.row[t.prop],callback:function(i){e.$set(r.row,t.prop,i)},expression:"scope.row[item.prop]"}})],1):i("div",[i("el-input",{staticStyle:{width:"100%",height:"100%","line-height":"100%"},attrs:{type:"textarea",rows:"1"},model:{value:r.row[t.prop],callback:function(i){e.$set(r.row,t.prop,i)},expression:"scope.row[item.prop]"}})],1)]}}],null,!0)})})),e._v(" "),"2"===e.showType?i("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(r){return[i("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:"","label-width":"100px"}},[e._l(t.expendFieldList,(function(t,o){return[i("el-row",[i("el-form-item",{attrs:{label:t.fieldName+":",prop:t.prop}},["select"===t.fieldType?i("div",[i("el-select",{staticStyle:{width:"300px"},attrs:{placeholder:"请选择"},model:{value:r.row[t.prop],callback:function(i){e.$set(r.row,t.prop,i)},expression:"props.row[item.prop]"}},e._l(t.selectValue,(function(e){return i("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1):"date"===t.fieldType?i("div",[i("el-date-picker",{staticStyle:{width:"300px",height:"100%","line-height":"100%"},attrs:{type:"date",placeholder:"选择日期"},model:{value:r.row[t.prop],callback:function(i){e.$set(r.row,t.prop,i)},expression:"props.row[item.prop]"}})],1):i("div",[i("el-input",{staticStyle:{width:"300px",height:"100%","line-height":"100%"},attrs:{type:"textarea",rows:"1"},model:{value:r.row[t.prop],callback:function(i){e.$set(r.row,t.prop,i)},expression:"props.row[item.prop]"}})],1)])],1)]}))],2)]}}],null,!0)}):e._e()],2)],1)],2)})),1)],1)],1)},o=[],n=(i("55dd"),i("28a5"),i("81c7")),l={name:"viewPfmcForm",components:{},props:{size:{type:String,required:!1},type:{type:String,default:"primary"},plain:{type:Boolean,default:!0},round:{type:Boolean,default:!1},circle:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},icon:{type:String,default:""},btnText:{type:String,default:"预览表单"},title:{type:String,default:"预览表单"},formId:{type:String,default:""}},data:function(){return{showDialog:!1,formSetSectionList:[],previewSectionList:[],activeNames:[],showType:void 0}},created:function(){},mounted:function(){},computed:{},methods:{resetForm:function(){this.previewSectionList=[]},sortNumber:function(e,t){return parseInt(e.showOrder)-parseInt(t.showOrder)},handlePreview:function(){var e=this;this.formId&&(this.showDialog=!0,this.activeNames=[],Object(n["getformSet"])(this.formId).then((function(t){if(e.formSetSectionList=t.data.formSetSectionList,e.showType=t.data.showType,e.formSetSectionList&&0!=e.formSetSectionList.length)for(var i=e.$refs.previewContain.width,r=0;r<e.formSetSectionList.length;r++){var o=e.formSetSectionList[r],n={sectionName:o.sectionName,showOrder:o.showOrder,previewFieldList:[],tableData:[{}],expendFieldList:[]};if(!e.formSetSectionList[r].formSetFieldList||0==e.formSetSectionList[r].formSetFieldList.length)return void e.msgError("缺少区段字段信息，无法预览！");if(e.activeNames.push(r),"1"===e.showType){for(var l=0;l<e.formSetSectionList[r].formSetFieldList.length;l++){var c=e.formSetSectionList[r].formSetFieldList[l],s={fieldName:c.fieldName,showOrder:c.showOrder,prop:c.fieldId,fieldType:c.fieldType,selectValue:"select"===c.fieldType?c.selectValue.split(","):[],width:"1"==o.widthPerType?i*parseInt(c.widthper)/100+"px":c.widthper+"px"};n.previewFieldList.push(s)}n.previewFieldList.sort(e.sortNumber)}else{for(var a=["2","3","4","5"],p=0,d=0;d<e.formSetSectionList[r].formSetFieldList.length;d++){var u=e.formSetSectionList[r].formSetFieldList[d],f={fieldName:u.fieldName,prop:u.fieldId,width:"1"==o.widthPerType?i*parseInt(u.widthper)/100+"px":u.widthper+"px",showOrder:u.showOrder,fieldType:u.fieldType,selectValue:"select"===u.fieldType?u.selectValue.split(","):[]};a.indexOf(u.otherAttr)>-1?(n.previewFieldList.push(f),p++):n.expendFieldList.push(f)}for(var m=.9*i/p,h=0;h<n.previewFieldList.length;h++){var w=n.previewFieldList[h];w.width=m+"px"}n.previewFieldList.sort(e.sortNumber),n.expendFieldList.sort(e.sortNumber)}e.previewSectionList.push(n),e.previewSectionList.sort(e.sortNumber)}})))}},watch:{}},c=l,s=(i("a5c6"),i("2877")),a=Object(s["a"])(c,r,o,!1,null,"368a1bba",null);t["default"]=a.exports},a5c6:function(e,t,i){"use strict";var r=i("e4e4"),o=i.n(r);o.a},b854:function(e,t,i){"use strict";i.r(t),i.d(t,"pfmcSettings",(function(){return r})),i.d(t,"pfmcAsist",(function(){return o})),i.d(t,"pfmcExecution",(function(){return n})),i.d(t,"pfmcEval",(function(){return l}));var r="pfmc-settings",o="pfmc-asist",n="pfmc-execution",l="pfmc-eval"},e4e4:function(e,t,i){}}]);