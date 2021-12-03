<template>
  <el-container class="content">
    <el-header class="header">
      <top-header />
    </el-header>
    <el-main class="main">
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script lang='ts' setup>
import TopHeader from "@/base/frame/app/header/vue/TopHeader.vue";
</script>
<style  lang="scss" scoped>
.content {
  height: 100%;
  width: 100%;
  .header {
    height: 55px;
    padding: 0;
    min-width: 1200px;
  }
  .main{
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
  }
}
</style>