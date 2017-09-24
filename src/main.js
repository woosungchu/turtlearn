import Vue from 'vue'
import App from './App'
import router from './router'

import 'milligram/dist/milligram.min.css'
import 'font-awesome/css/font-awesome.css'

import firebase from 'firebase'
import auth from './auth';
import store from './store'
import firebaseApp from './helpers/firebase'

new Vue({
  el: '#app',
  store,
  router,
  beforeCreate() {
    firebase.auth().onAuthStateChanged(auth.bindUser);
  },
  template: '<App/>',
  components: { App },
  firebaseApp
})
