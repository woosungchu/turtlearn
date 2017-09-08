<template>
<div class="column is-8 is-offset-2">
  <div class="container">
	<class-head></class-head>
  </div>
  
  <div class="class-editor-container">
  	<class-editor></class-editor>
  </div>
  
</div>
</template>

<script>
import ClassHead from '@/components/class/ClassHead'
import ClassEditor from '@/components/class/ClassEditor'

export default {
  name: 'class-new',
  components: {
	  ClassHead,ClassEditor
  },

  data () {
    return {
      msg: 'Welcome to Home'
    }
  }

}
</script>

<style scoped>
.class-editor-container{
  margin : 30px 0px;
  border: 1px solid #ddd;
  min-height: 500px;
}
</style>
