import Vue from 'vue';

export default (Pagina) => {
  return () => {
    let body = document.getElementsByTagName('body')[0];
    body.innerHTML = '<div id="app"></div>';
    new Vue({
      el: '#app',
      render: h => h(Pagina)
    });
  };
};
