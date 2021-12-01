<template>
  <el-container class="content">
    <el-header class="header">
      <TopHeader />
      <FloodHeader />
    </el-header>
    <el-main class="main">Main</el-main>
  </el-container>
</template>

<script lang='ts' setup>
import TopHeader from "@/base/frame/app/header/TopHeader.vue";
import FloodHeader from "@/base/frame/app/header/FloodHeader.vue";
</script>
<style  lang="scss" scoped>
.content {
  height: 100%;
  width: 100%;
  .header {
    height: 100px;
    padding: 0;
    min-width: 1200px;
  }
  .main{
    background: #efefef;
  }
}
</style>