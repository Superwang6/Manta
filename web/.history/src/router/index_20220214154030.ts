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
        meta: {
          index: 0,
          level: 0
        },
        component: () => import("@/business/workspace/main/WorkspaceMain.vue"),
        children: [
          {
            path: '/home',
            name: 'Home',
            meta: {
              index: 0,
              level: 1
            },
            component: () => import("@/business/workspace/main/view/Home.vue")
          },
          {
            path: '/schedule',
            name: 'Schedule',
            meta: {
              index: 1,
              level: 1
            },
            component: () => import("@/business/workspace/main/view/Schedule.vue")
          }
        ]
      },
      {
        path: '/product',
        name: 'Product',
        meta: {
          index: 1,
          level: 0
        },
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
