// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VeeValidate from 'vee-validate';
import Vuex from 'vuex'
import { store } from './store'


Vue.config.productionTip = false

Vue.use(VeeValidate);
Vue.use(Vuex);



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,  
  components: { App },
  template: '<App/>'
})
