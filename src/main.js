import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './components'
import Clipboard from 'v-clipboard'
import appInfo from '@/services/appInfo'

Vue.use(Clipboard)

Vue.config.productionTip = false

new Vue({
  router,
  appInfo,
  render: h => h(App)
}).$mount('#app')
