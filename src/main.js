import Vue from 'vue';
import App from './App.vue';
import store from './store/';

Vue.config.productionTip = false;

const jopa = new Vue({
  store,
  render: h => h(App),
}).$mount('#app');


window.receiveMessage = (id, payload) => {
  jopa.$store.commit('change', {id, ...payload});
}
