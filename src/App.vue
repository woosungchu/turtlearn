<template>
  <main id="app" class="wrapper">
    <turtle-header></turtle-header>
    <!--
    <router-link v-bind:to="'/'">
      <img src="./assets/logo.png">
    </router-link>
    -->

    <section class="section">
      <div class="container">
        <router-view></router-view>
      </div>
    </section>

  </main>
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
@import 'assets/css/common.css';

#app {
  /*font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";*/
  font-family: 'Helvetica Neue', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 14px;
}
</style>
