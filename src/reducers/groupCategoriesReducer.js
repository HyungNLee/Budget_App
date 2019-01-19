import constants from '../constants';
import { v4 } from 'uuid';
import GroupCategory from '../models/GroupCategory';
import SubCategory from '../models/SubCategory';

const { initialState, types } = constants;

const groupCategoriesReducer = (state = initialState.groupCategories, action) => {
  let newGroupSlice;
  let newStateSlice;
  switch (action.type) {
    case types.ADD_TO_SUBLIST:

    // ** Object.assign doesn't clone the class or class methods.
      // newGroupSlice = state[action.groupCategory];
      // console.log(newGroupSlice);
      // newGroupSlice.subCategories[action.subCategory].transactionList.push(action.newKey);
      // newStateSlice = Object.assign({}, state, {[action.groupCategory]: newGroupSlice});
    // *********
      newStateSlice = Object.assign({}, state);
      newStateSlice[action.groupCategory].subCategories[action.subCategory].addTransaction(action.newKey);
      console.log(newStateSlice);
      return newStateSlice;
    case types.UPDATE_BUDGET:
      newStateSlice = Object.assign({}, state);
      newStateSlice[action.groupName].subCategories[action.subName].editBudget(action.newBudget);
      console.log(newStateSlice);
      return newStateSlice;
    case types.NEW_GROUP_CAT:
      newStateSlice = Object.assign({}, state);
      let newGroup = new GroupCategory(action.newGroupName);
      newStateSlice[action.newGroupName] = newGroup;
      console.log(newStateSlice);
      return newStateSlice;
    case types.UPDATE_SUBCAT_NAME:
      newStateSlice = Object.assign({}, state);
      newStateSlice[action.groupName].subCategories[action.oldSubCatName].editName(action.newSubCatName);
      newStateSlice[action.groupName].subCategories[action.newSubCatName] = newStateSlice[action.groupName].subCategories[action.oldSubCatName];
      delete newStateSlice[action.groupName].subCategories[action.oldSubCatName];
      console.log(newStateSlice);
      return newStateSlice;
    case types.NEW_SUBCAT:
      newStateSlice = Object.assign({}, state);
      let newName = '**NEW**';
      let newSubCat = new SubCategory(newName, 0);
      newStateSlice[action.groupName].addSubCategory(newSubCat);
      console.log(newStateSlice);
      return newStateSlice;
    case types.DELETE_SUBCAT:
      newStateSlice = Object.assign({}, state);
      delete newStateSlice[action.groupName].subCategories[action.subCatName];
      return newStateSlice;
    default:
      return state;
  }
};

export default groupCategoriesReducer;