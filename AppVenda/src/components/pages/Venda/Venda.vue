<template lang="html">
  <div>
    <h1>Venda</h1>
    <p>Valor Total: {{valorTotal}}</p>
    <p>Quantia Produtos: {{quantiaProdutos}}</p>

    <ul>
      <li v-for="produto in produtos">{{produto.nome}} - {{produto.quantidade}}</li>
    </ul>

    <p><input v-model="nome" type="text" name="name" placeholder="nome produto" value=""></p>
    <p><input v-model="valor" type="text" name="name" placeholder="valor produto" value=""></p>

    <button @click='adicionarProduto' type="button" name="button">Adicionar</button>
  </div>

</template>

<script>
import store from '../../../stores/VendaV2';

export default {
  data() {
    return {
      nome: '',
      valor: ''
    };
  },
  computed: {
    valorTotal () {
      return store.getters.valorTotal;
    },
    quantiaProdutos () {
      return store.getters.quantiaProdutos;
    },
    produtos () {
      return store.state.listaProdutos;
    }
  },
  ready() {},
  attached() {},
  methods: {
    adicionarProduto () {
      store.dispatch('adicionarProduto', {
        nome:this.nome,
        valorUnitario:this.valor,
        quantidade: 1})
    }
  },
  components: {}
};
</script>

<style lang="css">
</style>
