import constants from './../constants';
import { v4 } from 'uuid';
import Transaction from '../models/Transaction';

const { initialState, types } = constants;

const transactionListReducer = (state = initialState.transactionList, action) => {
  let newTransaction;
  let newTransactionListSlice;
  switch (action.type) {
    case types.ADD_NEW_TRANSACTION:
    const newKey = v4();
    let newTrans = new Transaction(
      action.payee,
      action.flow,
      action.amount,
      action.transactionDate,
      action.groupCategory,
      action.subCategory
    )

    // Add new groupCategoryReducer action to insert key into subcategory transaction list.

    newTransaction = Object.assign({}, state[newKey], newTrans);
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