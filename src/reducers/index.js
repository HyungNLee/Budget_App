import { combineReducers } from 'redux';
import transactionListReducer from './transactionListReducer';
import uiStateReducer from './uiStateReducer';
import categoriesListReducer from './categoriesListReducer';

const rootReducer = combineReducers({
  uiState: uiStateReducer,
  categoriesList: categoriesListReducer,
  transactionList: transactionListReducer,
});

export default rootReducer;