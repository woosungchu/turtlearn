<template>
<div id="turtle-markdown-editor">
  <textarea :name="name" :value="input" @input="update"></textarea>
  <div v-html="compiledMarkdown"></div>
</div>
</template>

<script>
import marked from 'marked'

export default {
  name: 'turtle-markdown-editor',
  props: ['name','value'],
  data: function(){
    let defaultValue = '# hello\n## hello2';
  	return {
	  input: this.value || defaultValue
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
#turtle-markdown-editor {
  margin: 0;
  height: 500px;
  color: #333;
}

#turtle-markdown-editor > div{
  float:right;
}

textarea, #turtle-markdown-editor > div {
  display: inline-block;
  width: 49.5%;
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
</style>
