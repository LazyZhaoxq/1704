import Vue from 'vue'
import Router from 'vue-router'
import All from '@/components/All'
import Active from '@/components/Active'
import Complete from '@/components/Complete'

Vue.use(Router)

export default new Router({
  routes: [
  	{
  		path:'/all',
  		name:'all',
  		component: All
  	},
  	{
  		path:'/active',
  		name:'active',
  		component: Active
  	},
  	{
  		path:'/complete',
  		name:'complete',
  		component: Complete
  	},

    {
      path: '/',
      name: 'all',
      component: All
    }
  ]
})
