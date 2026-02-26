export abstract class Vehicle {
  constructor(public brand: string) {}

  abstract start(): void;
}

export class Car extends Vehicle {
  start(): void {
    console.log(`${this.brand} car started`);
  }
}
