<template>
  <div id="app">
    <turtle-header></turtle-header>
    <router-link v-bind:to="'/'">
      <img src="./assets/logo.png">
    </router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import TurtleHeader from '@/components/common/TurtleHeader'

export default {
  name: 'app',
  components: {
    TurtleHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
