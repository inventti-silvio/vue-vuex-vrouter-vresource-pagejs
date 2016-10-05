import Vue from 'vue';
import Vuex from 'Vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment: state => state.count++,
    decrement: state => state.count--
  },
  actions: {
    alert: ctx => setTimeout(() => alert(ctx.state.count), 1000),
    increment: ctx => setTimeout(() => ctx.commit('increment'), 1000),
    decrement: ctx => setTimeout(() => ctx.commit('decrement'), 1000),
  }
});
