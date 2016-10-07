import registrador from './registrador';

import ListaVenda from '../components/pages/Venda/ListaVenda';
import Venda from '../components/pages/Venda/Venda';
import ResumoVenda from '../components/pages/Venda/ResumoVenda';

export default (() => {

  registrador.registrar({
    '/vendas':ListaVenda,
    '/venda':Venda
  });
  registrador.registrar({
    '/resumo':ResumoVenda
  });
})();
