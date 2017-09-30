<template>
<div>
  <class-head></class-head>
  <div class="panel">
    <div class="panel-heading"></div>
    <div class="panel-body class-contents" v-html="markedClassUnit"></div>
  </div>
</div>
</template>

<script>
import marked from 'marked'
import ClassHead from '@/components/class/ClassHead'

export default {
  name: 'class-view',
  components: {
	  ClassHead
  },
  computed: {
    markedClassUnit: function(){
      let classUnit = this.$store.getters.userClasses[this.$route.params.id];
      return classUnit ? marked(classUnit.contents, { sanitize: true }) : "";
    }
  }
}
</script>

<style scoped>
.class-contents {
  padding : 8px 12px;
}
</style>
