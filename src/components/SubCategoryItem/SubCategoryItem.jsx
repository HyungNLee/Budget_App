import React from 'react';
import { connect } from 'react-redux';

const SubCategoryItem = ({ groupCategoryName, subCategoryName, transactionList, subCategory }) => {

  return (
    <div>
      <p>Name: {subCategory.getName()}</p>
      <p>Budgeted: {subCategory.getBudgetedAmount()}</p>
      <p>Total Spent: {subCategory.getTotalSpent(transactionList)}</p>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    groupCategoryName: ownProps.groupCategoryName,
    subCategoryName: ownProps.subCategoryName,
    transactionList: state.transactionList,
    subCategory: state.groupCategories[ownProps.groupCategoryName].subCategories[ownProps.subCategoryName]
  };
}

export default connect(mapStateToProps)(SubCategoryItem);