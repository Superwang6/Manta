<template>
    <el-header>
        hello: <input type="text" v-model="">
    </el-header>
    <el-main>
        body is {{props.body}}
    </el-main>
</template>
<script setup lang='ts'>
import {defineProps,ref} from 'vue'

const props = defineProps({body:String});

const hello = ref('hello');
</script>
