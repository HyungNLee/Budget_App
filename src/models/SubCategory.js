export default class SubCategory {
  constructor(name, budgeted) {
    this.name = name;
    this.budgeted = budgeted;
    this.transactionList = [];
    this.totalSpent = null;
    this.balance = null;
  }

  getName() {
    return this.name;
  }

  getBudgetedAmount() {
    return parseFloat(this.budgeted).toFixed(2);
  }

  calculateBalances(masterList) {
    let total = 0;
    this.transactionList.map(key => {
      let transaction = masterList[key];
      if (transaction.getFlow() === 'Expense') {
        total += parseFloat(transaction.getAmount());
      }
    });

    this.totalSpent = parseFloat(total.toFixed(2));

    this.balance = this.budgeted - this.totalSpent;
  }

  getBalance() {
    return this.balance.toFixed(2);
  }

  getTotalSpent() {
    return this.totalSpent.toFixed(2);
  }

  addTransaction(key) {
    this.transactionList.push(key);
  }

  removeTransaction(key) {
    const index = this.transactionList.findIndex(key);
    if (index !== -1) {
      this.transactionList.splice(index, 1);
    }
  }

  editBudget(newAmount) {
    this.budgeted = newAmount;
  }
}