import { createApp } from 'vue';
import Antd, {
  Alert,
  message
} from 'ant-design-vue';
import axios from 'axios'

import App from './App.vue';
import router from './router';

import 'ant-design-vue/dist/antd.css';

const app = createApp(App);

app.config.productionTip = false;
app.config.globalProperties.$axios = axios;
// app.config.globalProperties.$Button = Button;
// app.config.globalProperties.$Input = Input;
// app.config.globalProperties.$Carousel = Carousel;
app.config.globalProperties.$message = message;
app.config.globalProperties.$alert = Alert;


app.use(Antd);
app.use(router);
// todo 使用 vuex
// app.use(store);

app.mount('#app');