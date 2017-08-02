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
export default {
  name: 'headerv',
  data (){
    return {
      appName : '터틀런',
      menus : {
        '팁' : [
          { name :'초임교사', link:'/'},
          { name :'현장학습', link:'/'}
        ],
        '정보' : [
          { name :'법', link:'/law'},
          { name :'보조공학', link:'/'},
        ]
      }
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
