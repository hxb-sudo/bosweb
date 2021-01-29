<template>
  <div class="layer-out">
    <div class="header-box" v-show="!showAddDialog&&!showEditDialog">
        <span>
          <el-button type="success" size="mini" @click="openAddDialog">新增详细信息</el-button>
          <el-button type="info" size="mini" @click="openEditDialog">编辑</el-button>
          <el-button type="info" size="mini" >作废</el-button>
        </span>
    </div>
    <div class="body-box" v-show="!showAddDialog&&!showEditDialog">
      <div style="height: 20px;width: 100%;"></div>
      <div class="data-box">
        <el-table
          v-loading="loading"
          height="300"
          element-loading-text="拼命加载中"
          element-loading-spinner="el-icon-loading"
          element-loading-background="rgba(0, 0, 0, 0.8)"
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
          style="width: 100%"
          :border="true"
          @selection-change="handleSelectionChange">
          <el-table-column
            align="center"
            type="selection">
          </el-table-column>

          <!--<el-table-column
            align="center"
            label="序号"
            width="50"
            type="index">
          </el-table-column>-->

          <el-table-column
            align="center"
            prop="id"
            label="基础档案编号">
          </el-table-column>

          <el-table-column
            align="center"
            prop="name"
            label="基础档案名称">
          </el-table-column>

          <el-table-column
            align="center"
            :formatter="availableFormat"
            label="档案是否分级">
          </el-table-column>

          <el-table-column
            align="center"
            prop="systememp.empname"
            label="操作人员">
          </el-table-column>

          <el-table-column
            align="center"
            prop="systemunits.name"
            label="操作单位">
          </el-table-column>

          <el-table-column
            align="center"
            :formatter="timeFormat"
            label="操作时间">
          </el-table-column>

          <el-table-column
            align="center"
            prop="remarks"
            label="备注">
          </el-table-column>

        </el-table>
        <div style="height: 15px;width: 100%;"></div>
      </div>
    </div>

    <add v-show="showAddDialog" @addSuccess="addSuccess" :parentid="parentid"></add>
    <edit v-show="showEditDialog" ref="edit" :rowData="rowData" @editSuccess="editSuccess"></edit>

  </div>
</template>

<script>
  import { list } from '../../../api/BasicArchivesEntryAPI'
  import add from './children/entryAdd'
  import edit from './children/entryEdit'

  export default {
    name: "entry",
    props: ['parentid'],
    data(){
      return{
        rowData: {},
        loading: false,
        tableData: [],
        multipleSelection: [],
        showAddDialog: false,
        showEditDialog: false,
      }
    },
    methods: {
      addSuccess() {
        this.getList()
        this.showAddDialog = false
      },
      editSuccess() {
        this.getList()
        this.showEditDialog = false
      },
      openAddDialog() {
        this.showAddDialog = true
      },
      openEditDialog() {
        if (this.multipleSelection.length <= 0) {
          this.$message.error('请选中一项修改');
          return
        }
        if (this.$refs.edit) this.$refs.edit.resetForm('ruleForm')
        this.rowData = this.multipleSelection[0]
        this.showEditDialog = true
      },
      // 选中行
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      // 消除选中
      toggleSelection() {
        this.$refs.multipleTable.clearSelection();
      },
      getList(){
        this.loading = true
        list(this.parentid).then(request => {
          this.tableData = request.data
          this.loading = false
        }).catch(error => {

        })
      },
      availableFormat(row){
        let available = row.available
        if (available) return '是'
        else return '否'
      },
      // 时间格式化
      timeFormat(row){
        let date = row.operationtime
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
    watch: {
      parentid: {
        deep: true,
        immediate: true,
        handler(value) {
          this.parentid  = value
          this.getList()
        }
      }
    },
    components: {
      add,edit
    }
  }
</script>

<style scoped>
  .layer-out {

  }
  .header-box {
    width: 100%;
    height: 40px;
    background-color: #e3e3e3;
    border: 1px #cacaca solid;
  }
  .header-box span {
    line-height: 40px;
    margin-left: 15px;
  }
  .body-box {
    width: 100%;
    margin-top: 2px;
    background-color: #e3e3e3;
    border: 1px #cacaca solid;
  }
</style>
