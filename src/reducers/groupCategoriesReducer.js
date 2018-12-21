import constants from '../constants';
import { v4 } from 'uuid';

const { initialState, types } = constants;

const groupCategoriesReducer = (state = initialState.groupCategories, action) => {
  let newGroupSlice;
  let newStateSlice;
  switch (action.type) {
    case types.ADD_TO_SUBLIST:
      newGroupSlice = Object.assign({}, state[action.groupCategory]);
      newGroupSlice.subCategories[action.subCategory].transactionList.push(action.newKey);
      newStateSlice = Object.assign({}, state, {[action.groupCategory]: newGroupSlice});
      console.log(newStateSlice);
      return newStateSlice;
    default:
      return state;
  }
};

export default groupCategoriesReducer;