import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

axios.defaults.withCredentials = true;

Vue.use(Vuex);

const state = {
  user: {},
};

const mutations = {
  SET_USER(state, payload) {
    state.user = payload;
  },
};

const actions = {
  async login({ commit }, payload) {
    try {
      const response = await axios.post(
        "http://more-shots.test/api/login",
        payload
      );
      commit("SET_USER", response.data.data);
    } catch (error) {
      commit("SET_USER", {});
      console.log(error.response.statusText);
    }
  },
};

const getters = {
  user: (state) => state.user,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
