import { Node } from '../../topology/models/node';
import { Rect } from '../../topology/models/rect';

export function lifelineIconRect(node: Node) {
  node.iconRect = new Rect(0, 0, 0, 0);
}

export function lifelineTextRect(node: Node) {
  node.textRect = new Rect(node.rect.x, node.rect.y, node.rect.width, 50);
  node.fullTextRect = node.textRect;
}
