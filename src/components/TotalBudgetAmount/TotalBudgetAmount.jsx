import React from 'react';
import { connect } from 'react-redux';

const TotalBudgetAmount = ({ masterList }) => {
  
  let totalBudget = 0;
  
  for (let key in masterList) {
    let numAmount = parseFloat(masterList[key].amount);
    if (masterList[key].flow === 'Expense') {
      totalBudget -= numAmount;
    } else {
      totalBudget += numAmount;
    }
  }

  totalBudget.toFixed(2);

  return (
    <div>
      **TEST BUDGET DISPLAY -- ${totalBudget} **
    </div>
  );
};

const mapStateToProps = state => {
  return {
    masterList: state.transactionList
  };
};

export default connect(mapStateToProps)(TotalBudgetAmount);