import VueRouter from 'vue-router';
import Vue from 'vue';
import Foo from '../components/Foo.vue';
import Bar from '../components/Bar.vue';


Vue.use(VueRouter)

const routes = [
  { path: '/foo', name: 'Foo', component: Foo },
  { path: '/bar', name: 'Bar', component: Bar },
  { path: '/bar/:id', name: 'BarWithId', component: Bar }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

export default router