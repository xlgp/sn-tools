import { createRouter, createWebHashHistory } from 'vue-router'

import Layout from './layout/Layout.vue'
import Dashboard from './page/dashboard/index.vue'
import NotFound from './page/404.vue'

const routes = [
  {
    path: '/', name: 'index', component: Layout, meta: { menuHidden: true }, children: [
      { path: '/', name: 'dashboard', component: Dashboard, meta: { title: '首页' } },
      { path: '/volume', name: 'volume', component: () => import("./page/volume/index.vue"), meta: { title: '体积计算' } },
      { path: '/tongji', name: 'tongji', component: () => import("./page/tongji/TongJi.vue"), meta: { title: '品牌统计' } },
      { path: '/ftms', name: 'ftms', component: () => import("./page/ftms/index.vue"), meta: { title: "留资数据格式化" } },
      { path: '/track', name: 'track', component: () => import("./page/track/index.vue"), meta: { title: "轨迹生成器" } },
      { path: '/user', name: 'user', component: () => import("./page/user/index.vue"), meta: { title: "用户生成器" }, },
      { path: 'dingnengorder', name: 'dingnengOrder', component: () => import("./page/dingneng-order/create.vue"), meta: { title: "鼎能面单" } },
      { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound, meta: { menuHidden: true } }
    ],
  },
  {
    path: '/dingnengorder/print', name: 'dingnengOrderPrint', component: () => import("./page/dingneng-order/print.vue"), meta: { menuHidden: true },
  }
]

const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
})

export default router;