import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import BooststrapVue from 'bootstrap-vue'

Vue.use(BooststrapVue)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false;

Vue.use(require('vue-moment'));

import VueRouterPermissions from "vue-router-permissions";

Vue.use(VueRouterPermissions, router);

new Vue({router, store, render: h => h(App)}).$mount('#app');
