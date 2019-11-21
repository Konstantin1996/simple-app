import axios from 'axios'
import Vue from 'vue'
import { SET_LOADING_FALSE, SET_LOADING_TRUE, SET_MEETUPS, SET_SINGLE_MEETUP, CREATE_MEETUP, FILTER_MEETUP} from '../types/types.js'

const state = {
    data: [],
};

const actions = {
    async fetchMeetups({ state, commit, rootState}) {
        commit(SET_LOADING_TRUE);
        const meetups = await axios.get('http://localhost:5000/api/meetups');
        commit(SET_MEETUPS, meetups.data);
        commit(SET_LOADING_FALSE);
    },

    async fetchSingleMeetup({ commit }, id) {
        commit(SET_LOADING_TRUE);
        const singleMeetup = await axios.get(`http://localhost:5000/api/meetups/${id}`);
        commit(SET_SINGLE_MEETUP, singleMeetup.data);
        commit(SET_LOADING_FALSE);
    },

    async createMeetup({ commit }, payload) {
        const meetup = {
            title: payload.title,
            location: payload.location,
            imageURL: payload.imageURL,
            desc: payload.desc,
            date: payload.date,
        }
        
        await axios.post('http://localhost:5000/api/meetups/add', meetup);

        commit(CREATE_MEETUP, meetup);
    },

    async filterMeetups({commit}, payload) {
    
        const filteredMeetup = await axios.get(`http://localhost:5000/api/meetups/filter/${payload}`);

        commit(FILTER_MEETUP, filteredMeetup.data);
        // console.log(filteredMeetup);
    }
};

const mutations = {

    [SET_MEETUPS](state, payload) {
        state.data = payload;
    },

    [SET_SINGLE_MEETUP](state, payload) {
        Vue.set(state, 'data', payload);
    },

    [CREATE_MEETUP](state, payload) {  
        state.data.push(payload);
    },
    
    [FILTER_MEETUP](state, payload) {
        state.data = [...payload];
    }
};

const getters = {
    meetups(state) {
        return state.data;
    },

    featuredMeetups(state, getters) {
        return getters.data.slice(0,3)
    },

    singleMeetup(state) {
        return state.data;
    }
}


export default {
    state,
    actions,
    getters,
    mutations,
}