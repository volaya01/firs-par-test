import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//require('es6-promise').polyfill()

import {animals} from "../modules/animals"
import {branches} from "../modules/branches";
import  {user} from "../modules/user";

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: { animals, branches, user }
})
