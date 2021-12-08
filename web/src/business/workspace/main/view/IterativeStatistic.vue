<template>
  <el-card class="box-card" :body-style="{ padding: '0px' }" shadow="never">
    <el-icon class="icon" color="#a6aab8" size="20"><more-filled /></el-icon>
    <div class="header">
      <h4>迭代统计</h4>
    </div>
    <el-row class="row">
      <el-col :span="8" class="left">
        <el-scrollbar max-height="200px" noresize="true">
          <div v-for="item in iterList" :key="item" class="item">
            {{ item.name }}
          </div>
        </el-scrollbar>
      </el-col>
      <el-col :span="16" class="right"> </el-col>
    </el-row>
  </el-card>
</template>
<script lang="ts" setup>
import { MoreFilled } from "@element-plus/icons";

const iterList = [
  { id: 1, name: "迭代" },
  { id: 2, name: "迭代" },
  { id: 3, name: "迭代" },
  { id: 4, name: "迭代" },
  { id: 5, name: "迭代" },
  { id: 6, name: "迭代" },
  { id: 7, name: "迭代" },
  { id: 8, name: "迭代" },
  { id: 9, name: "迭代" },
];
</script>
<style lang="scss" scoped>
.box-card {
  height: 285px;
  border-radius: 4px;
  margin-bottom: 20px;
  position: relative;

  .icon {
    padding: 5px;
    border-radius: 4px;
    position: absolute;
    right: 5px;
    margin-top: 10px;
  }
  .icon:hover {
    background: #f1f1f1;
  }
  .header {
    width: 100%;
    h4 {
      font-size: 14px;
      padding: 12px 75px 12px 20px;
    }
  }
  .row {
    height: 240px;
    padding: 0 20px 20px 20px;
    .left {
      border-right: 1px solid #ebf2fb;
      font-size: 14px;
      .item {
        padding: 8px 36px 8px 20px;
      }
      .item:hover {
          background: #f1f1f1;
      }
    }
  }
}
</style>
