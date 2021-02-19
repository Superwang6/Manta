import Vue from 'vue';
import Router from 'vue-router';

import Login from '../components/Login';
import Main from '../components/Main';
import GoodsManager from '../components/GoodsManager'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'Login.vue',
      component: Login
    },
    {
      path: '/main',
      name: 'Main.vue',
      component: Main,
      children :[
        {
          path: '/goodsManager',
          component: GoodsManager,
          meta: ['商品管理','商品管理']
        }
      ]
    }
  ]
})
