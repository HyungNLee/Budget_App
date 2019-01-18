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
      return newTransactionListSlice;
    case types.UPDATE_SUBCAT_NAME_TRANS:
      newTransactionListSlice = Object.assign({}, state);
      // Object.keys(newTransactionListSlice).map(transKey => {
      //   let foundTrans = newTransactionListSlice[transKey];

      //   if(foundTrans.getSubCategory() === action.oldSubCatName) {
      //     foundTrans.editSubCategory(action.newSubCatName);
      //   }
      // });

      action.subCatTransactionList.forEach(key => {
        newTransactionListSlice[key].editSubCategory(action.newSubCatName);
      });
      console.log(newTransactionListSlice);
      return newTransactionListSlice;
    default:
      return state;
  }
};

export default transactionListReducer;