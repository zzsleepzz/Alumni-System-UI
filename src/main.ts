import { createApp } from 'vue'
import App from './App.vue'
//引入组件库
import ant from 'ant-design-vue'
//引入样式表
import 'ant-design-vue/dist/antd.css'
import { setupNaive } from './plugins/naive';

const app = createApp(App);
setupNaive(app);
app.use(ant);
app.mount('#app');
