export default class SubCategory {
  constructor(name, budgeted) {
    this.name = name;
    this.budgeted = budgeted;
    this.transactionList = {};
    // this.totalSpent = this.getTotalSpent();
  }

  getName() {
    return this.name;
  }

  getBudgetedAmount() {
    // Returns the total budgeted amount.
  }

  getTotalSpent() {
    // Returns the total amount spend so far in this category.
  }

  addTransaction(key, newTrans) {
    this.transactionList[key] = newTrans;
  }

  removeTransaction() {
    // Removes a transaction from transactionList.
  }
}