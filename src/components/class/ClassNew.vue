<template>
<div class="container">
	<class-head></class-head>

	<div class="class-editor-container">
	  <class-editor v-bind:value="contents"></class-editor>
	</div>

	<a @click.prevent="addClass" class="button button-clear float-right" href="#"><i class="fa fa-pencil-square-o fa-2x" aria-hidden="true"></i></a>
</div>
</template>

<script>
import ClassHead from '@/components/class/ClassHead'
import ClassEditor from '@/components/class/ClassEditor'
import {firebaseApp} from '@/firebase'

export default {
  name: 'class-new',
  components: {
	  ClassHead,ClassEditor
  },

	data(){
		return {
			contents : '### test test test'
		}
	},

  methods:{
		addClass(){
			let user = firebaseApp.auth().currentUser;
			let newClass = { contents: '', uid: '' };

			if(user.uid && this.contents){
				newClass.contents = this.contents;
				newClass.uid = user.uid;

				this.$store.dispatch('addClass',newClass);
			}
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
