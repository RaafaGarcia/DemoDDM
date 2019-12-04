import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Rx from 'rxjs/Rx';
import VueRx from 'vue-rx';
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbvue/lib/css/mdb.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import { firestorePlugin } from 'vuefire'

Vue.use(firestorePlugin)



var firebase = require("firebase/app");

// Add the Firebase products that you want to use

require("firebase/firestore");
// import * as firebase from 'firebase/app'



// VueRx can use libraries other than RxJS
// that implement the observable interface.
Vue.use(VueRx, Rx)
Vue.config.productionTip = false



new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
