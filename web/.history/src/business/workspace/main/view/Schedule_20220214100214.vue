<template>
    <div>父组件的值:< type="text" v-model="body"></div>
    
    <child @body='body'></child>
</template>
<script setup lang='ts'>
import {ref} from 'vue'
import Child from '@/business/workspace/main/view/test/Child.vue'

const data = ref('1111');
const body = ref('body');
</script>