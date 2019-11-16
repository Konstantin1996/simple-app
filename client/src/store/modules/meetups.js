import axios from 'axios'
import Vue from 'vue'

const state = {
    data: [],
};

const actions = {
    async fetchMeetups({ state, commit, rootState}) {
        const meetups = await axios.get('http://localhost:5000/api/meetups');
        commit('setMeetups', meetups.data);
        commit('SET_LOADING_FALSE');
    },

    async fetchSingleMeetup({ commit }, id) {
        commit('SET_LOADING_TRUE');
        const singleMeetup = await axios.get(`http://localhost:5000/api/meetups/${id}`);
        commit('setSingleMeetup', singleMeetup.data);
        commit('SET_LOADING_FALSE');
    },

    createMeetup({ commit }, payload) {
        const meetup = {
            id: payload.id,
            title: payload.title,
            location: payload.location,
            imageURL: payload.imageURL,
            desc: payload.desc,
            date: payload.date,
        }
        commit('createMeetupMutation', meetup);
    }
};

const mutations = {

    setMeetups(state, payload) {
        state.data = payload;
    },

    setSingleMeetup(state, payload) {
        Vue.set(state, 'data', payload);
    },

    createMeetupMutation(state, payload) {  
        state.data.push(payload);
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
        return state.meetups;
    }
}


export default {
    state,
    actions,
    getters,
    mutations,
}