import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'

/*
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component:App,
  },
  {
    path: '/characters',
    component: () => import('./components/Api1.vue'),
  },
  {
    path: '/spells',
    component: () => import('./components/Api2.vue'),
  },
]

const router = new VueRouter({
  routes,
  mode: 'history', // Para quitar el # de las URLs
});

new Vue({
  render: (h) => h(App),
  router,
  store,
  vuetify,
}).$mount('#app')
*/

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

