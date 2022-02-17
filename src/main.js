import { createApp } from 'vue'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import '@element-plus/icons';
import App from './App.vue'
import router from './routes';
import axios from 'axios';
import store from '@/store/index';

const app = createApp(App);

axios.defaults.baseURL = 'http://localhost:8088';

app.use(ElementPlus);
app.use(router);
app.use(store);
app.config.globalProperties.axios = axios;

app.mount('#app');

