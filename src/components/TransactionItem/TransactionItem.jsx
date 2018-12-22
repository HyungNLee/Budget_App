import React from 'react';
import { connect } from 'react-redux';
import './TransactionItem.css';
import Moment from 'moment';

const TransactionItem = ({ id, transaction }) => {
  const { payee, flow, amount, transactionDate } = transaction;
  return (
    <tr>
      <td>{Moment(transactionDate).format('MM/DD/YY')}</td>
      <td>{payee}</td>
      <td>{transaction.getSubCategory()}</td>
      <td>{amount}</td>
      <td>{flow}</td>
    </tr>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    id: ownProps.id,
    transaction: state.transactionList[ownProps.id]
  };
};

export default connect(mapStateToProps)(TransactionItem);