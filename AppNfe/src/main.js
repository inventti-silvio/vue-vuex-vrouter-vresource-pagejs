import Vue from 'vue';
import Vuex from 'vuex';
import App from './App';
import A from './components/pages/PaginaA';
import B from './components/pages/PaginaB';

import StorePage from './components/pages/StorePage';

let renderer = (Component) => {
  return () => {
    new Vue({
      replace: false,
      el: '#body',
      render: h => h(Component)
    });
  };
};

//page.base('/AppNfe');
page('/AppNfe', renderer(App));
page('/AppNfe/a', renderer(A));
page('/AppNfe/b', renderer(B));
page('/AppNfe/store', renderer(StorePage));
page.start();
