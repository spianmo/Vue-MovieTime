import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import http from 'axios'

Vue.config.productionTip = false
Vue.prototype.http = http

new Vue({
  render: h => h(App),
}).$mount('#app')
