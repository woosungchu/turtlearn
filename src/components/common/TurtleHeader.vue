<template>
  <nav id="header" class="navbar">
    <div class="container">

      <div class="nav-left">
        <router-link v-bind:to="'/'" class="nav-item is-active">
         {{appName}}
        </router-link>
      </div>

      <div class="navbar-item has-dropdown is-hoverable" v-for="(values, key) in menus">
        <a class="navbar-link">
          {{ key }}
        </a>
        <div class="navbar-dropdown">
          <a class="navbar-item" v-for="value in values">
            <router-link v-bind:to=value.link class="nav-item is-active">
             {{ value.name }}
            </router-link>
          </a>
        </div>
      </div>

    </div>
  </nav>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'headerv',
  beforeMount(){
      let currentUser= firebase.auth().currentUser;
      this.menus = {
        '사용자' : [],
        '팁' : [{ name :'초임교사', link:'/'},{ name :'현장학습', link:'/'}],
        '정보' : [{ name :'법', link:'/law'},{ name :'보조공학', link:'/'}]
      };
      const logged = [{ name :'회원정보', link:'/'},{ name :'로그아웃', link:'/'}];
      const guest = [{ name :'로그인', link:'/auth'},{ name :'회원가입', link:'/'}];

      if(currentUser){
        this.menus['사용자'] = logged;
      }else{
        let authListenerUnsuscribe = firebase.auth().onAuthStateChanged(user => {
          //onAuthStateChanged can pass null when logout
          if (user) {
            this.menus['사용자'] = logged;
            authListenerUnsuscribe(); //Stop listening for changes
          }else{
            this.menus['사용자'] = guest;
          }
        });
      }

      //alert(user ? user.displayName : 'empty');
  },
  data (){
    return {
      appName : '터틀런',
      menus : []
    }
  }
}
</script>


<style scoped>
#header {
  background-color: #2c3e50;
  border : 0;
}

#header * {
  color: #00d1b2;
}

</style>
