export default {
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
};
