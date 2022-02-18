import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

createApp(App).use(router).use(ElementPlus, {
    locale: zhCn,size:'small'
  }).mount('#app')
