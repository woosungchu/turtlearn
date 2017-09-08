<template>
<div>
  <div class="column is-8 is-offset-2">
  	<class-head></class-head>
  </div>
  <div class="column is-8 is-offset-2">
    <div class="columns">
      <div class="column is-8 is-offset-2">
      	8+2
      </div>
    </div>
  </div>
</div>
</template>

<script>
import ClassHead from '@/components/class/ClassHead'

export default {
  name: 'class-new',
  components: {
	  ClassHead
  },

  data () {
    return {
      msg: 'Welcome to Home'
    }
  }

}
</script>

<style scoped>

</style>
