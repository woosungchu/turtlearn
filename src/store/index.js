import Vue from 'vue'
import Vuex from 'vuex'
import firebase from '@/firebase'

Vue.use(Vuex);
Vue.use(firebase);

export const store = new Vuex.Store({
  state: {
    allClasses:[],
    userClasses:[],
    _isTrue:true
  },
  getters: {
    allClasses(state){
      return state.allClasses
    },
    userClasses(state){
      return state.userClasses
    },
    isTrue(sate){return state._isTrue;}
  },
  mutations:{
    addClass: function(state, item){
      state.allClasses.push(item);
    },
    allClasses: function(state, items){
      state.allClasses = items;
    },
    userClasses: function(state, items){
      state.userClasses = items;
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
        // console.log(snapshot.val())
        //context.commit('toggle',snapshot.val());
      })
    },
    getAllClasses(context){
      firebase.database.ref('class/').once("value", function(snapshot){
        context.commit('allClasses',snapshot.val())
      });
    },
    getMyClasses(context){
      let classRef = firebase.database.ref('class/'),
          user = firebase.firebaseApp.auth().currentUser;

      if(user && user.uid){
        classRef.orderByChild("uid").equalTo(user.uid).on("value", function(snapshot){
          context.commit('userClasses',snapshot.val())
        });
      }
    }

  }
})
