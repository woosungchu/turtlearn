// import Vue from 'vue'
// import Vuex from 'vuex'
// import * as firebase from 'firebase'
// import { firebaseMutations , firebaseAction} from 'vuexfire'
// import { state } from './state'
//
// Vue.use(Vuex)
//
// // https://stackoverflow.com/questions/44352042/vuejs-vuex-firebase-where-to-hook-up-firebase
// export const store = new Vuex.Store({
//   state,
//   mutations : {...firebaseMutations},
//   // https://vuex.vuejs.org/kr/getters.html
//   getters: {
//     classes : state => state.classes,
//   },
//   // https://jsfiddle.net/posva/6w3ks04x/
//   actions: {
//     setClassesRef: firebaseAction(({bindFirebaseRef}, ref) => {
//       bindFirebaseRef('classes', ref)
//     }),
//   },
// })

import Vue from 'vue'
import Vuex from 'vuex'

import classes from './modules/classes'

Vue.use(Vuex)

export default new Vuex.Store({
  actions: {},
  getters: {},
  modules: {
    classes
  },
  // FIXME: should be !isProduction, but vuexfire doesn't work in strict mode
  strict: false
})
