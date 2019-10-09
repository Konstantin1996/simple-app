import Vue from 'vue'
import App from './App.vue'
import router from './routes'
import vuetify from './plugins/vuetify';
import {store} from '@/store';
import * as firebase from 'firebase';

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  store,
  created() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAMBWsvDqqjmj2dWnpzyKpeoajhJbN_lzY',
      authDomain: 'simple-app-meetup.firebaseapp.com',
      databaseURL: 'https://simple-app-meetup.firebaseio.com',
      projectId: 'simple-app-meetup',
      storageBucket: 'simple-app-meetup.appspot.com',
      messagingSenderId: '786014050739',
      appId: '1:786014050739:web:f43b8704000731d29d53c6',
      measurementId: 'G-7298GJCPZ9'
    })
  },
  render: h => h(App),
}).$mount('#app')
