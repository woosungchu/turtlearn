<template>
  <nav id="header" class="navbar">
    <div class="container">

      <div class="nav-left">
        <router-link v-bind:to="'/'" class="nav-item is-active">
         {{appName}}
        </router-link>
      </div>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">사용자</a>
        <div class="navbar-dropdown" v-if="isGuest">
          <a class="navbar-item">
            <router-link v-bind:to="'/auth'" class="nav-item">로그인</router-link>
          </a>
        </div>
        <div class="navbar-dropdown" v-else>
          <a class="navbar-item">
            <router-link v-bind:to="'/'" class="nav-item">회원정보</router-link>
          </a>
          <a class="navbar-item">
            <a class="nav-item" @click=logout >로그아웃</a>
          </a>
        </div>
      </div>

      <div class="navbar-item has-dropdown is-hoverable" v-for="(values, key) in menus">
        <a class="navbar-link">{{ key }}</a>
        <div class="navbar-dropdown">
          <a class="navbar-item" v-for="value in values">
            <router-link v-bind:to=value.link class="nav-item">
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

      if(currentUser){
        this.isGuest = false;
      }else{
        let authListenerUnsuscribe = firebase.auth().onAuthStateChanged(user => {
          if (user) {
            this.isGuest = false;
            authListenerUnsuscribe();
          }else{
            this.isGuest = true;
            // this.$router.push('/');
          }
        });
      }
  },
  data (){
    return {
      appName : '터틀런',
      isGuest : true,
      menus : {
      '팁' : [{ name :'초임교사', link:'/'},{ name :'현장학습', link:'/'}],
      '정보' : [{ name :'법', link:'/law'},{ name :'보조공학', link:'/'}]
      }
    }
  },
  methods : {
    logout(){
      firebase.auth().signOut().then(function() {
        window.location.reload()
      }, function(error) {
        console.error('Sign Out Error', error);
        window.location.reload();
      });
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
