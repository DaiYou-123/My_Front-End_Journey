import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { VirtualScroll } from 'vue3-virtual-scroll'
import 'vue3-virtual-scroll/style.css'

const app = createApp(App)
app.component('VirtualScroll', VirtualScroll)
app.mount('#app')