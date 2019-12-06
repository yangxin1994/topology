import { Direction } from './direction';

export class Point {
  // The id is nodeId while the point is from or to of a line.
  id: number | string;
  direction: Direction;
  // The index of docker anchor on node.
  anchorIndex: number;

  hidden: boolean;
  out: boolean;
  data: any;
  constructor(
    public x: number,
    public y: number,
    direction?: Direction,
    anchorIndex?: number,
    id?: number | string,
    hidden?: boolean,
    out?: boolean
  ) {
    this.direction = direction;
    this.anchorIndex = anchorIndex;
    this.id = id;
    this.hidden = hidden;
    this.out = out;
  }

  floor() {
    this.x |= 0;
    this.y |= 0;
  }

  round() {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
  }

  clone(): Point {
    const pt = new Point(this.x, this.y, this.direction, this.anchorIndex, this.id, this.hidden, this.out);
    if (this.data) {
      pt.data = this.data;
    }
    return pt;
  }

  hit(pt: Point, radius = 5) {
    return pt.x > this.x - radius && pt.x < this.x + radius && pt.y > this.y - radius && pt.y < this.y + radius;
  }

  rotate(angle: number, center: { x: number; y: number }): Point {
    if (!angle || angle === 360) {
      return this;
    }

    angle *= Math.PI / 180;
    const x = (this.x - center.x) * Math.cos(angle) - (this.y - center.y) * Math.sin(angle) + center.x;
    const y = (this.x - center.x) * Math.sin(angle) + (this.y - center.y) * Math.cos(angle) + center.y;
    this.x = x;
    this.y = y;
    return this;
  }
}
