import { createRouter, createWebHashHistory } from 'vue-router'

import TongJi from './page/tongji/TongJi.vue';
import Test from './page/test/index.vue';
import Volume from './page/volume/index.vue';
import Layout from './layout/Layout.vue'
import Dashboard from './page/dashboard/index.vue'

const routes = [
  {
    path: '/', name: '首页', component: Layout, meta: { menuHidden: true }, children: [
      { path: '/', name: '首页', component: Dashboard },
      { path: '/volume', name: '体积计算', component: Volume },
      { path: '/tongji', name: '品牌统计', component: TongJi },
    ]
  }]

const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
})

export default router;