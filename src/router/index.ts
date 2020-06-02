import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../pages/Backoffice/Home/Home.vue')
  },
  {
    path: '/clientes',
    name: 'clients',
    component: () => import(/* webpackChunkName: "clients" */ '../pages/Backoffice/Clients.vue')
  },
  {
    path: '/clientes/novo',
    name: 'new-client',
    component: () => import(/* webpackChunkName: "new-client" */ '../pages/Backoffice/NewClient.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
