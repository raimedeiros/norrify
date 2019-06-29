import { combineReducers } from 'redux'
import catReducer from './catReducer'
import jokeReducer from './jokeReducer';

const rootReducer = combineReducers({
  categoria: catReducer,
  joke: jokeReducer
})

export default rootReducer