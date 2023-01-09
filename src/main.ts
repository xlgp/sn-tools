import App from './App.vue'
import router from './router'
const pinia = createPinia()

import 'element-plus/dist/index.css'
import './assets/global.css'

createApp(App).use(router).use(pinia).mount('#app')
