<template>
<div>
    <div class="row">

      <div class="column column-66">
        <div class=" event-timeline">
          <p>
            <select style="width:30%;">
            	<option value="username">username</option>
            </select>
            <router-link v-bind:to="'/class/new'" class="button float-right">
            	NEW
            </router-link>
          </p>
          <hr>
          <p class="event-item">
            <span class="icon-item-type"><i class="fa fa-star"></i></span>
            <a href="#">joe</a> starred
            <a href="#">jsmith/wordpad</a>
            <small>1 hours ago</small>
          </p>
          <p class="event-item">
            <span class="icon-item-type"><i class="fa fa-code-fork"></i></span>
            <a href="#">ansuz</a> forked
            <a href="#">derp/crypto</a>
            to
            <a href="#">ansuz/crypto</a>
            <small>2 hours ago</small>
          </p>
          <p class="event-item">
            <span class="icon-item-type"><i class="fa fa-star"></i></span>
            <a href="#">pro</a> starred
            <a href="#">twitter/bootstrap</a>
            <small>3 hours ago</small>
          </p>
          <p class="event-item">
            <span class="icon-item-type"><i class="fa fa-star"></i></span>
            <a href="#">ninja</a> starred
            <a href="#">jgthms/bulma</a>
            <small>3 hours ago</small>
          </p>
          <p class="event-item" v-for="n in 10">
            <span class="icon-item-type"><i class="fa fa-star"></i></span>
            <a href="#">username</a> starred
            <a href="#">name/space</a>
            <small>19 hours ago</small>
          </p>
        </div>
      </div>

      <div class="column">
        <nav class="panel">
          <p class="panel-heading">
            Repositories you contribute to
          </p>
          <a class="panel-block is-active" href="#">
            <span class="panel-icon">
              <i class="fa fa-book"></i>
            </span>
            bulma-website
          </a>
          <a class="panel-block" href="#">
            <span class="panel-icon">
              <i class="fa fa-book"></i>
            </span>
            bulma
          </a>
          <a class="panel-block" href="#">
            <span class="panel-icon">
              <i class="fa fa-book"></i>
            </span>
            marksheet
          </a>
          <a class="panel-block" href="#">
            <span class="panel-icon">
              <i class="fa fa-code-fork"></i>
            </span>
            daniellowtw/infBoard
          </a>
          <a class="panel-block" href="#">
            <span class="panel-icon">
              <i class="fa fa-book"></i>
            </span>
            jgthms.github.io
          </a>
          <a class="panel-block" href="#">
            <span class="panel-icon">
              <i class="fa fa-code-fork"></i>
            </span>
            mojs
          </a>
          <a class="panel-block" href="#">
            <span class="panel-icon">
              <i class="fa fa-book"></i>
            </span>
            grumpy-cat
          </a>
        </nav>

        <div class="panel">
          <p class="panel-heading">
            Your Repositories
          </p>
          <p class="panel-tabs">
            <a class="is-active" href="#">All</a>
            <a href="#">Public</a>
            <a href="#">Private</a>
            <a href="#">Sources</a>
            <a href="#">Forks</a>
          </p>
          <ul class="panel-body">
          	<li class="panel-block is-active" href="#">
	          <span class="panel-icon">
	            <i class="fa fa-book"></i>
	          </span>
	          bulma-website
	        </li>

	        <li class="panel-block" href="#" v-for="(value,key) in myClasses">
	          <span class="panel-icon">
	            <i class="fa fa-book"></i>
	          </span>
            <router-link v-bind:to=" '/class/view/' + key" class="nav-item">{{value.contents}}</router-link>
	        </li>
          </ul>

        </div>

      </div>
    </div>
</div>
</template>

<script>
import {firebaseApp} from '@/firebase'

export default {
  name: 'class-index',

  computed:{
    mainClasses: function(){
      return this.$store.getters.allClasses;
    },
    myClasses: function(){
      return this.$store.getters.userClasses;
    },
    starClasses: function(){
      return this.$store.getters.allClasses;
    },
  },

  created(){
    firebaseApp.auth().onAuthStateChanged(user => {
      user && this.$store.dispatch('getMyClasses');
    })
	   this.$store.dispatch('getAllClasses');
  },

}
</script>

<style scoped>
.panel-heading {
    background-color: #f5f7fa;
    border-bottom: 1px solid #d3d6db;
    border-radius: 4px 4px 0 0;
    color: #222324;
    font-size: 18px;
    font-weight: 300;
    padding: 10px;
}
.icon-chevron {
  font-size: 12px;
}
.icon-item-type i {
  font-size:12px;
  padding:6px 15px 6px 6px;
  color:#bbbbbb;
}
.event-timeline hr {
  margin-top: 10px;
}
p.event-item {
  padding: 10px 10px 10px 0;
  border-bottom: 1px solid #f1f1f1;
}
.button.is-light {
    background-color: #eee;
    background-image: -webkit-linear-gradient(#fcfcfc, #eee);
    background-image: linear-gradient(#fcfcfc, #eee);
    border: 1px solid #d5d5d5;
    border-radius: 3px;
    padding: 6px 12px;
    color: #69707a;
}
</style>
