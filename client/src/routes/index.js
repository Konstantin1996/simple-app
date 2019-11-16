import VueRouter from 'vue-router';
import Vue from 'vue';
import Home from '../components/Home'
import Meetups from '../components/Meetups/Meetups'
import CreateMeetup from '../components/Meetups/CreateMeetup'
import Meetup from '../components/Meetups/Meetup'
import Profile from '../components/User/Profile'
import Signup from '../components/User/Signup'
import Signin from '../components/User/Signin'


Vue.use(VueRouter)


const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/meetups', name: 'Meetups', component: Meetups },
  { path: '/meetups/create', name: 'CreateMeetup', component: CreateMeetup },
  // we can use dynamic params as props, to do it we need to add props param
  { path: '/meetups/:id', props: true, name: 'Meetup', component: Meetup },
  { path: '/profile', name: 'Profile', component: Profile },
  { path: '/signin', name: 'Signin', component: Signin },
  { path: '/signup', name: 'Signup', component: Signup },
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router