import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home'
import aboutus from '@/views/aboutus'
import contact from '@/views/contact'
import login from '@/views/login'
import upcoming from '@/views/upcoming'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'upcoming',
      component: upcoming
    },
    {
      path: '/home',
      name: 'Home',
      component: home
    },
    {
      path: '/about',
      name: 'About Us',
      component: aboutus
    },
    {
      path: '/contact',
      name: 'Contact Us',
      component: contact
    },
    {
      path: '/login',
      name: 'Log In',
      component: login
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
