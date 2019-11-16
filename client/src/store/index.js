import Vue from 'vue';
import Vuex from 'vuex';
import meetups from './modules/meetups'
import spinner from './modules/spinner';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        rootValue: true,
    },
    modules: {
        meetups,
        spinner
    },
})