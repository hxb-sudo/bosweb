(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-6372"],{"0Rxn":function(e,t,a){},"5zsn":function(e,t,a){"use strict";a.r(t);var r=a("t3Un"),l=a("Qyje"),i=a.n(l);var o=a("p46w"),n=a.n(o),s={name:"add",data:function(){return{ruleForm:{name:null,empname:null,grade:null,operationtime:new Date,units:null,remarks:null},rules:{name:[{required:!0,message:"输入收派标准名称",trigger:"blur"}],grade:[{required:!0,message:"请选择是否分级",trigger:"blur"}]}}},methods:{submitForm:function(e){var t=this;this.$refs[e].validate(function(a){if(!a)return!1;var l=JSON.parse(n.a.get("user"));t.ruleForm.operatorid=l.id,t.ruleForm.operationunitid=l.systemunits.id,t.ruleForm.operationtime=t.timeFormat(t.ruleForm.operationtime),function(e){return Object(r.a)({contentType:"application/json",url:"/basicarchives/add",method:"post",data:i.a.stringify(e)})}(t.ruleForm).then(function(a){a&&(t.$notify({title:"成功",message:"添加基础档案成功",type:"success"}),t.resetForm(e),t.$emit("addSuccess"))}).catch(function(e){})})},resetForm:function(e){this.$refs[e].resetFields()},timeFormat:function(e){var t=(e=new Date(e)).getFullYear(),a=e.getMonth()<10?"0"+e.getMonth():e.getMonth(),r=e.getDate()<10?"0"+e.getDate():e.getDate(),l=e.getHours()<10?"0"+e.getHours():e.getHours(),i=e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes(),o=e.getSeconds()<10?"0"+e.getSeconds():e.getSeconds();return[t,a+1,r].join("-")+" "+[l,i,o].join(":")}},created:function(){var e=JSON.parse(n.a.get("user"));this.ruleForm.empname=e.empname,this.ruleForm.units=e.systemunits.name}},m=(a("iV/S"),a("KHd+")),u=Object(m.a)(s,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{align:"center"}},[a("el-form",{ref:"ruleForm",staticClass:"demo-form-inline",attrs:{model:e.ruleForm,rules:e.rules,size:"small","label-width":"auto","label-position":"left"}},[a("el-row",{attrs:{gutter:5}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"档案名称",prop:"name"}},[a("el-input",{staticStyle:{width:"55%"},attrs:{placeholder:"档案名称"},model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name",t)},expression:"ruleForm.name"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"是否分级",prop:"grade"}},[a("el-radio-group",{staticStyle:{width:"55%"},model:{value:e.ruleForm.grade,callback:function(t){e.$set(e.ruleForm,"grade",t)},expression:"ruleForm.grade"}},[a("el-radio",{attrs:{label:0,value:e.ruleForm.grade}},[e._v("否")]),e._v(" "),a("el-radio",{attrs:{label:1,value:e.ruleForm.grade}},[e._v("是")])],1)],1)],1)],1),e._v(" "),a("el-row",{attrs:{gutter:5}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"操作人员",prop:"empname"}},[a("el-input",{staticStyle:{width:"55%"},attrs:{disabled:"",placeholder:"操作人员"},model:{value:e.ruleForm.empname,callback:function(t){e.$set(e.ruleForm,"empname",t)},expression:"ruleForm.empname"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"操作单位",prop:"units"}},[a("el-input",{staticStyle:{width:"55%"},attrs:{disabled:"",placeholder:"操作单位"},model:{value:e.ruleForm.units,callback:function(t){e.$set(e.ruleForm,"units",t)},expression:"ruleForm.units"}})],1)],1)],1),e._v(" "),a("el-row",{attrs:{gutter:5}},[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"操作日期",prop:"operationtime"}},[a("el-date-picker",{staticStyle:{width:"47%"},attrs:{disabled:"",type:"datetime"},model:{value:e.ruleForm.operationtime,callback:function(t){e.$set(e.ruleForm,"operationtime",t)},expression:"ruleForm.operationtime"}})],1)],1)],1),e._v(" "),a("el-row",{attrs:{gutter:5}},[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"备注",prop:"remarks"}},[a("el-input",{staticStyle:{width:"47%"},attrs:{type:"textarea"},model:{value:e.ruleForm.remarks,callback:function(t){e.$set(e.ruleForm,"remarks",t)},expression:"ruleForm.remarks"}})],1)],1)],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("ruleForm")}}},[e._v("提交")]),e._v(" "),a("el-button",{on:{click:function(t){e.resetForm("ruleForm")}}},[e._v("重置")])],1)],1)],1)},[],!1,null,"a817c3de",null);u.options.__file="add.vue";var c=u.exports,d={name:"edit",props:["rowData"],data:function(){return{ruleForm:{name:null,empname:null,grade:null,operationtime:new Date,units:null,remarks:null},rules:{name:[{required:!0,message:"输入收派标准名称",trigger:"blur"}],grade:[{required:!0,message:"请选择是否分级",trigger:"blur"}]}}},methods:{submitForm:function(e){var t=this;this.$refs[e].validate(function(a){if(!a)return!1;t.ruleForm.operationtime=t.timeFormat(t.ruleForm.operationtime),function(e){return Object(r.a)({contentType:"application/json",url:"/basicarchives/edit",method:"post",data:i.a.stringify(e)})}(t.ruleForm).then(function(a){a&&(t.$notify({title:"成功",message:"编辑收派标准成功",type:"success"}),t.resetForm(e),t.$emit("editSuccess"))}).catch(function(e){})})},resetForm:function(e){this.$refs[e].resetFields()},timeFormat:function(e){var t=(e=new Date(e)).getFullYear(),a=e.getMonth()<10?"0"+e.getMonth():e.getMonth(),r=e.getDate()<10?"0"+e.getDate():e.getDate(),l=e.getHours()<10?"0"+e.getHours():e.getHours(),i=e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes(),o=e.getSeconds()<10?"0"+e.getSeconds():e.getSeconds();return[t,a+1,r].join("-")+" "+[l,i,o].join(":")}},watch:{rowData:{immediate:!0,deep:!0,handler:function(e){e.id&&(this.ruleForm.id=e.id,this.ruleForm.name=e.name,this.ruleForm.grade=e.grade?1:0,this.ruleForm.operationtime=e.operationtime,this.ruleForm.remarks=e.remarks)}}},created:function(){var e=JSON.parse(n.a.get("user"));this.ruleForm.empname=e.empname,this.ruleForm.operatorid=e.id,this.ruleForm.units=e.systemunits.name,this.ruleForm.operationunitid=e.systemunits.id}},p=(a("qtPL"),Object(m.a)(d,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{align:"center"}},[a("el-form",{ref:"ruleForm",staticClass:"demo-form-inline",attrs:{model:e.ruleForm,rules:e.rules,size:"small","label-width":"auto","label-position":"left"}},[a("el-row",{attrs:{gutter:5}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"档案名称",prop:"name"}},[a("el-input",{staticStyle:{width:"55%"},attrs:{placeholder:"档案名称"},model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name",t)},expression:"ruleForm.name"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"是否分级",prop:"grade"}},[a("el-radio-group",{staticStyle:{width:"55%"},model:{value:e.ruleForm.grade,callback:function(t){e.$set(e.ruleForm,"grade",t)},expression:"ruleForm.grade"}},[a("el-radio",{attrs:{label:0,value:e.ruleForm.grade}},[e._v("否")]),e._v(" "),a("el-radio",{attrs:{label:1,value:e.ruleForm.grade}},[e._v("是")])],1)],1)],1)],1),e._v(" "),a("el-row",{attrs:{gutter:5}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"操作人员",prop:"empname"}},[a("el-input",{staticStyle:{width:"55%"},attrs:{disabled:"",placeholder:"操作人员"},model:{value:e.ruleForm.empname,callback:function(t){e.$set(e.ruleForm,"empname",t)},expression:"ruleForm.empname"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"操作单位",prop:"units"}},[a("el-input",{staticStyle:{width:"55%"},attrs:{disabled:"",placeholder:"操作单位"},model:{value:e.ruleForm.units,callback:function(t){e.$set(e.ruleForm,"units",t)},expression:"ruleForm.units"}})],1)],1)],1),e._v(" "),a("el-row",{attrs:{gutter:5}},[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"操作日期",prop:"operationtime"}},[a("el-date-picker",{staticStyle:{width:"47%"},attrs:{disabled:"",type:"datetime"},model:{value:e.ruleForm.operationtime,callback:function(t){e.$set(e.ruleForm,"operationtime",t)},expression:"ruleForm.operationtime"}})],1)],1)],1),e._v(" "),a("el-row",{attrs:{gutter:5}},[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"备注",prop:"remarks"}},[a("el-input",{staticStyle:{width:"47%"},attrs:{type:"textarea"},model:{value:e.ruleForm.remarks,callback:function(t){e.$set(e.ruleForm,"remarks",t)},expression:"ruleForm.remarks"}})],1)],1)],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("ruleForm")}}},[e._v("提交")]),e._v(" "),a("el-button",{on:{click:function(t){e.resetForm("ruleForm")}}},[e._v("重置")])],1)],1)],1)},[],!1,null,"3244e631",null));p.options.__file="edit.vue";var g=p.exports;function h(e){return Object(r.a)({contentType:"application/json",url:"/basicarchivesentry/add",method:"post",data:i.a.stringify(e)})}var f={props:["parentid"],name:"entryAdd",data:function(){return{ruleForm:{parentid:null,name:null,empname:null,available:null,operationtime:new Date,units:null,remarks:null},rules:{name:[{required:!0,message:"输入收派标准名称",trigger:"blur"}],available:[{required:!0,message:"请选择是否封存",trigger:"blur"}]}}},methods:{submitForm:function(e){var t=this;this.$refs[e].validate(function(a){if(!a)return!1;var r=JSON.parse(n.a.get("user"));t.ruleForm.operatorid=r.id,t.ruleForm.operationunitid=r.systemunits.id,t.ruleForm.operationtime=t.timeFormat(t.ruleForm.operationtime),h(t.ruleForm).then(function(a){a&&(t.$notify({title:"成功",message:"添加基础档案条目成功",type:"success"}),t.resetForm(e))}).catch(function(e){}),console.log(t.ruleForm)})},resetForm:function(e){this.$refs[e].resetFields(),this.$emit("addSuccess")},timeFormat:function(e){var t=(e=new Date(e)).getFullYear(),a=e.getMonth()<10?"0"+e.getMonth():e.getMonth(),r=e.getDate()<10?"0"+e.getDate():e.getDate(),l=e.getHours()<10?"0"+e.getHours():e.getHours(),i=e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes(),o=e.getSeconds()<10?"0"+e.getSeconds():e.getSeconds();return[t,a+1,r].join("-")+" "+[l,i,o].join(":")}},created:function(){var e=JSON.parse(n.a.get("user"));this.ruleForm.empname=e.empname,this.ruleForm.units=e.systemunits.name},watch:{parentid:{deep:!0,immediate:!0,handler:function(e){this.ruleForm.parentid=e}}}},v=(a("rTSP"),Object(m.a)(f,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{align:"center"}},[a("el-form",{ref:"ruleForm",staticClass:"demo-form-inline",attrs:{model:e.ruleForm,rules:e.rules,size:"small","label-width":"auto","label-position":"left"}},[a("el-row",{attrs:{gutter:5}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"档案名称",prop:"name"}},[a("el-input",{staticStyle:{width:"55%"},attrs:{placeholder:"档案名称"},model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name",t)},expression:"ruleForm.name"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"上级编码",prop:"parentid"}},[a("el-input",{staticStyle:{width:"55%"},attrs:{disabled:"",placeholder:"上级编码"},model:{value:e.ruleForm.parentid,callback:function(t){e.$set(e.ruleForm,"parentid",t)},expression:"ruleForm.parentid"}})],1)],1)],1),e._v(" "),a("el-row",{attrs:{gutter:5}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"封存标志",prop:"available"}},[a("el-radio-group",{staticStyle:{width:"55%"},model:{value:e.ruleForm.available,callback:function(t){e.$set(e.ruleForm,"available",t)},expression:"ruleForm.available"}},[a("el-radio",{attrs:{label:0,value:e.ruleForm.available}},[e._v("否")]),e._v(" "),a("el-radio",{attrs:{label:1,value:e.ruleForm.available}},[e._v("是")])],1)],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"操作人员",prop:"empname"}},[a("el-input",{staticStyle:{width:"55%"},attrs:{disabled:"",placeholder:"操作人员"},model:{value:e.ruleForm.empname,callback:function(t){e.$set(e.ruleForm,"empname",t)},expression:"ruleForm.empname"}})],1)],1)],1),e._v(" "),a("el-row",{attrs:{gutter:5}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"操作单位",prop:"units"}},[a("el-input",{staticStyle:{width:"55%"},attrs:{disabled:"",placeholder:"操作单位"},model:{value:e.ruleForm.units,callback:function(t){e.$set(e.ruleForm,"units",t)},expression:"ruleForm.units"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"操作日期",prop:"operationtime"}},[a("el-date-picker",{staticStyle:{width:"55%"},attrs:{disabled:"",type:"datetime"},model:{value:e.ruleForm.operationtime,callback:function(t){e.$set(e.ruleForm,"operationtime",t)},expression:"ruleForm.operationtime"}})],1)],1)],1),e._v(" "),a("el-row",{attrs:{gutter:5}},[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"备注",prop:"remarks"}},[a("el-input",{staticStyle:{width:"47%"},attrs:{type:"textarea"},model:{value:e.ruleForm.remarks,callback:function(t){e.$set(e.ruleForm,"remarks",t)},expression:"ruleForm.remarks"}})],1)],1)],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("ruleForm")}}},[e._v("提交")]),e._v(" "),a("el-button",{on:{click:function(t){e.resetForm("ruleForm")}}},[e._v("返回")])],1)],1)],1)},[],!1,null,"48d0c786",null));v.options.__file="entryAdd.vue";var b=v.exports,F={props:["parentid","rowData"],name:"entryEdit",data:function(){return{ruleForm:{parentid:null,name:null,empname:null,available:null,operationtime:new Date,units:null,remarks:null},rules:{name:[{required:!0,message:"输入收派标准名称",trigger:"blur"}],available:[{required:!0,message:"请选择是否封存",trigger:"blur"}]}}},methods:{submitForm:function(e){var t=this;this.$refs[e].validate(function(a){if(!a)return!1;var r=JSON.parse(n.a.get("user"));t.ruleForm.operatorid=r.id,t.ruleForm.operationunitid=r.systemunits.id,t.ruleForm.operationtime=t.timeFormat(t.ruleForm.operationtime),h(t.ruleForm).then(function(a){a&&(t.$notify({title:"成功",message:"添加基础档案条目成功",type:"success"}),t.resetForm(e))}).catch(function(e){}),console.log(t.ruleForm)})},resetForm:function(e){this.$refs[e].resetFields(),this.$emit("editSuccess")},timeFormat:function(e){var t=(e=new Date(e)).getFullYear(),a=e.getMonth()<10?"0"+e.getMonth():e.getMonth(),r=e.getDate()<10?"0"+e.getDate():e.getDate(),l=e.getHours()<10?"0"+e.getHours():e.getHours(),i=e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes(),o=e.getSeconds()<10?"0"+e.getSeconds():e.getSeconds();return[t,a+1,r].join("-")+" "+[l,i,o].join(":")}},created:function(){var e=JSON.parse(n.a.get("user"));this.ruleForm.empname=e.empname,this.ruleForm.units=e.systemunits.name},watch:{parentid:{deep:!0,immediate:!0,handler:function(e){this.ruleForm.parentid=e}},rowData:{deep:!0,immediate:!0,handler:function(e){this.ruleForm.id=e.id,this.ruleForm.name=e.name,this.ruleForm.available=e.available?1:0,this.ruleForm.remarks=e.remarks,this.ruleForm.parentid=e.parentid}}}},w=(a("WWT6"),Object(m.a)(F,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{align:"center"}},[a("el-form",{ref:"ruleForm",staticClass:"demo-form-inline",attrs:{model:e.ruleForm,rules:e.rules,size:"small","label-width":"auto","label-position":"left"}},[a("el-row",{attrs:{gutter:5}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"档案名称",prop:"name"}},[a("el-input",{staticStyle:{width:"55%"},attrs:{placeholder:"档案名称"},model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name",t)},expression:"ruleForm.name"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"上级编码",prop:"parentid"}},[a("el-input",{staticStyle:{width:"55%"},attrs:{disabled:"",placeholder:"上级编码"},model:{value:e.ruleForm.parentid,callback:function(t){e.$set(e.ruleForm,"parentid",t)},expression:"ruleForm.parentid"}})],1)],1)],1),e._v(" "),a("el-row",{attrs:{gutter:5}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"封存标志",prop:"available"}},[a("el-radio-group",{staticStyle:{width:"55%"},model:{value:e.ruleForm.available,callback:function(t){e.$set(e.ruleForm,"available",t)},expression:"ruleForm.available"}},[a("el-radio",{attrs:{label:0,value:e.ruleForm.available}},[e._v("否")]),e._v(" "),a("el-radio",{attrs:{label:1,value:e.ruleForm.available}},[e._v("是")])],1)],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"操作人员",prop:"empname"}},[a("el-input",{staticStyle:{width:"55%"},attrs:{disabled:"",placeholder:"操作人员"},model:{value:e.ruleForm.empname,callback:function(t){e.$set(e.ruleForm,"empname",t)},expression:"ruleForm.empname"}})],1)],1)],1),e._v(" "),a("el-row",{attrs:{gutter:5}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"操作单位",prop:"units"}},[a("el-input",{staticStyle:{width:"55%"},attrs:{disabled:"",placeholder:"操作单位"},model:{value:e.ruleForm.units,callback:function(t){e.$set(e.ruleForm,"units",t)},expression:"ruleForm.units"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"操作日期",prop:"operationtime"}},[a("el-date-picker",{staticStyle:{width:"55%"},attrs:{disabled:"",type:"datetime"},model:{value:e.ruleForm.operationtime,callback:function(t){e.$set(e.ruleForm,"operationtime",t)},expression:"ruleForm.operationtime"}})],1)],1)],1),e._v(" "),a("el-row",{attrs:{gutter:5}},[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"备注",prop:"remarks"}},[a("el-input",{staticStyle:{width:"47%"},attrs:{type:"textarea"},model:{value:e.ruleForm.remarks,callback:function(t){e.$set(e.ruleForm,"remarks",t)},expression:"ruleForm.remarks"}})],1)],1)],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("ruleForm")}}},[e._v("提交")]),e._v(" "),a("el-button",{on:{click:function(t){e.resetForm("ruleForm")}}},[e._v("返回")])],1)],1)],1)},[],!1,null,"88c62022",null));w.options.__file="entryEdit.vue";var _={name:"entry",props:["parentid"],data:function(){return{rowData:{},loading:!1,tableData:[],multipleSelection:[],showAddDialog:!1,showEditDialog:!1}},methods:{addSuccess:function(){this.getList(),this.showAddDialog=!1},editSuccess:function(){this.getList(),this.showEditDialog=!1},openAddDialog:function(){this.showAddDialog=!0},openEditDialog:function(){this.multipleSelection.length<=0?this.$message.error("请选中一项修改"):(this.$refs.edit&&this.$refs.edit.resetForm("ruleForm"),this.rowData=this.multipleSelection[0],this.showEditDialog=!0)},handleSelectionChange:function(e){this.multipleSelection=e},toggleSelection:function(){this.$refs.multipleTable.clearSelection()},getList:function(){var e=this;this.loading=!0,function(e){return Object(r.a)({contentType:"application/json",url:"/basicarchivesentry/list",method:"post",data:i.a.stringify({parentid:e})})}(this.parentid).then(function(t){e.tableData=t.data,e.loading=!1}).catch(function(e){})},availableFormat:function(e){return e.available?"是":"否"},timeFormat:function(e){var t=e.operationtime,a=(t=new Date(t)).getFullYear(),r=t.getMonth()<10?"0"+t.getMonth():t.getMonth(),l=t.getDate()<10?"0"+t.getDate():t.getDate(),i=t.getHours()<10?"0"+t.getHours():t.getHours(),o=t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes(),n=t.getSeconds()<10?"0"+t.getSeconds():t.getSeconds();return[a,r+1,l].join("-")+" "+[i,o,n].join(":")}},watch:{parentid:{deep:!0,immediate:!0,handler:function(e){this.parentid=e,this.getList()}}},components:{add:b,edit:w.exports}},y=(a("TZi7"),Object(m.a)(_,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"layer-out"},[a("div",{directives:[{name:"show",rawName:"v-show",value:!e.showAddDialog&&!e.showEditDialog,expression:"!showAddDialog&&!showEditDialog"}],staticClass:"header-box"},[a("span",[a("el-button",{attrs:{type:"success",size:"mini"},on:{click:e.openAddDialog}},[e._v("新增详细信息")]),e._v(" "),a("el-button",{attrs:{type:"info",size:"mini"},on:{click:e.openEditDialog}},[e._v("编辑")]),e._v(" "),a("el-button",{attrs:{type:"info",size:"mini"}},[e._v("作废")])],1)]),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!e.showAddDialog&&!e.showEditDialog,expression:"!showAddDialog&&!showEditDialog"}],staticClass:"body-box"},[a("div",{staticStyle:{height:"20px",width:"100%"}}),e._v(" "),a("div",{staticClass:"data-box"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{height:"300","element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.8)",data:e.tableData,"tooltip-effect":"dark",border:!0},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{align:"center",type:"selection"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"id",label:"基础档案编号"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"name",label:"基础档案名称"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",formatter:e.availableFormat,label:"档案是否分级"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"systememp.empname",label:"操作人员"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"systemunits.name",label:"操作单位"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",formatter:e.timeFormat,label:"操作时间"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"remarks",label:"备注"}})],1),e._v(" "),a("div",{staticStyle:{height:"15px",width:"100%"}})],1)]),e._v(" "),a("add",{directives:[{name:"show",rawName:"v-show",value:e.showAddDialog,expression:"showAddDialog"}],attrs:{parentid:e.parentid},on:{addSuccess:e.addSuccess}}),e._v(" "),a("edit",{directives:[{name:"show",rawName:"v-show",value:e.showEditDialog,expression:"showEditDialog"}],ref:"edit",attrs:{rowData:e.rowData},on:{editSuccess:e.editSuccess}})],1)},[],!1,null,"0d0b8452",null));y.options.__file="entry.vue";var D={name:"index",data:function(){return{rowData:{},parentid:null,showAddDialog:!1,showEditDialog:!1,showEntryDialog:!1,showMore:!1,loading:!0,dialogWidth:"40%",formInline:{id:null,name:null,systememp:{empname:null},operationtime:""},tableData:[],allData:[],multipleSelection:[]}},methods:{addSuccess:function(){this.getList(),this.showAddDialog=!1},editSuccess:function(){this.toggleSelection(),this.getList(),this.showEditDialog=!1},openAddDialog:function(){this.$refs.adddialog&&this.$refs.adddialog.resetForm("ruleForm"),this.setDialogWidth(),this.showAddDialog=!0},openEditDialog:function(){this.multipleSelection.length<=0?this.$message.error("请选中一项修改"):(this.$refs.editdialog&&this.$refs.editdialog.resetForm("ruleForm"),this.setDialogWidth(),this.rowData=this.multipleSelection[0],this.showEditDialog=!0)},openEntryDialog:function(e){this.$refs.entrydialog&&(this.$refs.entrydialog.showAddDialog=!1),this.setDialogWidth(),this.parentid=e,this.showEntryDialog=!0},setDialogWidth:function(){var e=document.getElementById("app");e.offsetWidth<=400?this.dialogWidth="100%":e.offsetWidth>400&&e.offsetWidth<=600?this.dialogWidth="90%":e.offsetWidth>600&&e.offsetWidth<=900?this.dialogWidth="80%":e.offsetWidth>1300?this.dialogWidth="40%":this.dialogWidth="60%"},onSubmit:function(){var e=this;if(this.tableData=this.allData,this.formInline.id&&(this.tableData=this.tableData.filter(function(t){if(e.formInline.id==t.id)return t})),this.formInline.name&&(this.tableData=this.tableData.filter(function(t){return t.name.match(e.formInline.name)})),this.formInline.systememp.empname&&(this.tableData=this.tableData.filter(function(t){return t.systememp.empname.match(e.formInline.systememp.empname)})),this.formInline.operationtime){var t=this.timeFormat(this.formInline).split(" ")[0];this.tableData=this.tableData.filter(function(a){var r=e.timeFormat(a).split(" ")[0];if(t==r)return a})}},restForm:function(){this.formInline={id:null,name:null,systememp:{empname:null},operationtime:""}},handleSelectionChange:function(e){this.multipleSelection=e},gradeFormat:function(e){return e.grade?"是":"否"},timeFormat:function(e){var t=e.operationtime,a=(t=new Date(t)).getFullYear(),r=t.getMonth()<10?"0"+t.getMonth():t.getMonth(),l=t.getDate()<10?"0"+t.getDate():t.getDate(),i=t.getHours()<10?"0"+t.getHours():t.getHours(),o=t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes(),n=t.getSeconds()<10?"0"+t.getSeconds():t.getSeconds();return[a,r+1,l].join("-")+" "+[i,o,n].join(":")},toggleSelection:function(){this.$refs.multipleTable.clearSelection()},getList:function(){var e=this;Object(r.a)({contentType:"application/json",url:"/basicarchives/list",method:"post"}).then(function(t){e.loading=!0,e.allData=t.data,e.tableData=t.data,e.loading=!1}).catch(function(e){console.log(e)})}},created:function(){this.getList()},components:{add:c,edit:g,entry:y.exports}},S=(a("TrTw"),Object(m.a)(D,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"layer-out"},[e._m(0),e._v(" "),a("div",{staticClass:"body-box"},[a("div",{staticClass:"main-box"},[a("el-form",{ref:"formInline",staticClass:"demo-form-inline main-header",attrs:{inline:!0,model:e.formInline}},[a("el-form-item",{attrs:{label:"档案编号"}},[a("el-input",{attrs:{placeholder:"请输入档案编号"},model:{value:e.formInline.id,callback:function(t){e.$set(e.formInline,"id",t)},expression:"formInline.id"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"档案名称"}},[a("el-input",{attrs:{placeholder:"请输入档案名称"},model:{value:e.formInline.name,callback:function(t){e.$set(e.formInline,"name",t)},expression:"formInline.name"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"success",icon:"el-icon-search"},on:{click:e.onSubmit}},[e._v("查询")]),e._v(" "),a("el-button",{attrs:{type:"info",icon:"el-icon-refresh"},on:{click:e.restForm}},[e._v("重置")]),e._v(" "),a("el-button",{attrs:{type:"info",icon:"el-icon-more"},on:{click:function(t){e.showMore=!e.showMore}}},[e._v("更多")])],1)],1),e._v(" "),a("el-form",{directives:[{name:"show",rawName:"v-show",value:e.showMore,expression:"showMore"}],staticClass:"demo-form-inline main-header",attrs:{inline:!0,model:e.formInline}},[a("el-form-item",{attrs:{label:"操作人"}},[a("el-input",{attrs:{placeholder:"请输入操作人"},model:{value:e.formInline.systememp.empname,callback:function(t){e.$set(e.formInline.systememp,"empname",t)},expression:"formInline.systememp.empname"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"操作时间"}},[a("el-date-picker",{attrs:{type:"date",placeholder:"请输入操作时间"},model:{value:e.formInline.operationtime,callback:function(t){e.$set(e.formInline,"operationtime",t)},expression:"formInline.operationtime"}})],1)],1),e._v(" "),a("div",{staticClass:"main-operation"},[a("el-button",{attrs:{type:"success",size:"mini"},on:{click:e.openAddDialog}},[e._v("新增主信息")]),e._v(" "),a("el-button",{attrs:{type:"info",size:"mini"},on:{click:e.openEditDialog}},[e._v("编辑")])],1),e._v(" "),a("div",{staticClass:"main-data"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{"element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.8)",data:e.tableData,"tooltip-effect":"dark",border:!0},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{align:"center",type:"selection"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"序号",width:"50",type:"index"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"id",label:"基础档案编号"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"name",label:"基础档案名称"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",formatter:e.gradeFormat,label:"档案是否分级"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"systememp.empname",label:"操作人员"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"systemunits.name",label:"操作单位"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",formatter:e.timeFormat,label:"操作时间"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"remarks",label:"备注"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"success",size:"mini"},on:{click:function(a){e.openEntryDialog(t.row.id)}}},[e._v("查看列表")])]}}])})],1),e._v(" "),a("div",{staticClass:"data-foot-box"})],1)],1)]),e._v(" "),a("div",{staticClass:"foot-box"}),e._v(" "),a("el-dialog",{attrs:{title:"添加",visible:e.showAddDialog,"close-on-click-modal":!1,"before-close":e.addSuccess,width:e.dialogWidth},on:{"update:visible":function(t){e.showAddDialog=t}}},[a("add",{ref:"adddialog",on:{addSuccess:e.addSuccess}})],1),e._v(" "),a("el-dialog",{attrs:{title:"编辑",visible:e.showEditDialog,"close-on-click-modal":!1,"before-close":e.editSuccess,width:e.dialogWidth},on:{"update:visible":function(t){e.showEditDialog=t}}},[a("edit",{ref:"editdialog",attrs:{rowData:e.rowData},on:{editSuccess:e.editSuccess}})],1),e._v(" "),a("el-dialog",{attrs:{title:"列表",visible:e.showEntryDialog,"close-on-click-modal":!1,width:e.dialogWidth},on:{"update:visible":function(t){e.showEntryDialog=t}}},[a("entry",{ref:"entrydialog",attrs:{parentid:e.parentid}})],1)],1)},[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"header-box"},[t("span",[this._v("基础档案")])])}],!1,null,"5c281056",null));S.options.__file="index.vue";t.default=S.exports},TZi7:function(e,t,a){"use strict";var r=a("k03F");a.n(r).a},TrTw:function(e,t,a){"use strict";var r=a("Xg2l");a.n(r).a},WWT6:function(e,t,a){"use strict";var r=a("dX5F");a.n(r).a},Xg2l:function(e,t,a){},ad73:function(e,t,a){},dX5F:function(e,t,a){},"iV/S":function(e,t,a){"use strict";var r=a("nlDk");a.n(r).a},k03F:function(e,t,a){},nlDk:function(e,t,a){},qtPL:function(e,t,a){"use strict";var r=a("ad73");a.n(r).a},rTSP:function(e,t,a){"use strict";var r=a("0Rxn");a.n(r).a}}]);