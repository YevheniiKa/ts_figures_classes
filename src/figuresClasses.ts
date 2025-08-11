export interface Figure {
  getArea(): number;
}
type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';
export class Triangle implements Figure {
  color: Color;

  shape: Shape = 'triangle';

  a: number;

  b: number;

  c: number;

  constructor(color: Color, a: number, b: number, c: number) {
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;

    const maxSide = Math.max(a, b, c);
    const sumOthers = a + b + c - maxSide;

    if (maxSide >= sumOthers) {
      throw new Error('Invalid triangle sides');
    }

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Sides must be > 0');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  radius: number;

  shape: Shape = 'circle';

  color: Color;

  constructor(color: Color, radius: number) {
    this.radius = radius;
    this.color = color;

    if (radius <= 0) {
      throw new Error('Radius must be > 0');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius * this.radius;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  width: number;

  height: number;

  color: Color;

  shape: Shape = 'rectangle';

  constructor(color: Color, width: number, height: number) {
    this.color = color;
    this.width = width;
    this.height = height;

    if (width <= 0 || height <= 0) {
      throw new Error('Width and height must be > 0');
    }
  }

  getArea(): number {
    const area = this.height * this.width;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(
  figure: Figure & { shape: Shape; color: Color },
): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
