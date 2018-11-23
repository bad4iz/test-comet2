import Vue from 'vue';
import App from './App.vue';
import store from './store/';

Vue.config.productionTip = false;

const jopa = new Vue({
  store,
  render: h => h(App),
}).$mount('#app');


window.receiveMessageBad = (id, payload) => {
  const keys = Object.keys(payload).filter(key => key !== 'id');
  if (keys.length === 0) {
    console.log('not keys');
  }
  keys.forEach((key) => {
    jopa.$store.state.list[id][key] = payload[key];
  });
}

window.receiveMessageYes = (id, payload) => {
  jopa.$store.commit('comet', {id, ...payload});
}



window.sendMessage = (obj) => { console.log(obj)}
