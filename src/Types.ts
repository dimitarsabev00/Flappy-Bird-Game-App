interface Shape {
  x: number;
  y: number;
}

export interface Circle extends Shape {
  radius: number;
}

export interface Rectangle extends Shape {
  width: number;
  height: number;
}

export interface Pipe {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface Hitbox {
  x: number;
  y: number;
  radius: number;
}
