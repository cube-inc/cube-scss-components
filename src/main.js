import Vue from 'vue'
import App from './App.vue'
import './components'
import './highlight'
import { name, version } from '../package.json'

Vue.config.productionTip = false

new Vue({
  name,
  version,
  render: h => h(App)
}).$mount('#app')
