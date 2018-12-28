export default class GroupCategory{
  constructor(name) {
    this.name = name;
    this.subCategories = {};
    // this.totalSpent = this.getTotalSpent();
    // this.totalBudgeted = this.getTotalBudget();
  }

  getName() {
    return this.name;
  }

  getCategoryNames() {
    return Object.keys(this.subCategories);
  }

  getTotalSpent() {
    // returns total spent.
  }

  getTotalBudget() {
    // returns total budgeted.
  }

  addSubCategory(newSub) {
    this.subCategories[newSub.getName()] = newSub;
  }
}