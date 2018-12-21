export default class Transaction {
  constructor(payee, flow, amount, transactionDate, groupCategory, subCategory) {
    this.payee = payee;
    this.flow = flow;
    this.amount = amount;
    this.transactionDate = transactionDate;
    this.groupCategory = groupCategory;
    this.subCategory = subCategory;
  }

  getName() {
    return this.getName;
  }

  getFlow() {
    return this.flow;
  }

  getAmount() {
    return this.amount;
  }

  getTransactionDate() {
    return this.transactionDate;
  }

  getGroupCategory() {
    return this.groupCategory;
  }

  getSubCategory() {
    return this.subCategory;
  }
}