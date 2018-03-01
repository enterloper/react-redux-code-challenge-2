import types from './types';
import { createDefaultReducer } from '../../helpers'

const initialState = {
  number: 0
};

const incrementNumberHandler = (state, payload) => {
  const number = state.number + 1
  return {
    ...state,
    number
  }
};

const decrementNumberHandler = (state, payload) => {
  const number = state.number - 1
  return {
    ...state,
    number
  }
};

const resetNumberHandler = (state, payload) => {
  return {
    ...state,
    number: 0
  }
}

const actionMap = {
  [types.INCREMENT_NUMBER]: incrementNumberHandler,
  [types.DECREMENT_NUMBER]: decrementNumberHandler,
  [types.RESET_TO_ZERO]: resetNumberHandler
};

export default createDefaultReducer(actionMap, initialState)