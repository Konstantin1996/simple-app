import axios from 'axios'
import Vue from 'vue'
import { SET_LOADING_FALSE, SET_LOADING_TRUE, SET_MEETUPS, SET_SINGLE_MEETUP } from '../types/types.js'

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

    [SET_MEETUPS](state, payload) {
        state.data = payload;
    },

    [SET_SINGLE_MEETUP](state, payload) {
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
        return state.data;
    }
}


export default {
    state,
    actions,
    getters,
    mutations,
}