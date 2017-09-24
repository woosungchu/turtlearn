import Vue from 'vue'
import App from './App'
import router from './router'

import 'milligram/dist/milligram.min.css'
import 'font-awesome/css/font-awesome.css'

import {store} from './store'
import auth from './auth';
import {firebaseApp} from '@/firebase'

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store,
  beforeCreate() {
    firebaseApp.auth().onAuthStateChanged(auth.bindUser);
  },
  template: '<App/>',
  components: { App }
})
