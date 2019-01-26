import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.config.productionTip = false;
axios.defaults.baseURL = process.env.VUE_APP_SERVER;

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app');
