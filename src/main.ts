import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './static/main.scss'

// init vue app
createApp(App).use(router).mount('#app')