<template>
  <div class="flood-header">
    <workspace-nav></workspace-nav>
  </div>
</template>
<script lang="ts" setup>
import WorkspaceNav from "@/business/workspace/WorkspaceNav.vue"
</script>
<style lang="scss" scoped>
.flood-header {
  background: #ffffff;
  height: 45%;
  width: 100%;
  text-align: center;
  margin: 0 auto;
  font-size: 14px;
}
</style>