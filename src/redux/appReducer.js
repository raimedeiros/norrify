const initialState = { categoria: '' }

export default function (state = initialState, action) {
  switch (action.type) {
    case 'SET_CATEGORIA':
      return { ...state, categoria: action.payload }
    default:
      return state
  }
}