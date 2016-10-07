<template lang="html">
<div>
  <h1>Venda</h1>
  <h3>Produtos</h3>
  {{selecionado}}
  <select v-model='selecionado'>
    <option
      v-for='produto in produtosexy'
      v-bind:value='produto.id'>{{produto.nome}}</option>
  </select>
  <ul>
    <li v-for='produto in produtos'>{{produto.nome}}</li>
  </ul>
<h3>Empresas</h3>
<pre>{{empresas}}</pre>

<h3>Transacoes</h3>
<pre>{{transacoes}}</pre>

<h3>Observações</h3>
<pre>{{observacoes}}</pre>

<h3>Vendedores</h3>
<pre>{{vendedores}}</pre>

<h3>Produtos</h3>
<pre>{{produtos}}</pre>
</div>
</template>

<script>
import store, {
  LOAD_EMPRESAS,
  LOAD_TRANSACOES,
  LOAD_OBSERVACOES,
  LOAD_VENDEDORES,
  LOAD_PRODUTOS
} from '../../../stores/VendaStore';

export default {
  data() {
    return {
      selecionado: null
    };
  },
  computed: {
    empresas () {
      return JSON.stringify(store.state.empresas, '', 2);
    },
    transacoes () {
      return JSON.stringify(store.state.transacoes, '', 2);
    },
    observacoes () {
      return JSON.stringify(store.state.observacoes, '', 2);
    },
    vendedores () {
      return JSON.stringify(store.state.vendedores, '', 2);
    },
    produtos () {
      return JSON.stringify(store.state.produtos, '', 2);
    },
    produtosexy () {
      return store.state.produtos;
    }
  },
  created() {
    store.dispatch(LOAD_EMPRESAS);
    store.dispatch(LOAD_TRANSACOES);
    store.dispatch(LOAD_OBSERVACOES);
    store.dispatch(LOAD_VENDEDORES);
    store.dispatch(LOAD_PRODUTOS);
  },
  methods: {},
  components: {}
};
</script>

<style lang="css">
</style>
