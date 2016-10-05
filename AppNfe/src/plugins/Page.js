
let renderizador = (Componente) => {
  return () => {
    new Vue({
      replace: false,
      el: '#body',
      render: h => h(Componente)
    });
  };
};

class Page {
  constructor() {
    this.page = page;
  }

  renderizar (componente) {
    renderizador(componente);
  }

  registrar (rota, componente) {
    this.page(rota, this.renderizar(componente));
  }

  iniciar () {
    this.page.start({ hashbang: true });
  }
}
