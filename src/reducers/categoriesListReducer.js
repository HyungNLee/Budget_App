import constants from './../constants';
import { v4 } from 'uuid';

const { initialState, types } = constants;

const categoriesListReducer = (state = initialState.categoriesList, action) => {
  switch (action.type) {
    default:
    return state;
  }
};

export default categoriesListReducer;