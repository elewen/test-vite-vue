import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

import router from './router'
import store from './store'
import ElementPlus from './plugins/elementPlus'

const app = createApp(App)

app.use(store)
app.use(router)
app.use(ElementPlus, { size: 'mini' })
app.mount('#app')
