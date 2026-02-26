export class Student {
    constructor(name, rollNo) {
        this.name = name;
        this.rollNo = rollNo;
    }
    display() {
        console.log(`Student: ${this.name}, Roll No: ${this.rollNo}`);
    }
}
