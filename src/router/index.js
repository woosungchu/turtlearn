import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Law from '@/components/Law'
import TurtleAuth from '@/components/common/TurtleAuth'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/law', name: 'Law', component: Law },
    { path: '/auth', name: 'Auth', component: TurtleAuth }
  ]
})
