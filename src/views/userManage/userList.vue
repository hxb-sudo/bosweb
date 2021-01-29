<template>
  <div>

    <h1>用户列表</h1>
    <div style="text-indent: 30px">

      <el-button type="primary" plain @click="openFileSelect">激活会员卡</el-button>
      <input type="file" ref="file" accept="image/*" id="file" @input="sendCardIDImage($event)" v-show="false">

    </div>
    <br>
    <div align="center">
      <el-table
        :data="tableData"
        stripe
        style="width: 95%">
        <el-table-column
          align="center"
          prop="phone"
          label="身份证">
        </el-table-column>
        <el-table-column
          align="center"
          prop="password"
          label="密码">
        </el-table-column>
        <el-table-column
          align="center"
          prop="balance"
          label="余额">
        </el-table-column>
        <el-table-column
          align="center"
          prop="level"
          :formatter="levelFormatter"
          label="会员等级">
        </el-table-column>
        <el-table-column
          align="center"
          prop="activate"
          :formatter="activateFormatter"
          label="状态">
        </el-table-column>
        <el-table-column
          align="center"
          prop="createtime"
          label="创建时间">
        </el-table-column>
        <el-table-column
          align="center"
          label="操作">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
            <el-button v-if="!scope.row.activate" type="text" size="small" @click="activateVIP(scope.row)">激活会员</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

  </div>
</template>

<script>

  import {getUserList,activateVIP,activateVIPByImage} from '../../api/userAPI'

  export default {
    name: 'userList',
    data(){
      return{
        tableData: [],
        imageFile: null,
      }
    },
    methods: {
      /*获取除管理员外的所有账号*/
      getUserList(){
        getUserList().then(request=>{
          this.tableData = request.data
        }).catch(desc=>{
          console.log(desc)
        })
      },
      /*会员等级格式化*/
      levelFormatter(row){
        let level = row.level
        if (level==1){
          return '青铜会员'
        }else if (level == 2){
          return '白银会员'
        }else if (level == 3){
          return '黄金会员'
        }else if (level == 4){
          return '铂金会员'
        }else if (level == 5){
          return '钻石会员'
        }else if (level == 6){
          return '王者会员'
        }else{
          return '至尊会员'
        }
      },
      /*状态格式化*/
      activateFormatter(row){
        let activate = row.activate
        if (activate) return '已激活'
        else return '未激活'
      },
      /*查看详情信息*/
      handleClick(row){

      },
      /*激活会员*/
      activateVIP(row){
        let phone = row.phone
        activateVIP(phone).then(data=>{
          this.$notify.success({
            title: "提示",
            message: data.data
          })
          this.getUserList()
        }).catch(()=>{

        })
      },
      openFileSelect(){
        this.$refs.file.click()
      },
      sendCardIDImage(event){
        this.imageFile = event.target.files[0]
        if (this.imageFile.size > 1024*1024) return

        activateVIPByImage(this.imageFile).
          then(request => {
            console.log(request)
        }).catch( desc=> {
          console.log(desc)
        })
      }
    },
    created() {
      this.getUserList()
    }
  }
</script>

<style scoped>

</style>
