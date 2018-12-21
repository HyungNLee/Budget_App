import constants from './../constants';
import Transaction from '../models/Transaction';

const { initialState, types } = constants;

const transactionListReducer = (state = initialState.transactionList, action) => {
  let newTransaction;
  let newTransactionListSlice;
  switch (action.type) {
    case types.ADD_NEW_TRANSACTION:
    let newTrans = new Transaction(
      action.payee,
      action.flow,
      action.amount,
      action.transactionDate,
      action.groupCategory,
      action.subCategory
    )

    newTransactionListSlice = Object.assign({}, state, {
      [action.newKey]: newTrans
    });
    console.log(newTransactionListSlice);
    return newTransactionListSlice;
  default:
    return state;
  }
};

export default transactionListReducer;