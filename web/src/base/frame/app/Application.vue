<template>
  <el-container class="content">
    <el-header> <Header></Header> </el-header>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script lang='ts' setup>
import Header from "@/base/frame/app/header/Header.vue";
</script>
<style scoped>
.content {
  height: 100%;
  width: 100%;
}
</style>