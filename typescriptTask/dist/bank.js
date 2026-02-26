export class BankAccount {
    constructor(name, balance) {
        this.bankName = "SBI";
        this.accountHolder = name;
        this.balance = balance;
    }
    getBalance() {
        return this.balance;
    }
}
