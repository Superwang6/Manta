<template>
  <div class="workspaceNav">
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
<script lang='ts' setup>
import { reactive, computed } from "vue";
import { useStore } from "vuex";
import Item from "@/base/frame/app/header/ts/Item";

const store = useStore();

const itemList: Array<Item> = reactive([
  { name: "首页", url: "/home", styleClass: "item", childrenList: undefined },
  {
    name: "日程",
    url: "/schedule",
    styleClass: "item",
    childrenList: undefined,
  },
  { name: "|", url: undefined, styleClass: "diver", childrenList: undefined },
  {
    name: "任务",
    url: "/schedule",
    styleClass: "item",
    childrenList: undefined,
  },
  { name: "Bug", url: "/", styleClass: "item", childrenList: undefined },
  {
    name: "测试",
    url: "/schedule",
    styleClass: "item",
    childrenList: undefined,
  },
  {
    name: "用需",
    url: "/schedule",
    styleClass: "item",
    childrenList: undefined,
  },
  { name: "软需", url: "/schedule", styleClass: "item", childrenList: undefined },
  { name: "|", url: undefined, styleClass: "diver", childrenList: undefined },
  {
    name: "迭代",
    url: "/schedule",
    styleClass: "item",
    childrenList: undefined,
  },
  {
    name: "动态",
    url: "/schedule",
    styleClass: "item",
    childrenList: undefined,
  },
  { name: "|", url: undefined, styleClass: "diver", childrenList: undefined },
  {
    name: "档案",
    url: "/schedule",
    styleClass: "item",
    childrenList: undefined,
  },
  {
    name: "密码",
    url: "/schedule",
    styleClass: "item",
    childrenList: undefined,
  },
  {
    name: "联系人",
    url: "/schedule",
    styleClass: "item",
    childrenList: undefined,
  },
]);

const lastActiveIndex = computed(() => store.state.nav.lastActiveItem);
const changeIsActive = (index: number) => {
  if (itemList[index].styleClass === "item") {
    itemList[lastActiveIndex.value].styleClass = "item";
    itemList[index].styleClass = "active";
    store.commit("changeChildIsActive", index);
  }
};
</script>

<style lang='scss' scoped>
$height: 35px;
$line-height: 20px;

@mixin item {
  display: block;
  height: $line-height;
  padding: 8px 12px;
  float: left;
  line-height: $line-height;
}
.workspaceNav {
  height: 45px;
  .list {
    height: $height;
    line-height: $height;
    display: inline-block;
    list-style: none;
    margin: 5px auto;
    li {
      float: left;

      .item {
        @include item;
      }
      .item:hover {
        cursor: pointer;
        background: #ececec;
        border-radius: 4px;
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
        font-weight: 700;
        color: #0c64eb;
      }
      .active:hover {
        cursor: pointer;
        background: #ececec;
        border-radius: 4px;
      }
    }
  }
}

.router-link-active {
  text-decoration: none;
  color: #3c4353;
}
a {
  text-decoration: none;
  color: #3c4353;
}
</style>
