import { Node } from '../../topology/models/node';

export function sequenceFocus(ctx: CanvasRenderingContext2D, node: Node) {
  ctx.beginPath();
  ctx.rect(node.rect.x, node.rect.y, node.rect.width, node.rect.height);
  if (this.fillStyle) {
    ctx.fillStyle = this.fillStyle;
  } else {
    ctx.fillStyle = '#fff';
  }
  ctx.fill();
  ctx.stroke();
}
