import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

axios.defaults.withCredentials = true;

Vue.use(Vuex);

const state = {
  customers: {},
  columns: ["name", "email", "phone_number"],
  isModalVisible: false,
  destroy: 1,
};

const mutations = {
  SET_CUSTOMERS(state, payload) {
    state.customers = payload;
  },
  SET_MODAL_VISIBLE(state, payload) {
    state.isModalVisible = payload;
  },
  ADD_CUSTOMER(state, payload) {
    state.customers.unshift(payload);
  },
  DESTROY_RESOURCE(state, payload) {
    const index = state.customers.findIndex(u => u.id === payload.id)

    if (index >= 0) {
      Vue.delete(state.customers, index)
    }
  }
};

const actions = {
  async loadCustomers({ commit }) {
    try {
      const response = await axios.get("http://more-shots.test/api/customers");
      commit("SET_CUSTOMERS", response.data);
    } catch (error) {
      commit("SET_CUSTOMERS", {});
    }
  },
  setModalVisible({ commit }, payload) {
    commit("SET_MODAL_VISIBLE", payload);
  },
  async createCustomer({ commit }, payload) {
    try {
      const response = await axios.post(
        "http://more-shots.test/api/customers",
        payload
      );
      commit("ADD_CUSTOMER", response.data);
      commit("SET_MODAL_VISIBLE", false);
    } catch (error) {
      console.log(error);
    }
  },
  async destroy({ commit }, payload) {
    try {
      axios.delete(`http://more-shots.test/api/customers/${payload.id}`)
      commit('DESTROY_RESOURCE', payload)
    } catch (error){
      console.log(error)
    }
  }
};

const getters = {
  customers: (state) => state.customers,
  columns: (state) => state.columns,
  isModalVisible: (state) => state.isModalVisible,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
