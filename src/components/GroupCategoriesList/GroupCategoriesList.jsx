import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { v4 } from 'uuid';
import './GroupCategoriesList.css';
import { updateBudget } from '../../actions';
// Component imports.
import SubCategoryBudgetDisplay from '../SubCategoryBudgetDisplay/SubCategoryBudgetDisplay.jsx';
import SubCategoryNameDisplay from '../SubCategoryNameDisplay/SubCategoryNameDisplay.jsx';
// Image imports.
import plusPNG from '../../assets/plus.png';

const GroupCategoriesList = ({ dispatch, groupCategories, transactionList }) => {

  console.log(groupCategories);

  let _newBudget = null;
  let _subCatName = null;
  let _groupCatName = null;

  function formatToDollar(amount) {
    return '$' + amount;
  }

  const categoryView = () => {
    const view = [];
    Object.keys(groupCategories)
      .map(groupKey => {
        const groupCat = groupCategories[groupKey];
        const newGroupKey = v4();
        groupCat.calculateBalances(transactionList);
        view.push(
          <tr key={newGroupKey}>
            <td>
              {groupCat.getName()}
              <button type='button' className='subCat-button'><img src={plusPNG} className='plus-img' /></button>
            </td>
            <td>{formatToDollar(groupCat.getTotalBudget())}</td>
            <td>{formatToDollar(groupCat.getTotalSpent())}</td>
            <td>{formatToDollar(groupCat.getBalance())}</td>
          </tr>
        );
        Object.keys(groupCat.subCategories)
          .map(subKey => {
            const subCat = groupCat.subCategories[subKey];
            const newSubKey = v4();
            const tableId = v4();
            const displayId = v4();
            const formId = displayId + '-form';

            // for NameDisplay
            const nameId = v4();
            view.push(
              <tr key={newSubKey}>
                <SubCategoryNameDisplay 
                  key={nameId}
                  groupKey={groupKey}
                  name={subCat.getName()}
                  transactionList={subCat.getTransactionList()}
                />
                <SubCategoryBudgetDisplay 
                  key={tableId}
                  id={tableId}
                  displayId={displayId}
                  formId={formId}
                  groupKey={groupKey}
                  name={subCat.getName()}
                  budgetedAmount={subCat.getBudgetedAmount()}
                />
                
                <td>{formatToDollar(subCat.getTotalSpent(transactionList))}</td>
                <td>{formatToDollar(subCat.getBalance())}</td>
              </tr>
            );
          });
      })
      return view;
  };

  return (
    <table>
      <thead>
        <tr>
          <th>NAME</th>
          <th>BUDGETED</th>
          <th>SPENT</th>
          <th>BALANCE</th>
        </tr>
      </thead>
      <tbody>
        {categoryView()}
      </tbody>
    </table>
  );
}

const mapStateToProps = (state) => {
  return {
    groupCategories: state.groupCategories,
    transactionList: state.transactionList,
  };
}

export default connect(mapStateToProps)(GroupCategoriesList);