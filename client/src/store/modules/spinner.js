
const state = {
    isLoading: true,
};

const getters = {
    isSpinnerLoading: (state) => {
        return state.isLoading;
    }
};

const mutations = {
    SET_LOADING_TRUE: () => {
        state.isLoading = true;
    },

    SET_LOADING_FALSE: () => {
        state.isLoading = false;
    }
};

export default {
    state,
    getters,
    mutations,
}