import Vue from 'vue';
import Vuex from 'vuex';

import {byProp} from '../../utils/array';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    id: 0,
    listaProdutos: [],
    listaPagamentos: [],
    cliente: null
  },
  mutations: {
    adicionarProduto (state, produto) {
      let p = state.listaProdutos.find(byProp('nome', produto));

      if(p) {
        p.quantidade++;
        p.valorUnitario = produto.valorUnitario;
        return;
      }

      state.listaProdutos.push(produto);
    }
  },
  actions: {
    adicionarProduto (ctx, produto) {
      http.get().then(res => {
        ctx.commit('adicionarProduto', res.produto);
      });
    }
  },
  getters: {
    valorTotal: (state, getters) => {
      let total = 0;
      if(getters.quantiaProdutos === 0) {
        return total;
      }

      for (var i = 0; i < state.listaProdutos.length; i++) {
        let produto = state.listaProdutos[i];
        total += produto.valorUnitario * produto.quantidade;
      }
      return total;
    },
    quantiaProdutos: state => {
      return state.listaProdutos.length;
    }
  }
});
