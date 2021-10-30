import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import {GlobalService} from './services/http'

Vue.config.productionTip = false
Vue.prototype.GlobalService = GlobalService

new Vue({
  render: h => h(App),
}).$mount('#app')
