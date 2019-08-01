import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)
import login from './components/login.vue'
import register from './components/login/index.vue'

import index from './components/index.vue'
import showfriend from './components/showfriend/index.vue'

import weixin from './components/weixin/index.vue'
import weixinSelect from './components/weixin/select.vue'

import tongxunlu from './components/tongxunlu/index.vue'
import add from './components/tongxunlu/add/index.vue'

export default new Router({
  routes: [
    {path: '/home',name: 'home',component: Home},
    {path: '/about',name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {path:'/login',component:login},
    {path:'/login/register',component:register},

    {path:'/',component:index},
    {path:'/showfriend',component:showfriend},

    {path:'/weixin',component:weixin},
    {path:'/weixin/select',component:weixinSelect},
    

    {path:'/tongxunlu',component:tongxunlu},
    {path:'/tongxunlu/add',component:add},
  ]
})
