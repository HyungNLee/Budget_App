import constants from '../constants';
import { v4 } from 'uuid';

const { initialState, types } = constants;

const groupCategoriesReducer = (state = initialState.groupCategories, action) => {
  switch (action.type) {
    default:
    return state;
  }
};

export default groupCategoriesReducer;