<template lang="html">
  <div id="firebaseui-auth-container"></div>
</template>

<script>
import firebaseui from 'firebaseui'
import firebase from 'firebase'
import firebaseUiAuthCss from 'firebaseui/dist/firebaseui.css'

export default {
  name: 'auth',
  beforeMount(){
      if(firebase.auth().currentUser){
        this.$router.push('/');
      }
  },
  mounted() {
    //auth.initAuthUI('#firebaseui-auth-container');
    const uiConfig = {
      signInSuccessUrl: '/',
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID
      ]
    };
    const ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start('#firebaseui-auth-container', uiConfig);
  },
}
</script>
