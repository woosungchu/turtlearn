<template>
<div class="container">
	<class-head></class-head>

	<div class="class-editor-container">
	  <class-editor></class-editor>
	</div>

	<a class="button button-clear float-right" href="#" @click="register">
		<i class="fa fa-pencil-square-o fa-2x" aria-hidden="true"></i>
	</a>
</div>
</template>

<script>
import ClassHead from '@/components/class/ClassHead'
import ClassEditor from '@/components/class/ClassEditor'
import { mapGetters } from 'vuex'

export default {
  name: 'class-new',
  components: {
	  ClassHead,ClassEditor
  },

	computed: {
		...mapGetters(['allClasses']),
		classes(){
			return this.allClasses.map(item => {
				return item;
			})
		}

	},

	methods : {
		addClass(){
			let contents = '### test3';
			this.$store.dispatch('addClassItem', {contents});
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
