import React from 'react';
import { connect } from 'react-redux';
import { v4 } from 'uuid';
import './GroupCategoriesList.css';
// Component imports.
import GroupCategoryItem from '../GroupCategoryItem/GroupCategoryItem.jsx';

const GroupCategoriesList = ({ groupCategories, transactionList }) => {

  console.log(groupCategories);

  function formatToDollar(amount) {
    return '$' + amount;
  }

  function turnToForm(subCat, formId) {
    console.log(subCat);
    console.log(formId);
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
            <td>{groupCat.getName()}</td>
            <td>{formatToDollar(groupCat.getTotalBudget())}</td>
            <td>{formatToDollar(groupCat.getTotalSpent())}</td>
            <td>{formatToDollar(groupCat.getBalance())}</td>
          </tr>
        );
        Object.keys(groupCat.subCategories)
          .map(subKey => {
            const subCat = groupCat.subCategories[subKey];
            const newSubKey = v4();
            const formId = v4();
            view.push(
              <tr key={newSubKey}>
                <td>{subCat.getName()}</td>
                <td className='budget-display' id={formId} onClick={() => turnToForm(subCat, formId)}>{formatToDollar(subCat.getBudgetedAmount())}</td>
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
      <tbody>
        <tr>
          <th>NAME</th>
          <th>BUDGETED</th>
          <th>SPENT</th>
          <th>BALANCE</th>
        </tr>
        {categoryView()}
        {/* {Object.keys(groupCategories)
          .map(groupName =>
            <GroupCategoryItem
              key={groupName}
              name={groupName}
            />
          )
        } */}
      </tbody>
    </table>
    // <div>
    //   {Object.keys(groupCategories)
    //     .map(groupName =>
    //       <GroupCategoryItem
    //         key={groupName}
    //         name={groupName}
    //       />
    //     )
    //   }
    // </div>
  );
}

const mapStateToProps = (state) => {
  return {
    groupCategories: state.groupCategories,
    transactionList: state.transactionList,
  };
}

export default connect(mapStateToProps)(GroupCategoriesList);