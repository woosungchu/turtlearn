import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Law from '@/components/Law'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/law', name: 'Law', component: Law }
  ]
})
