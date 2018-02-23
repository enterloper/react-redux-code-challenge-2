import { combineReducers } from 'redux';
import clickCounter from './clickCounter/reducers';

const rootReducer = combineReducers({
  clickCounter,
});
export default rootReducer;