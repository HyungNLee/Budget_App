import React from 'react';
import { connect } from 'react-redux';
import { addNewTransaction, toggleAddForm } from './../../actions'
import Moment from 'moment';

// Component imports
import TransactionItem from '../TransactionItem/TransactionItem';

const Accounts = ({ dispatch, masterList, currentlyAdding }) => {
  
  let _payee = null;
  let _flow = null;
  let _amount = null;
  let _date = null;
  let sortedList = sortListByNewest();

  // Add form view variable.
  let addingForm;

  let todayDate = Moment(new Date()).format('YYYY-MM-DD');


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

    newList.sort((a, b) => new Date(b.transactionDate).getTime() - new Date(a.transactionDate).getTime());
    
    return newList;
  }

  function toggleAddFormEvent() {
    dispatch(toggleAddForm());
  }

  function addNewTransactionEvent(event) {
    event.preventDefault();

    // Checks for invalid inputs.
    if (_payee.value === '' || _amount.value === null || _date.value === '') {
      return;
    }

    dispatch(addNewTransaction(_payee.value, _flow.value, formatToDollar(_amount.value), _date.value));

    _payee.value = '';
    _flow.value = 'Expense';
    _amount.value = '';
    _date.value = '';

    toggleAddFormEvent();
  };

  if (currentlyAdding) {
    addingForm =
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
        <input type='date' id='date-picker' defaultValue={todayDate} ref={(input) => { _date = input }} />
        <button type='submit'>Add Transaction</button>
      </form>
  } else {
    addingForm =
      <button onClick={toggleAddFormEvent}>
        Add New Transaction
      </button>
  }

  return (
    <div>
      ** TEST ACCOUNTS **
      *** TEST ADD NEW TRANSACTION ***
      {addingForm}
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
    currentlyAdding: state.uiState.currentlyAdding,
    masterList: state.transactionList
  };
};

export default connect(mapStateToProps)(Accounts);