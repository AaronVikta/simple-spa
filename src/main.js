import Vue from 'vue'
import App from './App.vue'
import {router} from './routes.js'
import Navigation from './components/Navigation.vue'

Vue.component('navigation', Navigation)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
