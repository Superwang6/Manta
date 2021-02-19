<template>
  <div id="head-container">
    <el-breadcrumb separator-class="el-icon-arrow-right" class="midd">
      <el-breadcrumb-item :to="{ path: '/main' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item v-for="(item,index) in $route.meta" :key="index">{{item}}</el-breadcrumb-item>
    </el-breadcrumb>

    <el-badge :value="dowlCnt" class="item download">
      <i class="el-icon-download"></i>
    </el-badge>

    <el-badge :value="messageCnt" class="item message">
      <i class="el-icon-message-solid"></i>
    </el-badge>

    <el-dropdown trigger="click">
      <span class="el-dropdown-link info">
        <el-avatar :size="36" :src="circleUrl"></el-avatar>
        <span>name</span>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>注销</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
    export default {
      data() {
        return {
          circleUrl:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1819216937,2118754409&fm=26&gp=0.jpg',
          dowlCnt: 20,
          messageCnt: 30
        }
      }
    }
</script>

<style scoped>
  #head-container {
    padding: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .download {
    position: absolute;
    right: 200px;
  }

  .message {
    position: absolute;
    right: 150px;
  }

  .info {
    display: flex;
    align-items: center;
    text-align: center;
  }
</style>
