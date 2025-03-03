// mini bank system which is perform operation like deposit , withdraw and transfer 
function BankAccount(acountNunber, holderName, balance){
    this.acountNunber = acountNunber; 
    this.holderName = holderName;
    this.balance = balance;
}

BankAccount.prototype.deposit = function(amount){
    console.log(`Deposit: ${amount} Balance: ${this.balance}`);
    return this.balance += amount;
}

BankAccount.prototype.withdraw = function(amount){
    console.log(`withdraw: ${amount} Balance: ${this.balance}`);
    return this.balance -= amount;
}

BankAccount.prototype.transfer = function(amount, targetAccount){
    if(this.balance < amount){
        return "Insufficient balance";
    }
    else{
        this.balamce -= amount;
        targetAccount.balance += amount;
        return `Transfered: ${amount} to ${targetAccount.holderName}`;
    }
}

const account1 = new BankAccount(123, 'John', 1000);
const account2 = new BankAccount(124, 'Jane', 2000);

console.log(account1.balance);

account1.deposit(5000);

console.log(account1.balance);

account1.withdraw(2000);

console.log(account1.balance);

console.log(account1.transfer(1000, account2));

console.log(account1.balance);
console.log(account2.balance);