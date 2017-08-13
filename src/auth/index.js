import firebase from 'firebase'
import firebaseUiAuthCss from 'firebaseui/dist/firebaseui.css'
import firebaseui from 'firebaseui'

const user = {
  displayName: '',
  email: '',
  emailVerified: false,
  photoURL: '',
  uid: ''
}

const getUser = () => {
  return user
}

const logout = () => {
  firebase.auth().signOut().then(() => {
    window.location.reload()
  }, (error) => {
    console.error(error)
    window.location.reload()
  })
}

const bindUser = (theUser) => {
  if (theUser) {
    user.displayName = theUser.displayName
    user.email = theUser.email
    user.emailVerified = theUser.emailVerified
    user.photoURL = theUser.photoURL
    user.uid = theUser.uid
  } else {
    user.displayName = ''
    user.email = ''
    user.emailVerified = false
    user.photoURL = ''
    user.uid = ''
  }
}

const initAuthUI = (selector) => {
  const uiConfig = {
    signInSuccessUrl: '/',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ]
  };
  const ui = new firebaseui.auth.AuthUI(firebase.auth());
  ui.start(selector, uiConfig);
}

export default { getUser, bindUser, logout, initAuthUI }
