import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/components',
    name: 'components',
    component: () => import('../views/Components.vue'),
    children: [
      {
        alias: '',
        path: 'button',
        component: () => import('../components/Components/Button.vue')
      },
      {
        alias: '',
        path: 'alert',
        component: () => import('../components/Components/Alert.vue')
      },
      {
        alias: '',
        path: 'dialog',
        component: () => import('../components/Components/Dialog.vue')
      },
      {
        path: 'card',
        component: () => import('../components/Components/Card.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
