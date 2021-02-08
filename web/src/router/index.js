import Vue from 'vue';
import Router from 'vue-router';

import Login from '../components/login';
import Main from '../components/main';
import GoodsManager from '../components/GoodsManager'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/main',
      name: 'main',
      component: Main,
      children :[
        {
          path: '/goodsManager',
          component: GoodsManager
        }
      ]
    }
  ]
})
