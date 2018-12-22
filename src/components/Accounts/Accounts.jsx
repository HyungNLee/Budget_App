import React from 'react';
import { connect } from 'react-redux';
import { addNewTransaction, toggleAddForm, addToSubList } from './../../actions'
import Moment from 'moment';
import { v4 } from 'uuid';

// Component imports
import TransactionItemsList from '../TransactionItemsList/TransactionItemsList';

const Accounts = ({ dispatch, currentlyAdding, transactionList, groupCategories }) => {

  let _payee = null;
  let _flow = null;
  let _amount = null;
  let _date = null;
  let _categories = null;

  // Add form view variable.
  let addingForm;

  let todayDate = Moment(new Date()).format('YYYY-MM-DD');

  // Category rendering for category select boxes.

  const categorySelect = () => {

    // let categorySelectView = React.createElement('select', {}, '');
    let categorySelectView = [];

    Object.keys(groupCategories)
      .map(groupKey => {
        categorySelectView.push(<option disabled key={groupKey}>{groupKey}</option>);

        Object.keys(groupCategories[groupKey].subCategories)
          .map(subKey => {
            let newValue = `${groupKey}~~~${subKey}`;
            categorySelectView.push(<option key={newValue} value={newValue}>{subKey}</option>);
          });
      });

    return categorySelectView;
  }


  function formatToDollar(amount) {
    return parseFloat(amount).toFixed(2);
  }

  function toggleAddFormEvent() {
    dispatch(toggleAddForm());
  }

  function addNewTransactionEvent(event) {
    event.preventDefault();

    let categories = _categories.value.split('~~~');
    let newGroup = categories[0];
    let newSub = categories[1];
    let newKey = v4();

    // Checks for invalid inputs.
    if (_payee.value === '' || _amount.value === null || _date.value === '') {
      return;
    }

    dispatch(addNewTransaction(newKey, _payee.value, _flow.value, formatToDollar(_amount.value), _date.value, newGroup, newSub));
    dispatch(addToSubList(newKey, newGroup, newSub));

    _payee.value = '';
    _flow.value = 'Expense';
    _amount.value = '';
    _date.value = '';
    _categories.value = '';

    toggleAddFormEvent();
  };

  if (currentlyAdding) {
    addingForm =
      <form onSubmit={addNewTransactionEvent} className='add-new-form'>
        <input
          type='date'
          id='date-picker'
          defaultValue={todayDate} ref={(input) => { _date = input }}
        />
        <input
          type='text'
          id='payee'
          placeholder='Pay To'
          ref={(input) => { _payee = input; }}
        />
        <select
          id='category'
          ref={(input) => { _categories = input }}
        >
          {categorySelect()}
        </select>
        <select
          id='flow'
          ref={(input) => { _flow = input }}
        >
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
      <TransactionItemsList />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    currentlyAdding: state.uiState.currentlyAdding,
    groupCategories: state.groupCategories,
    transactionList: state.transactionList,
  };
};

export default connect(mapStateToProps)(Accounts);