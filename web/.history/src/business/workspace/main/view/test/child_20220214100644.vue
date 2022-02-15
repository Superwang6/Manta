<template>
    <el-header>
        hello: <input type="text" v-model="hello">
    </el-header>
    <el-main>
        body is {{props.body}}
    </el-main>
</template>
<script setup lang='ts'>
import {defineProps,ref,defineEmits} from 'vue'

const props = defineProps({body:String});

const hello = ref('hello');
const emit = defineEmits(['sendToF']);
</script>
