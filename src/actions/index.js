import * as types from './../constants/ActionTypes';

export const addNewTransaction = (newKey, payee, flow, amount, transactionDate, groupCategory, subCategory) => ({
  type: types.ADD_NEW_TRANSACTION,
  newKey,
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

export const addToSubList = (newKey, groupCategory, subCategory) => ({
  type: types.ADD_TO_SUBLIST,
  newKey,
  groupCategory,
  subCategory
});