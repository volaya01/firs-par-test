import { ANIMALS_CONFIG } from '../config.js';
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

export default {
    getAnimalsAPI: function(){
        return axios.get(ANIMALS_CONFIG.ANIMAL_API);
    },

    postAnimalsAPI: function (data) {
      return axios.post(ANIMALS_CONFIG.ANIMAL_API,data)
    },

    deleteAnimalsAPI: function (data) {
        return axios.delete(ANIMALS_CONFIG.ANIMAL_API,data)
    },

    updateAnimalsAPI: function (data) {
        return axios.put(ANIMALS_CONFIG.ANIMAL_API, data)
    }
}