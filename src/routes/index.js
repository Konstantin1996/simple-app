import VueRouter from 'vue-router';
import Vue from 'vue';
import Home from '@/components/Home'
import Meetups from '@/components/Meetups/Meetups'
import CreateMeetup from '@/components/Meetups/CreateMeetup'
import Profile from '@/components/User/Profile'
import Signup from '@/components/User/Signup'
import Signin from '@/components/User/Signin'


Vue.use(VueRouter)


const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/meetups', name: 'Meetups', component: Meetups },
  { path: '/meetups/create', name: 'CreateMeetup', component: CreateMeetup },
  { path: '/profile', name: 'Profile', component: Profile },
  { path: '/signin', name: 'Signin', component: Signin },
  { path: '/signup', name: 'Signup', component: Signup },
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

export default router