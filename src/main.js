import Vue from 'vue'
import App from './App.vue'
import './components'
import Clipboard from 'v-clipboard'
import { name, version } from '../package.json'

Vue.use(Clipboard)

Vue.config.productionTip = false

new Vue({
  name,
  version,
  render: h => h(App)
}).$mount('#app')
