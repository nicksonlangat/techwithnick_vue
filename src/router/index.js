import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: Home
  // },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/Contact.vue')
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import('../views/Projects.vue')
  },
  {
    path: '/',
    name: 'home',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/experience',
    name: 'experience',
    component: () => import('../views/Experience.vue')
  },
  {
    path: '/detail',
    name: 'detail',
    component: () => import('../views/ProjectDetail.vue')
  },
  {
    path: '/notifications',
    name: 'notifications',
    component: () => import('../views/Notifications.vue')
  },
  {
    path: '/messages',
    name: 'messages',
    component: () => import('../views/Messages.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
