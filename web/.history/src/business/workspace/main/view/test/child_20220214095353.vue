<template>
    <el-header>
        hello
    </el-header>
    <el-main>
        body is {{props.body}}
    </el-main>
</template>
<script setup lang='ts'>
import {defineProps} from 'vue'

const props = defineProps(['body']);

</script>
