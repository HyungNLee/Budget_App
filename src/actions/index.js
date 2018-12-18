import * as types from './../constants/ActionTypes';
import { v4 } from 'uuid';

export const addNewTransaction = (payee, flow, amount, transactionDate) => ({
  type: types.ADD_NEW_TRANSACTION,
  payee,
  flow,
  amount,
  transactionDate
});