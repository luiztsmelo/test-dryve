import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

// For simulation
const isAdmin = false

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../pages/Home/index.vue')
  },
  {
    path: '/clientes',
    name: 'clients',
    component: () => import(/* webpackChunkName: "clients" */ '../pages/Clients/index.vue')
  },
  {
    path: '/clientes/novo/:tab',
    name: 'new-client',
    component: () => import(/* webpackChunkName: "new-client" */ '../pages/Clients/NewClient/index.vue')
  },
  {
    path: '/veiculos',
    name: 'vehicles',
    component: () => import(/* webpackChunkName: "vehicles" */ '../pages/Vehicles/index.vue')
  },
  {
    path: '/triangulacao',
    name: 'triangulation',
    component: () => import(/* webpackChunkName: "triangulation" */ '../pages/Triangulation/index.vue')
  },
  {
    path: '/financeiro',
    name: 'finance',
    component: () => import(/* webpackChunkName: "finance" */ '../pages/Finance/index.vue'),
    beforeEnter: (to, from, next) => {
      if (isAdmin) next()
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
