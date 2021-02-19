<template>
  <div class="container">
    <div class="operation">
      <el-button type="danger" icon="el-icon-plus" size="mini">新增</el-button>
      <el-button type="danger" size="mini">导入</el-button>
      <el-button type="danger" size="mini">查询</el-button>
    </div>
    <div class="screen">
      <el-form ref="form" :model="form" label-width="80px">
        <el-row>
          <el-col :span="4">
            <el-form-item label="商品编号">
              <el-input v-model="input" placeholder="请输入内容" size="mini"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="4" :offset="4">
            <el-form-item label="商品名称">
              <el-input v-model="input" placeholder="请输入内容" size="mini"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="4" :offset="4">
            <el-form-item label="条形码">
              <el-input v-model="input" placeholder="请输入内容" size="mini"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <div class="content">
      <el-table
        :data="tableData"
        height="700px"
        border
        style="width: 100%">
        <el-table-column
          prop="order"
          label="排序号"
          width="180">
        </el-table-column>
        <el-table-column
          prop="code"
          label="编号"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="名称">
        </el-table-column>
        <el-table-column
          prop="type"
          label="类型">
        </el-table-column>
        <el-table-column
          prop="brand"
          label="品牌">
        </el-table-column>
        <el-table-column
          prop="spec"
          label="规格">
        </el-table-column>
        <el-table-column
          prop="pic"
          label="商品图片">
        </el-table-column>
        <el-table-column
          prop="unit"
          label="单位">
        </el-table-column>
        <el-table-column
          prop="price"
          label="单价">
        </el-table-column>
        <el-table-column
          prop="barcode"
          label="条形码">
        </el-table-column>
        <el-table-column
          prop="saleType"
          label="状态">
        </el-table-column>
        <el-table-column
          prop="remark"
          label="备注">
        </el-table-column>
        <el-table-column
          label="操作">
        </el-table-column>
      </el-table>
    </div>
    <div class="foot">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: ""
      }
    },
    mounted() {
      this.queryGoodsList();
    },
    methods: {
      queryGoodsList() {
        this.axios.get("http://localhost:8080/static/goods.json").then(response => {
          if(response.status == 200) {
            if(response.data.actionResult == 0) {
              this.tableData = response.data.goodsList;
            } else {
              alert("获取商品失败！！");
            }
          } else {
            alert("获取商品失败！！");
          }
        })
      }
    }
  }
</script>

<style scoped>
  .screen {
    margin: 10px 0;
    border: 1px #DDDDDD solid;
  }

  .content {
  }

  .el-form-item {
    margin-bottom: 0;
  }

  .foot {
    margin-top: 10px;
    float: right;
  }
</style>
