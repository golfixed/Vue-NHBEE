import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import aboutus from '@/components/aboutus'
import contact from '@/components/contact'
import login from '@/components/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
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
      path: '/admin',
      name: 'Admin',
      component: login
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
