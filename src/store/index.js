import Vue from 'vue'
import Vuex from 'vuex'
import firebase from '@/firebase'
import auth from '@/auth';

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
    allClasses: function(state, items){
      state.classes = items;
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
    addClass: function(context, item){
      var newClass = firebase.database.ref('class').push();
      newClass.set(item);
    },
    getFirebaseDatabase : function(context){
      // firebase.database.ref('class');
      firebase.database.ref('class').on("value", function(snapshot){
        console.log(snapshot.val())
        //context.commit('toggle',snapshot.val());
      })
    },
    getMyClasses(context){
      let classRef = firebase.database.ref('class');
      let user = auth.getUser();
      //TODO need to search by uid
      classRef.on("value", function(snapshot){
        context.commit('allClasses',snapshot.val())
      });

      // classRef.on("value", function(snapshot){
      //   context.commit('allClasses',snapshot.val())
      // });

      // classRef.on("value", function(snapshot){
      //   context.commit('allClasses',snapshot.val())
      // });
    }
  }
})
