import * as types from './../constants/ActionTypes';

export const addNewTransaction = (payee, flow, amount, transactionDate, groupCategory, subCategory) => ({
  type: types.ADD_NEW_TRANSACTION,
  payee,
  flow,
  amount,
  transactionDate,
  groupCategory,
  subCategory
});

export const toggleAddForm = () => ({
  type: types.TOGGLE_ADDING_FORM,
})