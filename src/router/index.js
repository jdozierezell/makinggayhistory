import Vue from 'vue';
import Router from 'vue-router';
import Body from '@/components/Body';
import About from '@/components/About';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Body',
      component: Body,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
  ],
});
