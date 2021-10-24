import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

axios.defaults.withCredentials = true;

Vue.use(Vuex);

const state = {
  customers: {},
  columns: ["name", "email", "phone_number"],
  isModalVisible: false,
};

const mutations = {
  SET_CUSTOMERS(state, payload) {
    state.customers = payload;
  },
  SET_MODAL_VISIBLE(state, payload) {
    state.isModalVisible = payload;
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
    commit("SET_MODAL_VISIBLE", payload)
  },
  submitUser() {
    console.log('user submited')
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
