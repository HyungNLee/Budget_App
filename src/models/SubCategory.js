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
    return this.budgeted;
  }

  getTotalSpent() {
    let total = 0;
    for(let key in this.transactionList) {
      let transaction = this.transactionList[key];
      if (transaction.getFlow() === 'Expense') {
        total += transaction.getAmount();
      }
    }
    return total;
  }

  addTransaction(key) {
    this.transactionList.push(key);
  }

  removeTransaction() {
    // Removes a transaction from transactionList.
  }
}