import Vue from 'vue'
import VuexFire from 'vuexfire'
import firebase from 'firebase'

Vue.use(VuexFire)

const config = {
  apiKey: "AIzaSyCWkcAMY9Wx_zSRy5u0KOnOSErEwUDrfeI",
  authDomain: "turtlearn.firebaseapp.com",
  databaseURL: "https://turtlearn.firebaseio.com",
  projectId: "turtlearn",
  storageBucket: "",
  messagingSenderId: "591890359012"
}

const firebaseApp = firebase.initializeApp(config)

const db = firebaseApp.database()

export const classesRef = db.ref('classes')

export default {
  'classes.items': classesRef
}
