import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import 'bulma/css/bulma.css'
import 'firebaseui/dist/firebaseui.css'

import firebase from 'firebase'
import { firebaseConfig } from './helpers/firebase'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  store,
  router,
  beforeCreate() {
    firebase.initializeApp(firebaseConfig);
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        alert('current User : ' + user.displayName);
      } else {
        alert('empty user')
       }
      this.$router.push('/')
    });
  },
  template: '<App/>',
  components: { App }
})
