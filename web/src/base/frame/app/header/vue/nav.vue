<template>
  <div class="nav">
    <ul class="list">
      <template v-for="(item, index) in itemList" :key="index">
        <li @click="changeIsActive(index)">
          <router-link
            v-if="item.url != undefined"
            :class="item.styleClass"
            :to="item.url"
          >
            {{ item.name }}
          </router-link>
          <span :class="item.styleClass" v-else>{{ item.name }}</span>
        </li>
      </template>
    </ul>
  </div>
</template>
<script lang="ts" setup>
import { ref, reactive } from "vue";
import Item from "@/base/frame/app/header/ts/Item";

const itemList: Array<Item> = reactive([
  { name: "我的地盘", url: "/main", styleClass: "item" },
  { name: "产品", url: "/product", styleClass: "item" },
  { name: "迭代", url: "/workspace", styleClass: "item" },
  { name: "测试", url: "/workspace", styleClass: "item" },
  { name: "|", url: undefined, styleClass: "diver" },
  { name: "文档", url: "/workspace", styleClass: "item" },
  { name: "统计", url: "/workspace", styleClass: "item" },
  { name: "|", url: undefined, styleClass: "diver" },
  { name: "组织", url: "/workspace", styleClass: "item" },
]);

const lastActiveIndex = ref(0);
const changeIsActive = (index: number) => {
  if (itemList[index].styleClass === "item") {
    itemList[lastActiveIndex.value].styleClass = "item";
    itemList[index].styleClass = "active";
    lastActiveIndex.value = index;
  }
};
</script>

<style lang="scss" scoped>
$height: 50px;
$line-height: 30px;

@mixin item {
  display: block;
  height: $line-height;
  padding: 10px 15px;
  line-height: $line-height;
  color: #ffffff;
}
.nav {
  height: $height;
  width: 100%;
  background: linear-gradient(to right, #1183fb, #0a49d2);

  text-align: center;
  margin: 0 auto;
  font-size: 15px;
  color: #ffffff;
  .list {
    height: $height;
    display: inline-block;
    list-style: none;
    li {
      float: left;
      .item {
        @include item;
      }
      .item:hover {
        cursor: pointer;
        background: #0c5bc7;
      }
      .diver {
        @include item;
      }
      .diver:hover {
        cursor: default;
      }
      .active {
        @include item;
        cursor: pointer;
        background: rgba(0, 0, 0, 0.1);
        font-weight: 700;
      }
    }
  }
}
</style>
