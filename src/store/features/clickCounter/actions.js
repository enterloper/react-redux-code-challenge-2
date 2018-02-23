import types from './types';

function incrementBy1() {
  return {
    type: types.INCREMENT_NUMBER,
  }
}


function decrementBy1(number) {
  return {
    type: types.DECREMENT_NUMBER,
    number
  }
}

function resetNumberToZero(number) {
  return {
    type: types.RESET_TO_ZERO,
    number
  }
}

export default {
  incrementBy1,
  decrementBy1,
  resetNumberToZero,
};