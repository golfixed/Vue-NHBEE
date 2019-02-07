import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbvue/build/css/mdb.css'
import VueI18n from 'vue-i18n'
import messages from './locales'
import VueCarousel from 'vue-carousel'

Vue.config.productionTip = false

Vue.use(VueCarousel)
Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: 'en', // set locale
  messages // set locale messages
})

new Vue({
  i18n,
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App)
}).$mount('#app')
