<template>
<div id="class-editor">

  <div id="class-topic">
	<ul class="list-style-none d-inline">
	   	<li class="tag float-left" v-for="(topic,i) in topics">
	   		<span>{{topic}}</span><button @click="removeTag(i)">X</button>
	   		<input id="class_topics[]" type="hidden" autocomplete="off" autofocus="">
		</li>
	</ul>
   	<input id="class-topic-input" @keypress="insertTag" type="text" autocomplete="off" autofocus="" placeholder="국어 언어유창성 의사소통">
  </div>
  <turtle-markdown-editor v-bind:name="editorName" v-bind:value="editorContents"></turtle-markdown-editor>
</div>
</template>

<script>
import TurtleMarkdownEditor from '@/components/common/TurtleMarkdownEditor'

export default {
  name: 'class-editor',
  components: {
	  TurtleMarkdownEditor
  },
  data () {
    return {
      editorName: "contents",
      editorContents : "",
      topics : ['vue','javascript','java','fluency']
    }
  },
  methods : {
    removeTag : function(index){
    	this.topics.splice(index,1);
    },
    insertTag : function(e){
    	let input = e.target.value.trim();
    	
    	if(e.keyCode === 13 && input){
    		this.topics.push(input);
    	}
    }
  }

}
</script>

<style scoped>
#class-topic{
	display:block;
    min-height: 34px;
    padding: 6px 8px;
    font-size: 14px;
    line-height: 20px;
    color: #24292e;
    vertical-align: middle;
    background-color: #fff;
    background-repeat: no-repeat;
    background-position: right 8px center;
    border: 1px solid #d1d5da;
    border-radius: 3px;
    outline: none;
    box-shadow: inset 0 1px 2px rgba(27,31,35,0.075);
}

#class-topic-input{
	display: inline-block !important;
	width: 130px;
    min-height: 26px;
    max-width: 100%;
    margin-right: 5px;
    margin: 0;
    background: none;
    box-shadow: none;
    border: 0 !important;
    height:20px;
}
    

</style>
