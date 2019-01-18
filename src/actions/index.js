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

export const updateBudget = (groupName, subName, newBudget) => ({
  type: types.UPDATE_BUDGET,
  groupName,
  subName,
  newBudget
});

export const newGroupCategory = (newGroupName) => ({
  type: types.NEW_GROUP_CAT,
  newGroupName
});

export const updateSubCatName = (newSubCatName, oldSubCatName, groupName) => ({
  type: types.UPDATE_SUBCAT_NAME,
  newSubCatName,
  oldSubCatName,
  groupName
});

// Updates subcategory names on all transactions in transactionList
export const updateSubCatNameTrans = (newSubCatName, oldSubCatName) => ({
  type: types.UPDATE_SUBCAT_NAME_TRANS,
  newSubCatName,
  oldSubCatName
})