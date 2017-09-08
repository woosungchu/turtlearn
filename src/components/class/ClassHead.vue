<template>
<nav id="class-head" class="level">
  <div class="level-left">
  
    <div class="class-item level-item" v-for="n in 3">
      <div class="mr8 pt20"><i class="fa fa-file-text-o fa-2x"></i></div>
      <div>
	      <a class="is-5" href="#">
	      	<strong class="ellipsis">KedServiceImpl.js</strong>
	      </a>
	      <div class="tags ellipsis">
	      	<span title="Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag">
	      		Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag
	      	</span>  
	      </div>
      </div>
    </div>
    
  </div>
  <div class="level-right">
    <p class="level-item">
    	<a href="#" class="pt28">See all of your classes</a>
    </p>
  </div>
</nav>
</template>

<script>
export default {
  name: 'class-head'
}
</script>

<style scoped>
.class-item.level-item {
  margin-right: 2.5rem;
}
.class-item a strong, .class-item .tags{
  max-width: 125px;
  overflow: hidden;
}
.class-item a strong{
  line-height:21px;
  text-decoration:underline;
}
.class-item .tags{
  display:block;
  line-height:1.3em;
  font-size : 0.75rem;
}
.class-item .tags .tag {
  margin-right: 0.1rem;
  margin-bottom: 0px;
  height:1.5em;
}
</style>
