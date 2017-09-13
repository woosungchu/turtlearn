<template>
<div id="class-editor">
  <textarea :value="input" @input="update"></textarea>
  <div v-html="compiledMarkdown"></div>
</div>
</template>

<script>
import marked from 'marked'

export default {
  name: 'class-editor',
  data: function(){
  	return {
	  input: '# hello'
	};
  },

  computed: {
    compiledMarkdown: function () {
      return marked(this.input, { sanitize: true })
    }
  },
  methods: {
    update: function (e) {
      this.input = e.target.value
    }
  }

}
</script>

<style scoped>
#class-editor {
  margin: 0;
  height: 500px;
  color: #333;
}

textarea, #class-editor div {
  display: inline-block;
  width: 49%;
  height: 100%;
  vertical-align: top;
  box-sizing: border-box;
  padding: 20px;
  overflow-y:scroll;
}

textarea {
  border: none;
  border-right: 1px solid #ccc;
  resize: none;
  outline: none;
  background-color: #f6f6f6;
  font-size: 14px;
  font-family: 'Monaco', courier, monospace;
}

code {
  color: #f66;
}
</style>
