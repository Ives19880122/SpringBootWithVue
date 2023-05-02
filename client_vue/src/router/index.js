import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/page1',
    name: 'page1',
    component: () => import('../views/Page_1.vue')
  },
  {
    path: '/page2',
    name: 'page2',
    component: () => import('../views/Page_2.vue')
  },  
  {
    path: '/page3',
    name: 'page3',
    component: () => import('../views/Page_3.vue')
  }
]

const router = new VueRouter({
  mode:'history',
  base:'/app/vue/',
  routes
})

export default router
