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
import { reactive, computed } from "vue";
import { useStore } from "vuex";
import Item from "@/base/frame/app/header/ts/Item";
import { useRoute, useRouter } from "vue-router";

const store = useStore();
const router = useRouter();
const route = useRoute();

const itemList: Array<Item> = reactive([
  {
    name: "我的地盘",
    url: "/workspaceMain",
    styleClass: "item",
    childrenList: undefined,
    defaultChild: '/home'
  },
  {
    name: "产品",
    url: "/product",
    styleClass: "item",
    childrenList: undefined,
  },
  {
    name: "迭代",
    url: "/workspaceMain",
    styleClass: "item",
    childrenList: undefined,
  },
  {
    name: "测试",
    url: "/workspaceMain",
    styleClass: "item",
    childrenList: undefined,
  },
  { name: "|", url: undefined, styleClass: "diver", childrenList: undefined },
  {
    name: "文档",
    url: "/workspaceMain",
    styleClass: "item",
    childrenList: undefined,
  },
  {
    name: "统计",
    url: "/workspaceMain",
    styleClass: "item",
    childrenList: undefined,
  },
  { name: "|", url: undefined, styleClass: "diver", childrenList: undefined },
  {
    name: "组织",
    url: "/workspaceMain",
    styleClass: "item",
    childrenList: undefined,
  },
]);

const lastActiveIndex = computed(() => store.state.nav.lastActiveItem);
const changeIsActive = (index: number) => {
  if (itemList[index].styleClass === "item") {
    if(lastActiveIndex.value != undefined) {
      itemList[lastActiveIndex.value].styleClass = "item";
    }
    itemList[index].styleClass = "active";
    store.commit("changeIsActive", index);
  }
  if(itemList[index].defaultChild != null && itemList[index].defaultChild != undefined) {
    router.push(itemList[index].defaultChild);
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
