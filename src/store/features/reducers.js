import { combineReducers } from 'redux';
import clickCounter from './clickCounter/reducers';
import showCompanies from './showCompanies/reducers';

const rootReducer = combineReducers({
  clickCounter,
  showCompanies,
});
export default rootReducer;