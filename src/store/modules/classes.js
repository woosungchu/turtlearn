import VuexFire from 'vuexfire'
import { classesRef } from '@/helpers/firebase'

// https://github.com/spect88/vuexfirecart/blob/master/src/store/modules/cart.js
export default {
  state: {
    items: []
  },

  getters: {
    allClasses: state => state.items
  },

  mutations: VuexFire.moduleMutations('classes'),

  actions: {
    addClassItem({state},{contents}){
      let item = {contents:contents};
      classesRef.push(item)
    }

  }
}
