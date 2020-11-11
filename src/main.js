import { createApp } from 'vue';
import App from './App.vue';
import './index.css';

import router from './router';
import store from './store';
import antd from './plugins/antDesignVue'

const app = createApp(App);
app.use(router);
app.use(store);
app.use(antd)
app.mount('#app');
