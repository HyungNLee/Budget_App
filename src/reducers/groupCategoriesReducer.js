import constants from '../constants';
import { v4 } from 'uuid';

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
      newStateSlice = state;
      newStateSlice[action.groupCategory].subCategories[action.subCategory].addTransaction(action.newKey);
      console.log(newStateSlice);
      return newStateSlice;
    case types.UPDATE_BUDGET:
      newStateSlice = state;
      newStateSlice[action.groupName].subCategories[action.subName].editBudget(action.newBudget);
      console.log(newStateSlice);
      return newStateSlice;
    default:
      return state;
  }
};

export default groupCategoriesReducer;