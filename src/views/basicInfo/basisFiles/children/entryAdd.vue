<template>
  <div align="center">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-form-inline" size="small" label-width="auto" label-position="left">

      <el-row :gutter="5">
        <el-col :span="12">
          <el-form-item label="档案名称" prop="name">
            <el-input v-model="ruleForm.name" placeholder="档案名称" style="width: 55%;"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="上级编码" prop="parentid">
            <el-input disabled v-model="ruleForm.parentid" placeholder="上级编码" style="width: 55%;"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <!--<el-form-item label="是否分级" prop="grade">
        <el-radio-group v-model="ruleForm.grade"  style="width: 55%;">
          <el-radio :label="0" :value="ruleForm.grade">否</el-radio>
          <el-radio :label="1" :value="ruleForm.grade">是</el-radio>
        </el-radio-group>
      </el-form-item>-->

      <el-row :gutter="5">
        <el-col :span="12">
          <el-form-item label="封存标志" prop="available">
            <el-radio-group v-model="ruleForm.available"  style="width: 55%;">
              <el-radio :label="0" :value="ruleForm.available">否</el-radio>
              <el-radio :label="1" :value="ruleForm.available">是</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="操作人员" prop="empname">
            <el-input disabled v-model="ruleForm.empname" placeholder="操作人员" style="width: 55%;"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row :gutter="5">
        <el-col :span="12">
          <el-form-item label="操作单位" prop="units">
            <el-input disabled v-model="ruleForm.units" placeholder="操作单位" style="width: 55%;"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="操作日期" prop="operationtime">
            <el-date-picker
              disabled
              v-model="ruleForm.operationtime"
              type="datetime"
              style="width: 55%;">
            </el-date-picker>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row :gutter="5">
        <el-col :span="24">
          <el-form-item label="备注" prop="remarks">
            <el-input type="textarea" v-model="ruleForm.remarks" style="width: 47%;"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">返回</el-button>
      </el-form-item>


    </el-form>
  </div>
</template>

<script>
  import cookie from 'js-cookie'
  import { add } from '../../../../api/BasicArchivesEntryAPI'
  export default {
    props: ['parentid'],
    name: "entryAdd",
    data() {
      return {
        ruleForm: {
          parentid: null,
          name: null,
          empname: null,
          available: null,
          operationtime: new Date(),
          units: null,
          remarks: null,
        },
        rules: {
          name: [{required: true, message: '输入收派标准名称', trigger: 'blur'}],
          available: [{required: true, message: '请选择是否封存', trigger: 'blur', },],
        },
      }
    },
    methods: {
      submitForm(ruleForm){
        this.$refs[ruleForm].validate((valid) => {
          if (valid) {
            let user = JSON.parse(cookie.get('user'))
            this.ruleForm.operatorid = user.id
            this.ruleForm.operationunitid = user.systemunits.id
            this.ruleForm.operationtime = this.timeFormat(this.ruleForm.operationtime)
            add(this.ruleForm).then(request => {
              if (request) {
                this.$notify({
                  title: '成功',
                  message: '添加基础档案条目成功',
                  type: 'success'
                });
                this.resetForm(ruleForm)
              }
            }).catch(error => {

            })
            console.log(this.ruleForm)
          } else {
            return false;
          }
        });
      },
      resetForm(ruleForm){
        this.$refs[ruleForm].resetFields();
        this.$emit('addSuccess')
      },
      timeFormat(date){
        date = new Date(date)
        let year = date.getFullYear()
        let month = date.getMonth() < 10 ? '0' + date.getMonth() : date.getMonth()
        let day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
        let hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
        let minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
        let seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
        return [year, month + 1, day].join('-') + ' ' + [hours, minutes, seconds].join(':')
      },
    },
    created() {
      let user = JSON.parse(cookie.get('user'))
      this.ruleForm.empname = user.empname
      this.ruleForm.units = user.systemunits.name
    },
    watch: {
      parentid: {
        deep: true,
        immediate: true,
        handler(value) {
          this.ruleForm.parentid = value
        }
      }
    },
  }
</script>

<style scoped>
  .el-radio+.el-radio{
    margin-left: 10px;
  }
  .el-radio__label {
    font-size: 14px;
    padding-left: 0;
  }
</style>
