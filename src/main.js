import Vue from 'vue'
import App from './App'
import router from './router'

import 'milligram/dist/milligram.min.css'
import 'font-awesome/css/font-awesome.css'

import firebase from 'firebase'
import { firebaseConfig } from './helpers/firebase'
import auth from './auth';

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  beforeCreate() {
    firebase.initializeApp(firebaseConfig);
    firebase.auth().onAuthStateChanged(auth.bindUser);
  },
  template: '<App/>',
  components: { App }
})
