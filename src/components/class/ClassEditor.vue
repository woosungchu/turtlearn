<template>
<div id="class-editor">
  <turtle-markdown-editor v-bind:name="name" v-bind:value="contents"></turtle-markdown-editor>
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
      name: "contents",
      contents : ""
    }
  }

}
</script>

<style scoped>
</style>
