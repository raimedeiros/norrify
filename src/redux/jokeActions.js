//export const SET_CAT = 'SET_CATEGORIA';

export default {
  setJoke(created, icon, value, categories) {
    return {
      type: 'SET_JOKE', created, icon, value, categories
    }
  }
}