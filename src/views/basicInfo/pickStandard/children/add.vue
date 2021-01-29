<template>
  <div align="center">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-form-inline" size="small" label-width="auto" label-position="left">

      <el-row :gutter="5">
        <el-col :span="12">
          <el-form-item label="标准名称" prop="name">
            <el-input v-model="ruleForm.name" placeholder="收派标准名称" style="width: 55%;"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="作废标志" prop="invalidatemark">
            <el-radio-group v-model="ruleForm.invalidatemark"  style="width: 55%;">
              <el-radio :label="0" :value="ruleForm.invalidatemark">是</el-radio>
              <el-radio :label="1" :value="ruleForm.invalidatemark">否</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row :gutter="5">
        <el-col :span="12">
          <el-form-item label="最小重量" prop="minweight">
            <el-input v-model="ruleForm.minweight" placeholder="最小重量" style="width: 55%;"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="最大重量" prop="maxweight">
            <el-input v-model="ruleForm.maxweight" placeholder="最大重量" style="width: 55%;"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row :gutter="5">
        <el-col :span="12">
          <el-form-item label="操作人员" prop="empname">
            <el-input disabled v-model="ruleForm.empname" placeholder="操作人员" style="width: 55%;"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="操作单位" prop="units">
            <el-input disabled v-model="ruleForm.units" placeholder="操作单位" style="width: 55%;"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row :gutter="5">
        <el-col :span="24">
          <el-form-item label="操作日期" prop="operationtime">
            <el-date-picker
              disabled
              v-model="ruleForm.operationtime"
              type="datetime"
              style="width: 47%;">
            </el-date-picker>
          </el-form-item>
        </el-col>
      </el-row>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>


    </el-form>
  </div>
</template>

<script>
  import cookie from 'js-cookie'
  import { add } from '../../../../api/DeliveryStandardAPI'
  export default {
    name: "add",
    data() {
      const checkNum = (rule, value, callback)=> {
        const reg = /^\d{1,3}$/
        if (reg.test(value)) {
          return callback()
        }
        callback(new Error('输入不合法'))
      };
      return {
        ruleForm: {
          name: null,
          empname: null,
          invalidatemark: null,
          operationtime: new Date(),
          units: null,
          maxweight: null,
          minweight: null,
        },
        rules: {
          name: [{required: true, message: '输入收派标准名称', trigger: 'blur'}],
          maxweight: [{required: true, message: '正确输入最大重量', trigger: 'blur', },{validator: checkNum,trigger: 'blur'}],
          minweight: [{required: true, message: '正确输入最小重量', trigger: 'blur', },{validator: checkNum,trigger: 'blur'}],
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
                  message: '添加收派标准成功',
                  type: 'success'
                });
                this.resetForm(ruleForm)
                this.$emit('addSuccess')
              }
            }).catch(error => {

            })
          } else {
            return false;
          }
        });
      },
      resetForm(ruleForm){
        this.$refs[ruleForm].resetFields();
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
