//export const SET_CAT = 'SET_CATEGORIA';

export default {
  setCategoria(categoria) {
    return {
      type: 'SET_CATEGORIA', payload: categoria
    }
  }
}