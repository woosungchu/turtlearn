<template>
<div>
  <div class="column is-10 is-offset-1">
    <div class="columns">
    
      <div class="column is-8">88
      </div>
      
      <div class="column is-4">44
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'class',

  data () {
    return {
      msg: 'Welcome to Home'
    }
  }

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
