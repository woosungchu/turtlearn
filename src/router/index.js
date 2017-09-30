import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Class from '@/components/class/ClassIndex'
import ClassNew from '@/components/class/ClassNew'
import ClassView from '@/components/class/ClassView'
import Law from '@/components/Law'
import TurtleAuth from '@/components/common/TurtleAuth'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'Home', component: Class },
    { path: '/law', name: 'Law', component: Law },
    { path: '/class', name: 'Class', component: Class },
    { path: '/class/new', name: 'ClassNew', component: ClassNew },
    { path: '/class/view/:id', name: 'ClassView', component: ClassView },
    { path: '/auth', name: 'Auth', component: TurtleAuth }
  ]
})
