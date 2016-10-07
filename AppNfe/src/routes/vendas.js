import registrador from './registrador';

//import ListaVenda from '../components/pages/Venda/ListaVenda';
import Venda from '../components/pages/Venda/Venda';

export default (() => {

  registrador.registrar({
    //'/vendas':ListaVenda,
    '/venda':Venda
  });

})();
