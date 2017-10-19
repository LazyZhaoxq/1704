import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Channel from '@/components/Channel'
import Hot from '@/components/Hot'
import search from '@/components/search'
import my from '@/components/my'
import register from '@/components/register'
import login from '@/components/login'
import vedio from '@/components/vedio'
import donghuaX from '@/components/donghuaX'
import fanjv from '@/components/fanjv'
import guochuang from '@/components/guochuang'
import yinyue from '@/components/yinyue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/channel',
      name:'Channel',
      component:Channel,
      children:[{
        path:'/channel/donghua',
        component:donghuaX,
      },
      {
        path:'/channel/fanjv',
        component:fanjv
      },{
        path:'/channel/guochuang',
        component:guochuang
      },
      {
        path:'/channel/yinyue',
        component:yinyue
      }]
    },

    {
      path:'/vedio',
      name:'vedio',
      component:vedio
    },
    {
      path:'/my',
      name:'my',
      component:my
    },
    {
      path:'/home',
      name:'Home',
      component:Home
    },
    {
      path:'/search',
      name:'search',
      component:search,
    },
    {
      path:'/register',
      name:'register',
      component:register
    },
    {
      path:'/login',
      name:'login',
      component:login
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
