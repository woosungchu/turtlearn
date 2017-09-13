<template>
<div id="class-head" class="row">

  <div class="column column-75">
  	<ul id="class-list" class="list-style-none">
      <li class="class-item" v-for="n in 3">
        <div class="float-left mr8 pt7"><i class="fa fa-file-text-o fa-2x"></i></div>
        <div>
	        <a href="#">
	        	<strong class="ellipsis">KedServiceImpl.js</strong>
	        </a>
	        <div class="tags ellipsis">
	        	<span title="Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag">
	        		Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag
	        	</span>  
	        </div>
        </div>
      </li>
    </ul>
  </div>
  
  <div class="column column-25 float-right">
	 <a href="#" class="pt10 float-right">See all of your classes</a>
  </div>
  
</div>
</template>

<script>
export default {
  name: 'class-head'
}
</script>

<style scoped>
#class-list{
  display:flex;
}
.class-item {
  flex: 1 1 auto !important;
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
