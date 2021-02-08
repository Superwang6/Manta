<template>
  <el-container class="main">
    <el-aside class="nav-container" width="200px">
      <el-menu
        default-active="1"
        class="nav"
        @open="handleOpen"
        @close="handleClose"
        background-color="#324157"
        text-color="#FFFFFF"
        active-text-color="#20A0FF"
      router="true">
        <el-menu-item index="/main">
          <i class="el-icon-s-cooperation"></i>
          <span slot="title">进销存管理系统</span>
        </el-menu-item>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-notebook-2"></i>
            <span>基础资料</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">资金账户管理</el-menu-item>
            <el-menu-item index="1-2">仓库管理</el-menu-item>
            <el-menu-item index="1-3">车辆管理</el-menu-item>
            <el-menu-item index="1-4">供应商管理</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-s-goods"></i>
            <span>商品管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/goodsManager">商品管理</el-menu-item>
            <el-menu-item index="1-2">商品提成设置</el-menu-item>
            <el-menu-item index="1-3">商品单位管理</el-menu-item>
            <el-menu-item index="1-4">商品品牌管理</el-menu-item>
            <el-menu-item index="1-5">商品类型管理</el-menu-item>
            <el-menu-item index="1-6">商品最低价管理</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-box"></i>
            <span>库存管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">库存查询</el-menu-item>
            <el-menu-item index="1-2">库存盘点单</el-menu-item>
            <el-menu-item index="1-3">入库单</el-menu-item>
            <el-menu-item index="1-4">出库单</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="5">
          <template slot="title">
            <i class="el-icon-shopping-bag-1"></i>
            <span>采购管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">采购单</el-menu-item>
            <el-menu-item index="1-2">采购退货单</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="6">
          <template slot="title">
            <i class="el-icon-sell"></i>
            <span>销售管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">销售订单</el-menu-item>
            <el-menu-item index="1-2">销售订单明细</el-menu-item>
            <el-menu-item index="1-3">销售提成记录</el-menu-item>
            <el-menu-item index="1-4">发货单</el-menu-item>
            <el-menu-item index="1-5">销售退货单</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="7">
          <template slot="title">
            <i class="el-icon-truck"></i>
            <span>车销管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">车销单</el-menu-item>
            <el-menu-item index="1-2">车销单明细</el-menu-item>
            <el-menu-item index="1-3">车载库存查询</el-menu-item>
            <el-menu-item index="1-4">车销提货单</el-menu-item>
            <el-menu-item index="1-5">车销回库单</el-menu-item>
            <el-menu-item index="1-5">车销退货单</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="8">
          <template slot="title">
            <i class="el-icon-aim"></i>
            <span>目标管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">员工目标管理</el-menu-item>
            <el-menu-item index="1-2">部门目标管理</el-menu-item>
            <el-menu-item index="1-3">员工目标完成进度</el-menu-item>
            <el-menu-item index="1-4">部门目标完成进度</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="9">
          <template slot="title">
            <i class="el-icon-notebook-2"></i>
            <span>统计分析</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">订单分析</el-menu-item>
            <el-menu-item index="1-2">部门订单分析</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="10">
          <template slot="title">
            <i class="el-icon-money"></i>
            <span>财务管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">资金流水</el-menu-item>
            <el-menu-item index="1-2">收款单</el-menu-item>
            <el-menu-item index="1-2">付款单</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  export default {
    name: "main"
  }
</script>

<style scoped>
  .main {
    height: 100%;
    width: 100%;
  }

  .nav-container {
    width: 200px;
    height: 100%;
  }

  .nav {
    height: 100%;
  }
</style>
