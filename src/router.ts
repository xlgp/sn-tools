import { createRouter, createWebHashHistory } from 'vue-router'

import HelloWorld from './components/HelloWorld.vue';
import TongJi from './page/tongji/TongJi.vue';
import Form from './page/form/index.vue';

const routes = [
  { path: '/', name: '首页', component: HelloWorld },
  { path: '/tongji', name: '统计', component: TongJi },
  { path: '/form', name: '表单', component: Form },
]

const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
})

export default router;