export default class Transaction {
  constructor(payee, flow, amount, transactionDate) {
    this.payee = payee;
    this.flow = flow;
    this.amount = amount;
    this.transactionDate = transactionDate;
  }

  getName() {
    return this.getName;
  }

  getFlow() {
    // returns the value of the flow.
  }

  getAmount() {
    // returns the amount.
  }

  getTransactionDate() {
    // returns the transaction date.
  }
}