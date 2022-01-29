import Vue from 'vue'
import Router from 'vue-router'

import { extendRoutes, scrollBehavior } from '~/.nuxt/routerHelper.modules'

Vue.use(Router)

export function createRouter() {
  return new Router({
    mode: 'history',
    base: '/',
    routes: extendRoutes(),
    scrollBehavior,
  })
}
