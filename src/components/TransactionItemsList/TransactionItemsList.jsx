import React from 'react';
import { connect } from 'react-redux';
import './TransactionItemsList.css'
// Component imports
import TransactionItem from '../TransactionItem/TransactionItem'

const TransactionItemsList = ({ transactionList }) => {
  let sortedList = sortListByNewest();

  function sortListByNewest() {
    // Create a new array of keys that are sorted by date.
    // Used if statement so newer additions of the same date are shown first.
    let keysSorted = Object.keys(transactionList).sort((a, b) => {
      let total = new Date(transactionList[b].transactionDate).getTime() - new Date(transactionList[a].transactionDate).getTime();
      if (total === 0) {
        return -1;
      } else {
        return total;
      }
    });

    return keysSorted;
  }
  return (
    <table>
      <tbody>
        <tr>
          <th>Date</th>
          <th>Payee</th>
          <th>Category</th>
          <th>Amount</th>
          <th>type</th>
        </tr>
        {sortedList.map(key =>
          <TransactionItem
            key={key}
            id={key}
          />
        )}
      </tbody>
    </table>
  )
}

const mapStateToProps = (state) => {
  return {
    transactionList: state.transactionList
  };
};

export default connect(mapStateToProps)(TransactionItemsList);