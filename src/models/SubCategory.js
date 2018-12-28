export default class SubCategory {
  constructor(name, budgeted) {
    this.name = name;
    this.budgeted = budgeted;
    this.transactionList = [];
    this.totalSpent = this.getTotalSpent();
  }

  getName() {
    return this.name;
  }

  getBudgetedAmount() {
    return parseFloat(this.budgeted).toFixed(2);
  }

  getTotalSpent(masterList) {
    let total = 0;
    this.transactionList.map(key => {
      let transaction = masterList[key];
      if (transaction.getFlow() === 'Expense') {
        total += parseFloat(transaction.getAmount());
      }
    })
    return total.toFixed(2);
  }

  addTransaction(key) {
    this.transactionList.push(key);
  }

  removeTransaction() {
    // Removes a transaction from transactionList.
  }
}