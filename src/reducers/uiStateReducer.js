import constants from './../constants';

const { initialState, types } = constants;

const uiStateReducer = (state = initialState.uiState, action) => {
  let newUiStateSlice;
  switch (action.type) {
    case types.TOGGLE_ADDING_FORM:
      let newAddState = !state.currentlyAdding;
      return Object.assign({}, state, {
        currentlyAdding: newAddState
      });
    default:
      return state;
  }
};

export default uiStateReducer;