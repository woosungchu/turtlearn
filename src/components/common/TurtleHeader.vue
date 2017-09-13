<template>
  <nav id="header" class="navigation">
    <section class="container">

      <router-link v-bind:to="'/'" class="nav-title">
       {{appName}}
      </router-link>
      
      <ul class="nav-list float-right">
        <li class="nav-item" v-if="isGuest">
			<router-link v-bind:to="'/auth'" class="popover-link">로그인</router-link>
		</li>
		<li class="nav-item" v-if="!isGuest">
			<router-link v-bind:to="'/'" class="nav-item">회원정보</router-link>
		</li>
		<li class="nav-item" v-if="!isGuest">
			<a @click=logout >로그아웃</a>
		</li>
	  </ul>

    </section>
  </nav>
</template>

<script>
import firebase from 'firebase'
import auth from '@/auth';

export default {
  name: 'headerv',
  beforeMount(){
      if(firebase.auth().currentUser){
        this.isGuest = false;
      }else{
        let authListener = firebase.auth().onAuthStateChanged(user => {
          if (user) {
            this.isGuest = false;
            authListener();
          }else{
            this.isGuest = true;
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
    logout : auth.logout
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

.nav-title{
    display: inline;
    font-size: 1.6rem;
    line-height: 5.2rem;
    padding: 0;
    text-decoration: none;
}

.nav-list{
	margin-top:13px
}

.nav-item{
	float:left;
	list-style:none;
	margin-left: 12px;
}

</style>
