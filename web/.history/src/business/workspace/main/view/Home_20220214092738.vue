<template>
  <div class="row">
    <div class="left">
      <draggable :list="list1" group="people" @change="log" itemKey="name">
        <template #item="{ element, index }">
          <hello v-if="element.id === 1">
            {{ element.name }} - {{ index }}
          </hello>
          <iterative-statistic v-else-if="element.id === 2">
            {{ element.name }} - {{ index }}
          </iterative-statistic>
          <div v-else>{{ element.name }} - {{ index }}</div>
        </template>
      </draggable>
    </div>

    <div class="right">
      <draggable :list="list2" group="people" @change="log" itemKey="name">
        <template #item="{ element, index }">
           <hello v-if="element.id === 1">
            {{ element.name }} - {{ index }}
          </hello>
          <iterative-statistic v-else-if="element.id === 2">
            {{ element.name }} - {{ index }}
          </iterative-statistic>
          <div v-else>{{ element.name }} - {{ index }}</div>
        </template>
      </draggable>
    </div>
    <el-button type="" @sendToF="sout"></el-button>
  </div>
</template>
<script lang='ts' setup>
import draggable from "vuedraggable";
import { ref } from "vue";
import Hello from "@/business/workspace/main/view/hello.vue";
import IterativeStatistic from "@/business/workspace/main/view/IterativeStatistic.vue";

const list1 = ref([
  { name: "hello", id: 1 },
  { name: "iterative-statistic", id: 2 },
  { name: "product-statistic", id: 3 },
  { name: "flow-chart", id: 4 },
]);

const list2 = ref([
  { name: "latest-developments", id: 5 },
  { name: "my-to-do-list", id: 6 },
  { name: "iteration-overview", id: 7 },
  { name: "iteration-overview", id: 7 },
]);
</script>
<style lang='scss' scoped>
.row {
  height: 100%;
  width: 100%;
  .left {
    float: left;
    height: 100%;
    width: 66%;
    min-width: 768px;

    background: lemonchiffon;
  }
  .right {
    float: left;
    height: 100%;
    width: 33%;

    background: lightcoral;
  }
}
</style>
