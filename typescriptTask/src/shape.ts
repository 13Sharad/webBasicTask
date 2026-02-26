export abstract class Shape {
  abstract calculateArea(): number;
}

export class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }

  calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}
