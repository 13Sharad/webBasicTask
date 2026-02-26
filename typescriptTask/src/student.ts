export class Student {
  name: string;
  rollNo: number;

  constructor(name: string, rollNo: number) {
    this.name = name;
    this.rollNo = rollNo;
  }

  display(): void {
    console.log(`Student: ${this.name}, Roll No: ${this.rollNo}`);
  }
}
