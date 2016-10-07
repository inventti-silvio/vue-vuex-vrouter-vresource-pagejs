import page from 'page';
import renderizador from './renderizador';

export default {
  registrar (rotas) {
    for (var rota in rotas) {
      if (rotas.hasOwnProperty(rota)) {
        let componente = rotas[rota];
        page(rota, renderizador(componente));
      }
    }
  },

  iniciar () {
    page.start();
  }
};
