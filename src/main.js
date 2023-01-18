import { createApp } from 'vue'
import App from './App.vue'

import Axios from 'axios'
import VueAxios from 'vue-axios'

import store from "./store/index";

const app = createApp(App);

app.use(VueAxios, Axios);
app.use(store);

app.mount('#app');
