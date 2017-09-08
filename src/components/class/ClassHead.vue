<template>
<nav id="class-head" class="level">
  <div class="level-left">
  
    <div class="class-item level-item" v-for="n in 3">
      <div class="mr8 pt20"><i class="fa fa-file-text-o fa-2x"></i></div>
      <div>
	      <a class="is-5" href="#">
	      	<strong class="ellipsis">KedServiceImpl.js</strong>
	      </a>
	      <div class="tags">
	      	<p class="ellipsis">
		      	<span class="tag">Tag</span>
		      	<span class="tag">Tag2</span>
		      	<span class="tag">Tag2</span>
		      	<span class="tag">Tag2</span>
		      	<span class="tag">Tag2</span>
	      	</p>
	      </div>
      </div>
    </div>
    
  </div>
  <div class="level-right">
    <p class="level-item">
    	<a href="#">See all of your classes</a>
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
  line-height:1em;
}

.tag {
  font-size : 0.7rem;
  margin-right: 0.1rem;
  margin-bottom: 0px;
  height:1em;
}
</style>
