import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import apis from '../http/apis'



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
    // meta: {
    //   isLogin: true
    // },
    children: [
      {
        path: '/foundMusic',
        component: () => import('../components/FoundMusic.vue')
      },
      {
        path: '/musicList2',
        component: () => import('../components/musicList2.vue')
      }

    ],
    //验证登录状态
    // beforeEnter: async (to, from, next) => {
    //   const token = localStorage.token
    //   if (token) {
    //     // 发送到后端进行token验证是否过期 
    //     const data = await apis.users.getUserInfo()
    //     console.log(data,'111');
    //     if (data.data.code == 200) {
    //       next()
    //     }
    //   } else {
    //     alert('你还没未登录，请先登录')
    //     next()
    //   }
    // },
  },

  // {
  //   path: '/header',
  //   name: 'Header',
  //   component: Header
  // },
  // {
  //   path: '/main',
  //   name: 'Main',
  //   component: Main,


  // },
  // {
  //   path: '/foot',
  //   name: 'Foot',
  //   component: Foot
  // }

]

const router = new VueRouter({
  mode: 'history',

  routes
})

export default router
