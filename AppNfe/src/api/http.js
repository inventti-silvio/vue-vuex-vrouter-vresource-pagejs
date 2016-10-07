import Vue from 'vue';
import Resource from 'vue-resource';

Vue.use(Resource);

Vue.http.options.root = 'http://localhost:3000';

export const get = (url, data) => {
  return Vue.http.get(url, data);
};
