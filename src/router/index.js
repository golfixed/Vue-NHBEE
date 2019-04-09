import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home'
import aboutus from '@/views/aboutus'
import survey from '@/views/survey'
import survey_f1 from '@/views/survey_fill'
import contact from '@/views/contact'
import login from '@/views/login'
import upcoming from '@/views/upcoming'
import research from '@/views/research'
import news from '@/views/news'
import news_article from '@/views/news_article'

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
    },
    {
      path: '/research',
      name: 'Research',
      component: research
    },
    {
      path: '/news',
      name: 'News',
      component: news
    },
    {
      path: '/news/article',
      name: 'Article',
      component: news_article
    },
    {
      path: '/survey',
      name: 'Survey',
      component: survey
    },
    {
      path: '/form',
      name: 'Survey_f1',
      component: survey_f1
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
