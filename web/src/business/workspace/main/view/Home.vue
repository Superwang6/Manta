<template>
  <div class="row">
    <div class="left">
      <draggable
        :list="list1"
        group="people"
        @change="log"
        itemKey="name"
      >
        <template #item="{ element, index }">
          <div>{{ element.name }} {{ index }}</div>
        </template>
      </draggable>
    </div>

    <div class="right">
      <draggable
        :list="list2"
        group="people"
        @change="log"
        itemKey="name"
      >
        <template #item="{ element, index }">
          <div>{{ element.name }} {{ index }}</div>
        </template>
      </draggable>
    </div>
  </div>
</template>
<script lang='ts' setup>
import draggable from "vuedraggable";
import { ref } from "vue";
import Item from '@/business/workspace/main/view/Item.vue'

const list1 = ref([
  { name: "John", id: 1 },
  { name: "Joao", id: 2 },
  { name: "Jean", id: 3 },
  { name: "Gerard", id: 4 },
]);

const list2 = ref([
  { name: "Juan", id: 5 },
  { name: "Edgard", id: 6 },
  { name: "Johnson", id: 7 },
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
