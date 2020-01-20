import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'

import VChart from 'v-charts'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VChart)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
