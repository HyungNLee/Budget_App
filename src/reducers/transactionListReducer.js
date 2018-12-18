import constants from './../constants';
import { v4 } from 'uuid';

const { initialState, types } = constants;

const transactionListReducer = (state = initialState.transactionList, action) => {
  let newTransaction;
  let newTransactionListSlice;
  switch (action.type) {
    case types.ADD_NEW_TRANSACTION:
    const newKey = v4();
    newTransaction = Object.assign({}, state[newKey], {
      payee: action.payee,
      flow: action.flow,
      amount: action.amount,
      transactionDate: action.transactionDate
    });
    console.log(newTransaction);
    newTransactionListSlice = Object.assign({}, state, {
      [newKey]: newTransaction
    });
    console.log(newTransactionListSlice);
    return newTransactionListSlice;
  default:
    return state;
  }
};

export default transactionListReducer;