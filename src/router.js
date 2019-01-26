import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Dreamland from './views/Dreamland.vue'
import Portfolio from './views/Portfolio.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/dreamland',
      name: 'dreamland',
      component: Dreamland
    },
	  {
		  path: '/portfolio',
		  name: 'portfolio',
		  component: Portfolio
	  },
  ]
})
