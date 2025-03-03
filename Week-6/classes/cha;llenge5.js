function BankAccount(acountNunber, holderName, balance){
    this.acountNunber = acountNunber; 
    this.holderName = holderName;
    this.balance = balance;
}

BankAccount.prototype.deposit = function(amount){
    console.log(`Deposit: ${amount} Balance: ${this.balance}`);
    return this.balance += amount;
}

const account1 = new BankAccount(123, 'John', 1000);
const account2 = new BankAccount(124, 'Jane', 2000);

console.log(account1.balance);

account1.deposit(5000);

console.log(account1.balance);