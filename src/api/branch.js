import { ANIMALS_CONFIG } from '../config.js';
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

export default {

    getBranchAPI: function(){
        return axios.get(ANIMALS_CONFIG.BRANCH_API);
    },

    postBranchAPI: function (data) {
        return axios.post(ANIMALS_CONFIG.BRANCH_API,data)
    },

    updateBranchAPI: function (data) {
        return axios.put(ANIMALS_CONFIG.BRANCH_API, data)
    }
}