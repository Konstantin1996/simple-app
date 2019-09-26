import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        loadedMeetups: [
            {
                imageURL:
                    "https://wp.zillowstatic.com/streeteasy/2/shutterstock_695847865-bcd2e5.jpg",
                id: "1",
                title: "Meetup NY",
                desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, nobis! Ea omnis recusandae blanditiis ducimus quod nemo facere tempora at harum odit, porro necessitatibus asperiores.',
                date: '2019-06-03'
            },
            {
                imageURL:
                    "http://services.travelsavers.com/AMGService.svc/REST/GetImage?ImageID=4688592b-22a3-e911-be17-782bcb66a2f2&Width=450",
                id: "2",
                title: "Meetup California",
                desc: ',Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, nobis! Ea omnis recusandae blanditiis ducimus quod nemo facere tempora at harum odit, porro necessitatibus asperiores.',
                date: '2019-06-03'
            },
            {
                imageURL: "https://www.akdmc.com/media/2822/russia.jpg",
                id: "3",
                title: "Meetup Russia",
                desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, nobis! Ea omnis recusandae blanditiis ducimus quod nemo facere tempora at harum odit, porro necessitatibus asperiores.',
                date: '2019-06-03'
            }
        ],
        user: {
            id: 'random123',
            registeredMeetups: ['blabla']
        }

    },
    mutations: {
        createMeetupMutation(state, payload) {  
            state.loadedMeetups.push(payload);
        }        
    },
    actions: {
        createMeetup({ commit }, payload) {
            const meetup = {
                id: payload.id,
                title: payload.title,
                location: payload.location,
                imageURL: payload.imageURL,
                desc: payload.desc,
                date: payload.date,
            }
            // Firebase call

            commit('createMeetupMutation', meetup);
        }
    },
    getters: {
        loadedMeetups(state) {
            return state.loadedMeetups.sort((meetupA, meetupB) => meetupA.date - meetupB.date);
        },

        featuredMeetups(state, getters) {
            return getters.loadedMeetups.slice(0,3)
        },

        loadMeetup(state) {
            return (id) => {
               return state.loadedMeetups.find((meetup) => meetup.id === id);
            }
        }
    },
})