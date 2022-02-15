<template>
  <el-card class="box-card" :body-style="{ padding: '0px' }" shadow="never">
    <el-icon class="icon" color="#a6aab8" size="20"><more-filled /></el-icon>
    <div class="header">
      <h4>迭代统计</h4>
    </div>
    <el-row class="row">
      <el-col :span="8" class="left">
        <el-scrollbar max-height="220px" noresize="true">
          <template v-for="(item, index) in iterList" :key="index">
            <div
              :class="index === selectIndex ? 'choseItem' : 'item'"
              @click="choseItem(index)"
            >
              <div class="item-name">
                {{ item.name }}-{{ index }}-{{ selectIndex }}
              </div>
              <el-icon class="item-icon"><right /></el-icon>
            </div>
          </template>
        </el-scrollbar>
      </el-col>
      <el-col :span="16" class="right"> </el-col>
    </el-row>
  </el-card>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { MoreFilled } from "@element-plus/icons";
import { Right } from "@element-plus/icons";

const iterList = [
  { id: 1, name: "迭代1" },
  { id: 2, name: "迭代2" },
  { id: 3, name: "迭代3" },
  { id: 4, name: "迭代4" },
  { id: 5, name: "迭代5" },
  { id: 6, name: "迭代6" },
  { id: 7, name: "迭代7" },
  { id: 8, name: "迭代8" },
  { id: 9, name: "迭代9" },
];

const selectIndex = ref(0);

const choseItem = (index: number) => {
  selectIndex.value = index;
};
</script>
<style lang="scss" scoped>
@mixin itemStyle {
  height: 36px;
  .item-name {
    display: inline;
    height: 100%;
    line-height: 36px;
    width: 100%;
    padding: 8px 36px 8px 20px;
  }
  .item-icon {
    display: none;
  }
}

@mixin itemHoverStyle {
  background: #f1f1f1;
  .item-icon {
    display: inline;
    float: right;
    background: #e5e5e5;
    line-height: 36px;
    height: 100%;
    margin-right: 8px;
    width: 36px;
  }
}

@mixin itemBefore {
  content: " ";
  display: block;
  left: -1px;
  width: 4px;
  background: #006af1;
  position: absolute;
}

.box-card {
  height: 285px;
  border-radius: 4px;
  margin-bottom: 20px;
  position: relative;

  .icon {
    padding: 5px;
    border-radius: 4px;
    position: absolute;
    right: 5px;
    margin-top: 10px;
  }
  .icon:hover {
    background: #f1f1f1;
  }
  .header {
    width: 100%;
    h4 {
      font-size: 14px;
      padding: 12px 75px 12px 20px;
    }
  }
  .row {
    height: 240px;
    padding: 0 20px 20px 20px;
    .left {
      border-right: 1px solid #ebf2fb;
      font-size: 14px;
      .item,
      .choseItem {
        @include itemStyle;
      }
      .choseItem::before {
        @include itemBefore;
      }
      .item:hover,
      .choseItem:hover {
        @include itemHoverStyle;
      }
    }
  }
}
</style>
