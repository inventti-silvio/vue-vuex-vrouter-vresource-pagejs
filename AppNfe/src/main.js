import Vue from 'vue';
import Vuex from 'vuex';
import App from './App';
import A from './components/pages/PaginaA';
import B from './components/pages/PaginaB';

Vue.use(Vuex);

let renderer = (Component) => {
  return () => {
    new Vue({
      replace: false,
      el: '#body',
      render: h => h(Component)
    });
  };
};

const Counter = {
  template: `<div>{{ count }}</div>`,
  computed: {
    count () {
      return store.state.count;
    }
  }
};

console.log('teste');
//page.base('/AppNfe');
page('/AppNfe', renderer(App));
page('/AppNfe/a', renderer(A));
page('/AppNfe/b', renderer(B));
page.start();
