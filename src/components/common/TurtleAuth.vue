<template lang="html">
  <div id="firebaseui-auth-container"></div>
</template>

<script>
import auth from '@/auth';
import firebaseui from 'firebaseui'

export default {
  name: 'auth',
  mounted() {
    auth.initAuthUI('#firebaseui-auth-container');
  },
}
</script>
