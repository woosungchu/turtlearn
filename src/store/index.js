import Vue from 'vue'
import Vuex from 'vuex'
import firebase from '@/firebase'

Vue.use(Vuex);
Vue.use(firebase);

export const store = new Vuex.Store({
  state: {
    classes:[],
    _isTrue:true
  },
  getters: {
    allClasses(state){
      return state.classes
    },
    isTrue(sate){return state._isTrue;}
  },
  mutations:{
    addClass: function(state, item){
      state.classes.push(item);
    },
    toggle:function(state,bool){
      state._isTrue = bool;
    }
  },
  actions:{
    toggle(context){
      let temp = !context.state._isTrue;
      firebase.database.ref('settings/setting').set(temp);
    },
    getFirebaseDatabase : function(context){
      // firebase.database.ref('class');
      firebase.database.ref('settings/setting').on("value", function(snapshot){
        console.log(snapshot.val())
        context.commit('toggle',snapshot.val());
      })
    }
  }
})
