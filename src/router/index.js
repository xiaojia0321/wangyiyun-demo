import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Header from '../views/Header.vue'
import Main from '../views/Main.vue'
import Foot from '../views/Foot.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'

  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    // children: [
    //   {
    //     path: '/header',
    //     components: () => import('../components/Header.vue')
    //   },
    //   {
    //     path:'/main',
    //     components: () => import('../components/Main.vue')
    //   },
    //   {
    //     path:'foot',
    //     components:() => import('../components/Foot.vue')
    //   }
    // ]
  },
  {
    path: '/header',
    name: 'Header',
    component: Header
  },
  {
    path: '/main',
    name: 'Main',
    component: Main,

  },
  {
    path: '/foot',
    name: 'Foot',
    component: Foot
  }

]

const router = new VueRouter({
  mode: 'history',

  routes
})

export default router
