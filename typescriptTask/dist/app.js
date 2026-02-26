import { assignRole } from "./types";
import { processPayment } from "./payment";
import { Student } from "./student";
import { BankAccount } from "./bank";
import { Manager } from "./employee";
import { Car } from "./vehicle";
import { Circle } from "./shape";
import { fetchProduct, fetchUser } from "./api";
// 1️ Type Alias Usage
const user1 = { name: "Sharad", role: "admin" };
assignRole(user1);
// 2️ Interface Usage
processPayment({ amount: 1000, method: "upi" });
// 3️ Class
const student1 = new Student("Rahul", 101);
student1.display();
// 4️ Access Modifiers
const account = new BankAccount("Amit", 5000);
console.log("Account Holder:", account.accountHolder);
console.log("Balance:", account.getBalance());
// 5 Inheritance
const manager = new Manager("Suresh");
manager.work();
manager.manage();
// 6️ Abstract Class
const car = new Car("Toyota");
car.start();
// 7️ Abstract Method
const circle = new Circle(5);
console.log("Circle Area:", circle.calculateArea());
// 8️Promise
fetchProduct()
    .then((data) => console.log(data));
//   .finally(() => console.log("Product Request Completed"));
// Async/Await
fetchUser();
