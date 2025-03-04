class BankAccount{
    constructor(name, acountNumber, balance, type){
        this.name = name;
        this.acountNumber = acountNumber;
        this.balance = balance;
        this.type = type;
    }

    deposite(amount){
        this.balance += amount;
        return this.balance;
    }

    withdraw(amount){
        if(this.balance >= amount){
            this.balance -= amount;
            return this.balance;
        }
        else{
            return "Insufficient balance";
        }
    }

    checkBalance(){
        return this.balance;
    }
}

const acount1 = new BankAccount("Vihaan", 433512, 2000, "savings");
const acount2 = new BankAccount("NewEdge inc", 777812, 100000, "current");

console.log(acount1.deposite(5000));
console.log(acount1.checkBalance());


// lets withdraw the 7333 amount from my business account 

console.log(acount2.withdraw(7333));
console.log(acount2.checkBalance());

console.log(acount2.balance); // 92667
console.log(acount2.deposite(10000)); // 102667

console.log(acount2.balance); // 102667
console.log(acount2.checkBalance()); // 102667
console.log(acount2.withdraw(100000)); // 2667

