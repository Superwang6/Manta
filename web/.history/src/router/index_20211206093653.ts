import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Application',
    component: () => import("@/base/frame/app/Application.vue"),
    children: [
      {
        path: '/workspaceMain',
        name: 'WorkspaceMain',
        component: () => import("@/business/workspace/main/WorkspaceMain.vue"),
        children: [
          {
            path: '/home',
            name: 'Home',
            component: () => import("@/business/workspace/main/view/Home.vue")
          },
          {
            path: '/schedule',
            name: 'Schedule',
            component: () => import("@/business/workspace/main/view/Schedule.vue")
          }
        ]
      },
      {
        path: '/product',
        name: 'Product',
        component: () => import("@/business/product/Product.vue")
      }
    ]
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
