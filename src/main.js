import { createApp } from 'vue'
import App from './App.vue'
import "ant-design-vue/dist/reset.css"
import Antd from 'ant-design-vue'
import router from '@/router/index.js'
import '@/router/permission.js'

const app = createApp(App)

app.use(Antd)
app.use(router)

app.mount('#app')