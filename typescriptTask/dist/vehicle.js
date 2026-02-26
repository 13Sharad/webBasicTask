export class Vehicle {
    constructor(brand) {
        this.brand = brand;
    }
}
export class Car extends Vehicle {
    start() {
        console.log(`${this.brand} car started`);
    }
}
