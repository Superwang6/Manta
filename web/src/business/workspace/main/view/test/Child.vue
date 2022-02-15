<template>
    <el-header>
        hello: <input type="text" v-model="hello">
        <el-button type="primary" @click="send">111</el-button>
    </el-header>
    <el-main>
        body is {{props.body}}
    </el-main>
</template>
<script setup lang='ts'>
import {defineProps,ref,defineEmits} from 'vue'

const props = defineProps({body:String});

const hello = ref('hello');
const emits = defineEmits(['sendToF']);
const send = () => {
emits('sendToF',hello.value);
}
</script>
