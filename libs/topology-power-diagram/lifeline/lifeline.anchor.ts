import { Point } from '../../topology/models/point';
import { Node } from '../../topology/models/node';
import { Direction } from '../../topology/models/direction';

export function lifelineAnchors(node: Node) {
  node.anchors.push(new Point(node.rect.x, node.rect.y + 25, Direction.Left));
  node.anchors.push(new Point(node.rect.x + node.rect.width / 2, node.rect.y, Direction.Up));
  node.anchors.push(new Point(node.rect.x + node.rect.width, node.rect.y + 25, Direction.Right));
  node.anchors.push(new Point(node.rect.x + node.rect.width / 2, node.rect.y + 50, Direction.Bottom));
  node.anchors.push(new Point(node.rect.x + node.rect.width / 2, node.rect.ey, Direction.Bottom));
}
