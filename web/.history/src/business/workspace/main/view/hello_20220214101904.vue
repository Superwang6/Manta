<template>
  <el-card
    class="box-card"
    :body-style="{ padding: '10px 15px' }"
    shadow="never"
  >
    <el-icon class="icon" color="#a6aab8" size="20"><more-filled /></el-icon>
    <el-row class="row">
      <el-col :span="6" class="left">
        <h4>{{ name }}, {{ timeUtil.getDusgsum() }}好!</h4>
        <div class="left-body">
          <el-timeline>
            <el-timeline-item
              v-for="(activity, index) in activities"
              :key="index"
              :timestamp="activity.timestamp"
              hollow="true"
              size="normal"
            >
              {{ activity.content }}
            </el-timeline-item>
          </el-timeline>
        </div>
      </el-col>
      <el-col :span="18" class="right">
        <h4>
          <small class="time">{{
            timeUtil.formatDateToDay(timeUtil.getNow())
          }}</small>
          今日剩余工作总计
        </h4>
        <div class="right-body">
          <div class="col">
            <div class="title">我的任务</div>
            <div class="amount">0</div>
          </div>
          <div class="col">
            <div class="title">我的BUG</div>
            <div class="amount">0</div>
          </div>
          <div class="col">
            <div class="title">我的需求</div>
            <div class="amount">0</div>
          </div>
          <div class="col">
            <div class="title">未关闭的迭代</div>
            <div class="amount">0</div>
            <div class="delay">已延期</div>
          </div>
          <div class="col">
            <div class="title">未关闭的产品</div>
            <div class="amount">0</div>
          </div>
          <el-button type="primary" @click="send()">111</el-button>
        </div>
      </el-col>
    </el-row>
  </el-card>
</template>
<script lang='ts' setup>
import { ref,defineEmits } from "vue";
import timeUtil from "@/base/utils/TimeUtil";
import { MoreFilled } from "@element-plus/icons";

const name = ref("wang");

const activities = [
  {
    content: "1.创建账号",
  },
  {
    content: "2.创建产品",
  },
  {
    content: "3.创建需求",
  },
];

const emits = defineEmits(['update:sendToF'])
const send = () => {
emits('update:sendToF','hahahah')
}
</script>
<style lang='scss' scoped>
$font-size: 14px;

.box-card {
  border-radius: 4px;
  margin-bottom: 20px;
  height: 176px;
  position: relative;
  .icon {
    z-index: 1;
    padding: 5px;
    border-radius: 4px;
    position: absolute;
    right: 5px;
  }
  .icon:hover {
    background: #f1f1f1;
  }
  .row {

    .left {
      width: 100%;
      padding: 0 10px;

      h4 {
        margin: 5px 0;
        line-height: 30px;
        font-size: $font-size;
      }

      .left-body {
        margin-top: 10px;
        padding-left: 5px;

        .el-timeline-item {
          padding: 5px;
          font-size: 12px;
        }
      }
    }
    .right {
      padding: 0 10px;
      h4 {
        font-weight: normal;
        margin: 10px 0;
        font-size: $font-size;
        .time {
          margin-right: 8px;
          color: #838a9d;
        }
      }
      .right-body {
        border-left: 1px solid #e5e8ec;
        margin: 0 -10px;
        padding: 10px 0 0 16px;
        height: 93px;
        .col {
          float: left;
          text-align: center;
          width: 20%;
          .title {
            font-size: $font-size;
          }
          .amount {
            font-size: 32px;
            font-weight: 700;
            line-height: 56px;
          }
          .delay {
            background: #ffebee;
            color: #ff5d5d;
            border-color: rgba(255, 93, 93, 0.25);
            border: 1px solid #ff5d5d;
            border-radius: 2px;
            font-size: 12px;
            margin: 0 35px;
          }
        }
      }
    }
  }
}
</style>