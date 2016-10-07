import * as mutations from './mutations';

export const ADICIONAR_PRODUTO = 'adicionarProduto';

export default {
  [ADICIONAR_PRODUTO] (ctx, produto) {
    ctx.commit(mutations.ADICIONAR_PRODUTO, produto);
  }
};
