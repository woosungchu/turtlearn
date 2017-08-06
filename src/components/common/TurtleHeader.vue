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
import { firebaseApp } from '@/helpers/firebase'

export default {
  name: 'headerv',
  data (){
    var user= firebaseApp.auth().currentUser;
    var menus = {
      '사용자' : [],
      '팁' : [
        { name :'초임교사', link:'/'},
        { name :'현장학습', link:'/'}
      ],
      '정보' : [
        { name :'법', link:'/law'},
        { name :'보조공학', link:'/'},
      ]
    };
    const logged = [{ name :'회원정보', link:'/'},{ name :'로그아웃', link:'/'}];
    const guest = [{ name :'로그인', link:'/auth'},{ name :'회원가입', link:'/'}];

    menus['사용자'] = user ? logged : guest ;
    user && alert(user.displayName);

    return {
      appName : '터틀런',
      menus : menus
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
