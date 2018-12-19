import * as types from './../constants/ActionTypes';

export const addNewTransaction = (payee, flow, amount, transactionDate, categoryId) => ({
  type: types.ADD_NEW_TRANSACTION,
  payee,
  flow,
  amount,
  transactionDate,
  categoryId
});

export const toggleAddForm = () => ({
  type: types.TOGGLE_ADDING_FORM,
})