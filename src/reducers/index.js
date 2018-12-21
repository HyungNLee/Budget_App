import { combineReducers } from 'redux';
import transactionListReducer from './transactionListReducer';
import uiStateReducer from './uiStateReducer';
import groupCategoriesReducer from './groupCategoriesReducer';

const rootReducer = combineReducers({
  uiState: uiStateReducer,
  groupCategories: groupCategoriesReducer,
  transactionList: transactionListReducer,
});

export default rootReducer;