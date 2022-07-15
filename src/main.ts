import App from './App.vue'
import router from './router'
const pinia = createPinia()
import './assets/global.css'
createApp(App).use(router).use(pinia).mount('#app')
