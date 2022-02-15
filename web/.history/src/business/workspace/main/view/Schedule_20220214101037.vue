<template>
    <div>父组件的值:<input type="text" v-model="body"></div>
    <br> <br>
    <child :body='body' @sendToF=''></child>
</template>
<script setup lang='ts'>
import {ref} from 'vue'
import Child from '@/business/workspace/main/view/test/Child.vue'

const data = ref('1111');
const body = ref('body');

const sout = (str: string) => {
    console.log(str)
}
</script>