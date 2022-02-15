<template>
  <el-container class="content">
    <el-header class="flood-header"><flood-header /></el-header>
    <el-main class="main">
        <router-view></router-view>
    </el-main>
    
  </el-container>
</template>
<script lang='ts' setup>
import FloodHeader from "@/base/frame/app/header/vue/FloodHeader.vue";


</script>
<style lang='scss' scoped>
.content {
  height: 100%;
  width: 100%;
  .flood-header{
    height: 45px;
  }
  .main {
    padding: 20px 40px;
    background: #efefef;
  }
}
</style>