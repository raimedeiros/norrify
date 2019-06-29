const initialState = { created: 'created', icon: 'icon', value: 'value', categories: [] }

export default function (state = initialState, action) {
  switch (action.type) {
    case 'SET_JOKE':
      return { ...state, created: action.created, icon: action.icon, value: action.value, categories: action.categories }
    default:
      return state
  }
}