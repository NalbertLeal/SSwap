import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
// import vue-fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import {faSearch, faUtensils, faCar, faHome, faUsers, faBed, 
  faFutbol, faGamepad, faBars, faEye} from '@fortawesome/free-solid-svg-icons'
// import {  } from '@fortawesome/free-regular-svg-icons'
// import {  } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


Vue.config.productionTip = false

// add fontawesome to vue
library.add(faSearch, faUtensils, faCar, faHome, faUsers, faBed, 
  faFutbol, faGamepad, faBars, faEye)
Vue.component('font-awesome-icon', FontAwesomeIcon)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
