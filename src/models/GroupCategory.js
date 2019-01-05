export default class GroupCategory{
  constructor(name) {
    this.name = name;
    this.subCategories = {};
    this.totalSpent = null;
    this.totalBudgeted = null;
    this.balance = null;
  }

  getName() {
    return this.name;
  }

  getCategoryNames() {
    return Object.keys(this.subCategories);
  }

  calculateBalances(transactionList) {
    let totalSpent = 0;
    let totalBudgeted = 0;

    Object.keys(this.subCategories).map(subKey => {
      const subCat = this.subCategories[subKey];
      subCat.calculateBalances(transactionList);
      totalSpent += parseFloat(subCat.getTotalSpent());
      totalBudgeted += parseFloat(subCat.getBudgetedAmount());
    });

    this.totalSpent = totalSpent;
    this.totalBudgeted = totalBudgeted;
    this.balance = totalBudgeted - totalSpent;
  }

  getTotalBudget() {
    return this.totalBudgeted.toFixed(2);
  }

  getTotalSpent() {
    return this.totalSpent.toFixed(2);
  }

  getBalance() {
    return this.balance.toFixed(2);
  }

  addSubCategory(newSub) {
    this.subCategories[newSub.getName()] = newSub;
  }

  deleteSubCategory() {
    // Delete subcategory function
  }
}