export default {
    saveTopic({ commit }, name) {
        commit('setTopic', name);
    },

    saveTab({ commit }, name) {
        commit('setTabName', name);
    }
};
