import transactionListReducer from '../../src/reducers/transactionListReducer';
import rootReducer from './../../src/reducers/index';
import { createStore } from 'redux';
import * as actions from '../../src/actions/index';
import constants from './../../src/constants';

describe('Budget App', () => {
  const { initialState, types } = constants;
  const store = createStore(transactionListReducer, initialState);

  test('should return default state if no action type is recognized', () => {
    expect(transactionListReducer({}, { type: null })).toEqual({});
  });
});