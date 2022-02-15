<template>
    <div>父组件的值:{{data}}</div>
    
    <child></child>
</template>
<script setup lang='ts'>
import {ref} from 'vue'
import Child from '@/business/workspace/main/view/test/Child.vue'

const data = ref('1111');
const body = ref('body');
</script>