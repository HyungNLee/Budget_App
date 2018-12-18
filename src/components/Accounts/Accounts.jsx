import React from 'react';
import { connect } from 'react-redux';
import { addNewTransaction } from './../../actions'
// Component imports
import TransactionItem from '../TransactionItem/TransactionItem';

const Accounts = ({ dispatch, masterList }) => {
  let _payee = null;
  let _flow = null;
  let _amount = null;
  let _date = null;
  let sortedList = sortListByNewest();

  function formatToDollar(amount) {
    return parseFloat(amount).toFixed(2);
  }

  function sortListByNewest() {
    // Converts the object to array with extra key property to hold key information.
    let newList = Object.keys(masterList).map(key => {
      let transaction = masterList[key];
      transaction.key = key;
      return transaction;
    });
    
    newList.sort((a,b) => new Date(b.transactionDate).getTime() - new Date(a.transactionDate).getTime());
    console.log(newList);
    return newList;
  }

  function addNewTransactionEvent(event) {
    event.preventDefault();

    dispatch(addNewTransaction(_payee.value, _flow.value, formatToDollar(_amount.value), _date.value));
    _payee.value = '';
    _flow.value = 'Expense';
    _amount.value = '';
    _date.value = '';
  };

  return (
    <div>
      ** TEST ACCOUNTS **
      *** TEST ADD NEW TRANSACTION ***
      <form onSubmit={addNewTransactionEvent} className='add-new-form'>
        <input
          type='text'
          id='payee'
          placeholder='Pay To'
          ref={(input) => { _payee = input; }}
        />
        <select id='flow' ref={(input) => { _flow = input }}>
          <option value='Expense' defaultValue>Expense</option>
          <option value='Income'>Income</option>
        </select>
        <input
          type='number'
          step='0.01'
          min='0'
          id='amount'
          placeholder='$0.00'
          ref={(input) => { _amount = input; }}
        />
        <input type='date' id='date-picker' ref={(input) => {_date = input}} />
        <button type='submit'>Add Transaction</button>
      </form>
      {sortedList.map(transaction =>
        <TransactionItem
          key={transaction.key}
          id={transaction.key}
        />
      )}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    masterList: state.transactionList
  };
};

export default connect(mapStateToProps)(Accounts);