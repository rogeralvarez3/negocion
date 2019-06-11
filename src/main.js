import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@fortawesome/fontawesome-free/css/all.css'
import swal from 'vue-sweetalert2'

Vue.config.productionTip = false
Vue.use(swal)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
