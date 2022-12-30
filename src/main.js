import { createApp } from 'vue'
import App from './App.vue'

import Axios from 'axios';
import VueAxios from 'vue-axios';

const app = createApp(App);

app.use(VueAxios, Axios);

app.mount('#app');
