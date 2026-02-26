export class Employee {
  constructor(public name: string) {}

  work(): void {
    console.log(`${this.name} is working`);
  }
}

export class Manager extends Employee {
  manage(): void {
    console.log(`${this.name} is managing the team`);
  }
}
