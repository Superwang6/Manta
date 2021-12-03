<template>
  <div class="workspaceNav">
    <ul class="list">
      <template v-for="(item, index) in itemList" :key="index">
        <li>
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
import { reactive } from "vue";
import Item from "@/base/frame/app/header/ts/Item";

const itemList: Array<Item> = reactive([
  { name: "首页", url: "/home", styleClass: "item" },
  { name: "日程", url: "/schedule", styleClass: "item" },
  { name: "|", url: undefined, styleClass: "diver" },
  { name: "任务", url: "/workspace", styleClass: "item" },
  { name: "Bug", url: "/", styleClass: "item" },
  { name: "测试", url: "/workspace", styleClass: "item" },
  { name: "用需", url: "/workspace", styleClass: "item" },
  { name: "软需", url: "/", styleClass: "item" },
  { name: "|", url: undefined, styleClass: "diver" },
  { name: "迭代", url: "/workspace", styleClass: "item" },
  { name: "动态", url: "/workspace", styleClass: "item" },
  { name: "|", url: undefined, styleClass: "diver" },
  { name: "档案", url: "/workspace", styleClass: "item" },
  { name: "密码", url: "/workspace", styleClass: "item" },
  { name: "联系人", url: "/workspace", styleClass: "item" },
]);
</script>

<style lang='scss' scoped>
$height: 45px;
$line-height: 30px;

@mixin item {
  display: block;
  height: $line-height;
  padding: 8px 12px;
  float: left;
  line-height: $line-height;
}
.workspaceNav {
  .list {
    height: $height;
    line-height: $height;
    display: inline-block;
    list-style: none;
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
