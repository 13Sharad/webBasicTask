export class BankAccount {
  public accountHolder: string;
  private balance: number;
  protected bankName: string = "SBI";

  constructor(name: string, balance: number) {
    this.accountHolder = name;
    this.balance = balance;
  }

  public getBalance(): number {
    return this.balance;
  }
}
