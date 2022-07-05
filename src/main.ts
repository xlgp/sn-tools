import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/global.css'
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/el-message.css';
import zhCn from 'element-plus/es/locale/lang/zh-cn'

createApp(App).use(router).use(ElementPlus, {
  locale: zhCn, size: 'small'
}).mount('#app')
