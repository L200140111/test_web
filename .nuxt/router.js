import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _ad9b2682 = () => interopDefault(import('../pages/narcissistic.vue' /* webpackChunkName: "pages/narcissistic" */))
const _1e9ad34e = () => interopDefault(import('../pages/ocean.vue' /* webpackChunkName: "pages/ocean" */))
const _7c5e8ccd = () => interopDefault(import('../pages/parity.vue' /* webpackChunkName: "pages/parity" */))
const _fb0276f0 = () => interopDefault(import('../pages/search.vue' /* webpackChunkName: "pages/search" */))
const _23b18dbc = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/narcissistic",
    component: _ad9b2682,
    name: "narcissistic"
  }, {
    path: "/ocean",
    component: _1e9ad34e,
    name: "ocean"
  }, {
    path: "/parity",
    component: _7c5e8ccd,
    name: "parity"
  }, {
    path: "/search",
    component: _fb0276f0,
    name: "search"
  }, {
    path: "/",
    component: _23b18dbc,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
