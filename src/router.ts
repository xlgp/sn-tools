import { createRouter, createWebHashHistory } from 'vue-router'

import TongJi from './page/tongji/TongJi.vue';
import Volume from './page/volume/index.vue';
import Layout from './layout/Layout.vue'
import Dashboard from './page/dashboard/index.vue'
import NotFound from './page/404.vue'
import DingnengOrderCreate from './page/dingneng-order/create.vue'
import DingnengOrderPrint from './page/dingneng-order/print.vue'

const routes = [
  {
    path: '/', name: 'index', component: Layout, meta: { menuHidden: true }, children: [
      { path: '/', name: 'dashboard', component: Dashboard, meta: { title: '首页' } },
      { path: '/volume', name: 'volume', component: Volume, meta: { title: '体积计算' } },
      { path: '/tongji', name: 'tongji', component: TongJi, meta: { title: '品牌统计' } },
      {
        path: 'dingnengorder', name: 'dingnengOrder', redirect: '/dingnengorder/create', meta: { title: "鼎能面单" }, children: [
          { path: 'create', name: 'dingnengOrderCreate', component: DingnengOrderCreate, meta: { menuHidden: true }, },
          { path: 'print', name: 'dingnengOrderPrint', component: DingnengOrderPrint, meta: { menuHidden: true }, },
        ]
      },

      { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound, meta: { menuHidden: true } }
    ],
  },
  { path: '/video', name: "video", component: () => import('./page/video/index.vue') }
]

const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
})

export default router;