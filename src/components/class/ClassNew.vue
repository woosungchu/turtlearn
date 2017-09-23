<template>
<div class="container">
	<class-head></class-head>

	<div class="class-editor-container">
	  <class-editor></class-editor>
	</div>

	<a class="button button-clear float-right" href="#"><i class="fa fa-pencil-square-o fa-2x" aria-hidden="true"></i></a>
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
  margin : 20px 0px;
  border: 1px solid #ddd;
  min-height: 500px;
}
</style>
