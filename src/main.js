import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Home from './components/Home'
import About from './components/About'

//Vue.config.productionTip = false
Vue.use(VueRouter);
const routes = [
  { path: '/about', component: About },
  { path: '/', component: Home }
];
const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App),
})
