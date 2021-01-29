<template>
  <div class="layer-out">
    <div class="header-box">
      <span>基础档案</span>
    </div>

    <div class="body-box">
      <!-- 正文 -->
      <div class="main-box">
        <el-form :inline="true" :model="formInline" ref="formInline" class="demo-form-inline main-header">
          <el-form-item label="档案编号">
            <el-input v-model="formInline.id" placeholder="请输入档案编号"></el-input>
          </el-form-item>
          <el-form-item label="档案名称">
            <el-input v-model="formInline.name" placeholder="请输入档案名称"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="success" icon="el-icon-search" @click="onSubmit">查询</el-button>
            <el-button type="info" icon="el-icon-refresh" @click="restForm">重置</el-button>
            <el-button type="info" icon="el-icon-more" @click="showMore=!showMore">更多</el-button>
          </el-form-item>
        </el-form>

        <el-form v-show="showMore" :inline="true" :model="formInline" class="demo-form-inline main-header">
          <el-form-item label="操作人">
            <el-input v-model="formInline.systememp.empname" placeholder="请输入操作人"></el-input>
          </el-form-item>
          <el-form-item label="操作时间">
            <el-date-picker
              v-model="formInline.operationtime"
              type="date"
              placeholder="请输入操作时间">
            </el-date-picker>
          </el-form-item>
        </el-form>

        <div class="main-operation">
          <el-button type="success" size="mini" @click="openAddDialog">新增主信息</el-button>
          <el-button type="info" size="mini" @click="openEditDialog">编辑</el-button>
          <!--<el-button type="info" size="mini" @click="InvalidClick">作废</el-button>-->
        </div>

        <div class="main-data">
          <el-table
            v-loading="loading"
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

            <el-table-column
              align="center"
              label="序号"
              width="50"
              type="index">
            </el-table-column>

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
              :formatter="gradeFormat"
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

            <el-table-column
              align="center"
              label="操作">
              <template slot-scope="scope">
                <el-button type="success" size="mini" @click="openEntryDialog(scope.row.id)">查看列表</el-button>
              </template>
            </el-table-column>

          </el-table>
          <div class="data-foot-box"></div>
        </div>

      </div>
    </div>
    <div class="foot-box"></div>


    <el-dialog title="添加" :visible.sync="showAddDialog" :close-on-click-modal="false" :before-close="addSuccess" :width="dialogWidth">
      <add ref="adddialog" @addSuccess="addSuccess"></add>
    </el-dialog>

    <el-dialog title="编辑" :visible.sync="showEditDialog" :close-on-click-modal="false" :before-close="editSuccess" :width="dialogWidth">
      <edit ref="editdialog" @editSuccess="editSuccess" :rowData="rowData"></edit>
    </el-dialog>

    <el-dialog title="列表" :visible.sync="showEntryDialog" :close-on-click-modal="false" :width="dialogWidth">
      <entry ref="entrydialog" :parentid="parentid"></entry>
    </el-dialog>

  </div>
</template>

<script>
  import { list } from "../../../api/BasicArchivesAPI";
  import add from "./children/add";
  import edit from "./children/edit";
  import entry from "./entry";

  export default {
    name: "index",
    data() {
      return {
        rowData: {},
        parentid: null,
        showAddDialog: false,
        showEditDialog: false,
        showEntryDialog: false,
        showMore: false,
        loading: true,
        dialogWidth: '40%',
        formInline: {
          id: null,
          name: null,
          systememp: {
            empname: null,
          },
          operationtime: '',
        },
        tableData: [],
        allData: [],
        multipleSelection: []
      }
    },
    methods: {
      addSuccess() {
        this.getList()
        this.showAddDialog = false
      },
      editSuccess() {
        this.toggleSelection()
        this.getList()
        this.showEditDialog = false
      },
      openAddDialog() {
        if (this.$refs.adddialog) this.$refs.adddialog.resetForm('ruleForm')
        this.setDialogWidth()
        this.showAddDialog = true
      },
      openEditDialog() {
        if (this.multipleSelection.length <= 0) {
          this.$message.error('请选中一项修改');
          return
        }
        if (this.$refs.editdialog) this.$refs.editdialog.resetForm('ruleForm')
        this.setDialogWidth()
        this.rowData = this.multipleSelection[0]
        this.showEditDialog = true
      },
      openEntryDialog(id){
        if (this.$refs.entrydialog) this.$refs.entrydialog.showAddDialog = false
        this.setDialogWidth()
        this.parentid = id
        this.showEntryDialog = true
      },
      setDialogWidth() {
        let body = document.getElementById('app')
        if (body.offsetWidth <= 400) {
          this.dialogWidth = '100%'
        }else if (body.offsetWidth > 400 && body.offsetWidth <= 600) {
          this.dialogWidth = '90%'
        }else if (body.offsetWidth > 600 && body.offsetWidth <= 900) {
          this.dialogWidth = '80%'
        }else if (body.offsetWidth > 1300) {
          this.dialogWidth = '40%'
        }else{
          this.dialogWidth = '60%'
        }
      },
      // 查询
      onSubmit() {
        this.tableData = this.allData

        if (this.formInline.id) {
          this.tableData = this.tableData.filter((value) => {
            if (this.formInline.id == value.id) {
              return value
            }
          })
        }

        if (this.formInline.name) {
          this.tableData = this.tableData.filter((value) => {
            return value.name.match(this.formInline.name)
          })
        }

        if (this.formInline.systememp.empname) {
          this.tableData = this.tableData.filter((value) => {
            return value.systememp.empname.match(this.formInline.systememp.empname)
          })
        }
        if (this.formInline.operationtime) {
          let date = this.timeFormat(this.formInline).split(' ')[0]

          this.tableData = this.tableData.filter((value) => {
            let date1 = this.timeFormat(value).split(' ')[0]
            if (date == date1) {
              return value
            }
          })
        }
      },
      // 初始查询表单
      restForm(){
        this.formInline = {
          id: null,
          name: null,
          systememp: {
            empname: null,
          },
          operationtime: '',
        }
      },
      // 选中行
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      // 作废标志格式化
      gradeFormat(row) {
        if (row.grade) return '是'
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
      // 消除选中
      toggleSelection() {
        this.$refs.multipleTable.clearSelection();
      },
      getList(){
        list().then(request => {
          this.loading = true
          this.allData = request.data
          this.tableData = request.data
          this.loading = false
        }).catch(error => {
          console.log(error)
        })
      },
    },
    created() {
      this.getList()
    },
    components: {
      add,edit,entry
    }
  }
</script>

<style scoped>
  .layer-out {
    width: 98%;
    margin: 0 auto;
  }
  .header-box {
    margin-top: 15px;
    height: 40px;
    width: 100%;
    background-color: #e3e3e3;
    border: 1px #cacaca solid;
  }
  .header-box span {
    color: #171e24;
    font-family: Microsoft Yahei;
    font-size: 12px;
    line-height: 40px;
    margin-left: 14px;
  }
  .body-box {
    /*height: calc(100vh - 50px - 40px - 30px);*/
    border: 1px #cacaca solid;
    margin-top: -1px;
    background-color: #f1f1f1;
  }
  .main-box {
    margin-top: 10px;
  }
  .main-header {
    margin-left: 35px;
  }
  .main-operation {
    margin-left: 15px;
  }
  .main-data {
    margin: 10px auto;
  }
  .foot-box {
    width: 100%;
    height: 40px;
  }
</style>
