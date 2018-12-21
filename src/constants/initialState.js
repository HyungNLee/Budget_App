import { v4 } from 'uuid';
import GroupCategory from '../models/GroupCategory';
import SubCategory from '../models/SubCategory';
import Transaction from '../models/Transaction';

const rawData = {
  groupCategories: {
    'Monthly Bills': {
      'Rent/Mortgage': {
        totalBudgeted: 500,
        transactionList: {
          '313': {
            payee: 'Oak Hills Apartments',
            flow: 'Expense',
            amount: 450,
            transactionDate: '2018-11-03'
          },
        }
      },
      'Internet': {
        totalBudgeted: 120,
        transactionList: {
          '123211': {
            payee: 'Comcast',
            flow: 'Expense',
            amount: 115,
            transactionDate: '2018-11-05'
          },
        }
      }
    }
  },
  Income: {
    '231355': {
      payee: 'Job',
      flow: 'Income',
      amount: 1000,
      transactionDate: '2018-11-04'
    },
  }
};

let groupCategories = {};
let transactionList = {};

Object.keys(rawData.groupCategories).forEach(groupKey => {
  groupCategories[groupKey] = new GroupCategory(groupKey);

  Object.keys(rawData.groupCategories[groupKey]).forEach(subKey => {
    let newSub = new SubCategory(subKey, rawData.groupCategories[groupKey][subKey].totalBudgeted);

    Object.keys(rawData.groupCategories[groupKey][subKey].transactionList).forEach(transKey => {
      let tempData = rawData.groupCategories[groupKey][subKey].transactionList[transKey];

      let newTrans = new Transaction(
        tempData.payee,
        tempData.flow,
        tempData.amount,
        tempData.transactionDate,
        groupKey,
        subKey
      );

      newSub.addTransaction(transKey);
      transactionList[transKey] = newTrans;
    });

    groupCategories[groupKey].addSubCategory(newSub);
  });

});


export const initialState = {
  uiState: {
    currentlyAdding: false,
  },
  groupCategories: groupCategories,
  transactionList: transactionList,
}

console.log(initialState);