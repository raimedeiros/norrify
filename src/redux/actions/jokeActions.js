export default {
  setJoke(created, icon, value, categories) {
    return {
      type: 'SET_JOKE', created, icon, value, categories
    }
  }
}