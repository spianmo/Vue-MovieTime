import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import api from './api'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/global.css'
import '@/assets/fonts/iconfont.css'

Vue.use(ElementUI)

Vue.config.productionTip = false
Vue.prototype.$http = api
Vue.prototype.$message = ElementUI.Message

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
