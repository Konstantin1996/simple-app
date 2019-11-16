import axios from 'axios'
import Vue from 'vue'

const state = {
    meetups: []
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
        console.log(singleMeetup);
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
        state.meetups = payload;
    },

    setSingleMeetup(state, payload) {
        Vue.set(state, 'meetups', payload);
        // state.meetups.push(payload); 
    },

    createMeetupMutation(state, payload) {  
        state.meetups.push(payload);
    }       
};

const getters = {
    meetups(state) {
        return state.meetups;
    },

    featuredMeetups(state, getters) {
        return getters.meetups.slice(0,3)
    },

    singleMeetup(state) {
        return state.meetups;
        // return (id) => {
        //     return state.meetups.find((meetup) => meetup.id === id);
        // }
    }
}


export default {
    state,
    actions,
    getters,
    mutations,
}