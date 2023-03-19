import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Home from './components/Home';
import About from './components/About';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: '/about', component: About },
    { path: '/', component: Home }
  ],
  mode: 'history'
});

new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
