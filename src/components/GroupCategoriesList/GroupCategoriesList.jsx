import React from 'react';
import { connect } from 'react-redux';
import { v4 } from 'uuid';
import './GroupCategoriesList.css';
// Component imports.
import GroupCategoryItem from '../GroupCategoryItem/GroupCategoryItem.jsx';

const GroupCategoriesList = ({ groupCategories, transactionList }) => {

  console.log(groupCategories);

  const categoryView = () => {
    const view = [];
    Object.keys(groupCategories)
      .map(groupKey => {
        const groupCat = groupCategories[groupKey];
        const newGroupKey = v4();
        view.push(
          <tr key={newGroupKey}>
            <td>{groupCat.getName()}</td>
            <td></td>
            <td></td>
          </tr>
        );
        Object.keys(groupCat.subCategories)
          .map(subKey => {
            const subCat = groupCat.subCategories[subKey];
            const newSubKey = v4();
            view.push(
              <tr key={newSubKey}>
                <td>{subCat.getName()}</td>
                <td>{subCat.getBudgetedAmount()}</td>
                <td>{subCat.getTotalSpent(transactionList)}</td>
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
          <th>TOTAL SPENT</th>
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