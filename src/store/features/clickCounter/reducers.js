import types from './types';

const initialState = {
  number: 0
};

export default function(state = initialState, action) {
  switch(action.type) {
    case types.INCREMENT_NUMBER: {
      const newNumber = state.number + 1;
      return {
        ...state,
        number: newNumber,
      };
    }
    case types.DECREMENT_NUMBER: {
      const newNumber = state.number - 1;
      return {
        ...state,
        number: newNumber,
      };
    }
    case types.RESET_TO_ZERO: {
      return {
        ...state,
        number: 0,
      };
    }
    default:
      return state;
  }
}