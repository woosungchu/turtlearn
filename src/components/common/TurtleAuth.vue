<template lang="html">
  <div id="firebaseui-auth-container"></div>
</template>

<script>
import auth from '@/auth';
import firebaseui from 'firebaseui'
import firebase from 'firebase'

export default {
  name: 'auth',
  beforeMount(){
      if(firebase.auth().currentUser){
        this.$router.push('/');
      }
  },
  mounted() {
    auth.initAuthUI('#firebaseui-auth-container');
  },
}
</script>
