import Vue from 'vue';
import Vuex from 'vuex';

import {
  getProdutos,
  getObservacoes,
  getEmpresas,
  getTransacoes,
  getVendedores
} from '../api/venda';

Vue.use(Vuex);

export const SET_EMPRESAS = 'SET_EMPRESAS';
export const SET_TRANSACOES = 'SET_TRANSACOES';
export const SET_OBSERVACOES = 'SET_OBSERVACOES';
export const SET_VENDEDORES = 'SET_VENDEDORES';
export const SET_PRODUTOS = 'SET_PRODUTOS';

export const LOAD_EMPRESAS = 'LOAD_EMPRESAS';
export const LOAD_TRANSACOES = 'LOAD_TRANSACOES';
export const LOAD_OBSERVACOES = 'LOAD_OBSERVACOES';
export const LOAD_VENDEDORES = 'LOAD_VENDEDORES';
export const LOAD_PRODUTOS = 'LOAD_PRODUTOS';

export default new Vuex.Store({
  state: {
    empresas: [],
    transacoes: [],
    observacoes: [],
    vendedores: [],
    produtos: []
  },

  mutations: {
    [SET_EMPRESAS] (state, payload) {
      state.empresas = payload;
    },
    [SET_TRANSACOES] (state, payload) {
      state.transacoes = payload;
    },
    [SET_OBSERVACOES] (state, payload) {
      state.observacoes = payload;
    },
    [SET_VENDEDORES] (state, payload) {
      state.vendedores = payload;
    },
    [SET_PRODUTOS] (state, payload) {
      state.produtos = payload;
    },
  },

  actions: {
    [LOAD_EMPRESAS] ({commit}) {
      getEmpresas().then(res => {
          commit(SET_EMPRESAS, res.body);
      });
    },
    [LOAD_TRANSACOES] ({commit}) {
      getTransacoes().then(res => {
          commit(SET_TRANSACOES, res.body);
      });
    },
    [LOAD_OBSERVACOES] ({commit}) {
      getObservacoes().then(res => {
          commit(SET_OBSERVACOES, res.body);
      });
    },
    [LOAD_VENDEDORES] ({commit}) {
      getVendedores().then(res => {
          commit(SET_VENDEDORES, res.body);
      });
    },
    [LOAD_PRODUTOS] ({commit}) {
      getProdutos().then((res) => {
        commit(SET_PRODUTOS, res.body);
      });
    },
  }

});
