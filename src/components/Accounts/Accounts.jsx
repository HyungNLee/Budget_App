import React from 'react';
import { connect } from 'react-redux';
import { addNewTransaction, toggleAddForm } from './../../actions'
import Moment from 'moment';

// Component imports
import TransactionItem from '../TransactionItem/TransactionItem';

const Accounts = ({ dispatch, masterList, currentlyAdding, categoriesList }) => {

  let _payee = null;
  let _flow = null;
  let _amount = null;
  let _date = null;
  let _category = null;
  let sortedList = sortListByNewest();

  // Add form view variable.
  let addingForm;

  let todayDate = Moment(new Date()).format('YYYY-MM-DD');

  // Category rendering for category select boxes.


  // const categorySelect = () => {

  //   return (
  //     <h1>yo
  //     {Object.keys(categoriesList.groupCategories).map(outerCat => (
  //       <p>{outerCat}</p>
  //     )).map((inner, ind) => (
  //       <option key={ind} value={inner}>{...inner}</option>
  //     ))}
  //     </h1>
  //   )
  // }

  const categorySelect = () => {

    let categorySelectView = React.createElement('select', {}, '');

      Object.keys(categoriesList.groupCategories)
        .map(groupCat => {
          console.log(groupCat);
          let groupCatView = <option key={groupCat}>{groupCat}</option>
          categorySelectView.appendChild(groupCatView);
          let subCatView =
            Object.keys(categoriesList.subCategories)
              .map(subCat => {
                console.log(subCat);
                let subCatOption = <option key={subCat}>{subCat}</option>
                // return (subCatOption);
                categorySelectView.appendChild(subCatView);
              })
          // Object.keys(categoriesList.groupCategories)
          //   .map(groupCat => groupCat)
          //   .filter(groupCatTwo => groupCatTwo === outerLoop)
          //   .map(cat => {
          //     console.log(cat);
          //     // return <option key={cat}>{cat}</option>
          //   })
          // Object.keys(categoriesList.subCategories)
          //   .map(subCat => subCat)
          //   .filter(filterSub => filterSub.parentId === outerLoop)
          //   .map(finalSub => {
          //     console.log(finalSub);
          //     // return <option key={finalSub}>{finalSub}</option>
          //   })
        })

    return categorySelectView;
    //   </h1>
    // )
  }


  function formatToDollar(amount) {
    return parseFloat(amount).toFixed(2);
  }

  function sortListByNewest() {
    // Create a new array of keys that are sorted by date.
    // Used if statement so newer additions of the same date are shown first.
    let keysSorted = Object.keys(masterList).sort((a, b) => {
      let total = new Date(masterList[b].transactionDate).getTime() - new Date(masterList[a].transactionDate).getTime();
      if (total === 0) {
        return -1;
      } else {
        return total;
      }
    });

    return keysSorted;
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

    dispatch(addNewTransaction(_payee.value, _flow.value, formatToDollar(_amount.value), _date.value, _category.value));

    _payee.value = '';
    _flow.value = 'Expense';
    _amount.value = '';
    _date.value = '';
    _category.value = '';

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
        {/* <select
          id='category'
          ref={(input) => { _category = input }}
        > */}
        {categorySelect()}
        {/* </select> */}
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
      {sortedList.map(key =>
        <TransactionItem
          key={key}
          id={key}
        />
      )}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    currentlyAdding: state.uiState.currentlyAdding,
    masterList: state.transactionList,
    categoriesList: state.categoriesList,
  };
};

export default connect(mapStateToProps)(Accounts);