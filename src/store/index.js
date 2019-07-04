import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    employeeData: localStorage.getItem('setEmployeeData')?JSON.parse(localStorage.getItem('setEmployeeData')):[]
  },
  mutations,
  getters
})