import { v4 } from 'uuid';

export const initialState = {
  uiState: {
    currentlyAdding: false,
  },
  // categoriesList: {
  //   [v4()]: {
  //     name: 'Monthly Bills',
  //     subCategories: {
  //       [1]: {
  //         name: 'Rent/Mortgage',
  //         budgeted: 0,
  //       },
  //       [2]: {
  //         name: 'Internet',
  //         budgeted: 0,
  //       },
  //     },
  //   },
  // },
  categoriesList: {
    groupCategories: {
      'Monthly Bills': [
        'Rent/Mortgage',
        'Internet',
      ]
    },
    subCategories: {
      'Rent/Mortgage': {
        budgeted: 500,
        parentId: 'Monthly Bills',
      },
      'Internet': {
        budgeted: 0,
        parentId: 'Monthly Bills',
      }
    },
  },
  transactionList: {
    [v4()]: {
      // categoryId: '7982uus',
      payee: 'Oak Hills Apartments',
      flow: 'Expense',
      amount: 450,
      transactionDate: '2018-11-03'
    },
    [v4()]: {
      // categoryId: '7982uus',
      payee: 'Findley Apartments',
      flow: 'Expense',
      amount: 300,
      transactionDate: '2018-04-22'
    },
    [v4()]: {
      // categoryId: '7982uus',
      payee: 'Hillsboro Apartments',
      flow: 'Expense',
      amount: 550,
      transactionDate: '2018-07-24'
    },
    [v4()]: {
      // categoryId: '7982uus',
      payee: 'Stoller Apartments',
      flow: 'Expense',
      amount: 600,
      transactionDate: '2018-01-15'
    },
    [v4()]: {
      // categoryId: '7982uus',
      payee: 'Angel Hill Apartments',
      flow: 'Expense',
      amount: 1000,
      transactionDate: '2018-10-10'
    },
  },
};