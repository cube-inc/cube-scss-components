import Vue from 'vue'
import App from './App.vue'
import './components'
import './highlight'
import { version } from '../package.json'

Vue.config.productionTip = false

new Vue({
  version,
  render: h => h(App)
}).$mount('#app')
