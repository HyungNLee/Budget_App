import React from 'react';
import { connect } from 'react-redux';
import './TransactionItem.css';
import Moment from 'moment';

const TransactionItem = ({ id, transaction }) => {
  const { payee, flow, amount, transactionDate } = transaction;
  return (
    <div className='transaction-item'>
      <p>Pay To: {payee}</p>
      <p>Type: {flow}</p>
      <p>Amount: ${amount}</p>
      <p>Date: {Moment(transactionDate).format('MM/DD/YY')}</p>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    id: ownProps.id,
    transaction: state.transactionList[ownProps.id]
  };
};

export default connect(mapStateToProps)(TransactionItem);