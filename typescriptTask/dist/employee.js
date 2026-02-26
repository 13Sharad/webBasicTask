export class Employee {
    constructor(name) {
        this.name = name;
    }
    work() {
        console.log(`${this.name} is working`);
    }
}
export class Manager extends Employee {
    manage() {
        console.log(`${this.name} is managing the team`);
    }
}
