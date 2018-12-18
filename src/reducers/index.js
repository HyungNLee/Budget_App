import { combineReducers } from 'redux';
import transactionListReducer from './transactionListReducer';
import uiStateReducer from './uiStateReducer';

const rootReducer = combineReducers({
  uiState: uiStateReducer,
  transactionList: transactionListReducer,
});

export default rootReducer;