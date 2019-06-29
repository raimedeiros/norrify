import { combineReducers } from 'redux'
import appReducer from './appReducer'
import jokeReducer from './jokeReducer';

const rootReducer = combineReducers({
  categoria: appReducer,
  joke: jokeReducer
})

export default rootReducer