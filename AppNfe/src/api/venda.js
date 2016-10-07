import {get} from './http';

export const getProdutos = () => {
  return get('produtos');
};

export const getObservacoes = () => {
  return get('observacoes');
};

export const getEmpresas = () => {
  return get('empresas');
};

export const getTransacoes = () => {
  return get('transacoes');
};

export const getVendedores = () => {
  return get('vendedores');
};
