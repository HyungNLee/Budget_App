import { combineReducers } from 'redux';
import transactionListReducer from './transactionListReducer';

const rootReducer = combineReducers({
  transactionList: transactionListReducer,
});

export default rootReducer;