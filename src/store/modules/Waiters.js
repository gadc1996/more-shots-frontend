import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

axios.defaults.withCredentials = true;

Vue.use(Vuex);

const state = {
  resources: {},
  isModalVisible: false,
  storeResource: true,
  pageTitle: "Waiters",
  columns: [
    "full_name", 
    "email", 
    "phone_number"
  ],
};

const mutations = {
  SET_RESOURCES(state, payload) {
    state.resources = payload;
  },
  SET_MODAL_VISIBLE(state, payload) {
    state.isModalVisible = payload;
  },
  SET_STORE_RESOURCE(state, payload) {
    state.storeResource = payload;
  },
  ADD_RESOURCE(state, payload) {
    state.resources.unshift(payload);
  },
  DESTROY_RESOURCE(state, payload) {
    const index = state.resources.findIndex((u) => u.id === payload.id);

    if (index >= 0) {
      Vue.delete(state.resources, index);
    }
  },
  UPDATE_RESOURCE(state, payload) {
    const index = state.resources.findIndex((u) => u.id === payload.id);

    if (index >= 0) {
      Vue.set(state.resources, index, payload);
    }
  },
};

const actions = {
  async loadResources({ commit }) {
    try {
      const response = await axios.get("http://more-shots.test/api/waiters");
      console.log(response.data.data)
      commit("SET_RESOURCES", response.data.data);
    } catch (error) {
      commit("SET_RESOURCES", {});
    }
  },
  async store({ commit }, payload) {
    try {
      const response = await axios.post(
        "http://more-shots.test/api/waiters",
        payload
      );
      commit("ADD_RESOURCE", response.data.data);
      commit("SET_MODAL_VISIBLE", false);
    } catch (error) {
      console.log(error);
    }
  },
  async update({ commit }, payload) {
    try {
      const response = await axios.put(
        `http://more-shots.test/api/waiters/${payload.id}`,
        payload
      );
      commit("UPDATE_RESOURCE", response.data.data);
      commit("SET_MODAL_VISIBLE", false);
    } catch (error) {
      console.log(error);
    }
  },
  async destroy({ commit }, payload) {
    try {
      axios.delete(`http://more-shots.test/api/waiters/${payload.id}`);
      commit("DESTROY_RESOURCE", payload);
    } catch (error) {
      console.log(error);
    }
  },
  setModalVisible({ commit }, payload) {
    commit("SET_MODAL_VISIBLE", payload);
  },
  setAddResource({ commit }, payload) {
    commit("SET_STORE_RESOURCE", payload);
  },
};

const getters = {
  columns: (state) => state.columns,
  isModalVisible: (state) => state.isModalVisible,
  pageTitle: (state) => state.pageTitle,
  resources: (state) => state.resources,
  storeResource: (state) => state.storeResource,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};



