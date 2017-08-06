import Firebase from 'firebase'

const config = {
  apiKey: "AIzaSyCWkcAMY9Wx_zSRy5u0KOnOSErEwUDrfeI",
  authDomain: "turtlearn.firebaseapp.com",
  databaseURL: "https://turtlearn.firebaseio.com",
  projectId: "turtlearn",
  storageBucket: "",
  messagingSenderId: "591890359012"
};

export const firebaseApp = Firebase.initializeApp(config);

// export const db = firebaseApp.database();
