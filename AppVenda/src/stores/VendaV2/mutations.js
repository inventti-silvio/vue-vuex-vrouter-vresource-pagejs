import {byProp} from '../../utils/array';

export const ADICIONAR_PRODUTO = 'adicionaProduto';

export default {
  [ADICIONAR_PRODUTO] (state, produto) {
    let p = state.listaProdutos.find(byProp('nome', produto));

    if(p) {
      p.quantidade++;
      p.valorUnitario = produto.valorUnitario;
      return;
    }

    state.listaProdutos.push(produto);
  }
};
