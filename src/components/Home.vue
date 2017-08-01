<template>
  <div>
    <div v-for="item in items">
      <router-link v-bind:to="item.path">
        {{item.name}}
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',

  data () {
    return {
      msg: 'Welcome to Home',
      items: []
    }
  },

  created(){
    this.$router.options.routes.forEach(route => {
      this.items.push({
          name: route.name
          , path: route.path
      })
    })
  }
}
</script>
