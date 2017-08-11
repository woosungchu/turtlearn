import Vue from 'vue'
import Vuex from 'vuex'
import { firebaseMutations } from 'vuexfire'
import { state } from './state'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations : {...firebaseMutations},
  getters: {
    users: state => state.users,
  }
})
