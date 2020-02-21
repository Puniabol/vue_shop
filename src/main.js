import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './assets/css/global.css'

import axios from 'axios'
axios.defaults.baseURL = '' // 无接口地址（http://……）
axios.interceptors.request.use(config => {
    // 挂载请求头 Authorization为API接口文档提供
    config.headers.Authorization = window.sessionStorage.getItem('token')
    return config
})
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')