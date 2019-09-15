import VueRouter from 'vue-router';
import Vue from 'vue';
import Foo from '../components/Foo.vue';
import Bar from '../components/Bar.vue';
import Main from '../components/Main.vue';


Vue.use(VueRouter)

const Error = {
  template: '<div>This url is not correct</div>'
}

const routes = [
  { path: '/', name: 'Main', component: Main },
  { path: '/foo', name: 'Foo', component: Foo },
  { path: '/bar', name: 'Bar', component: Bar },
  { path: '/bar/:id', name: 'BarWithId', component: Bar },
  { path: '*', name: 'Error', Error}
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

export default router