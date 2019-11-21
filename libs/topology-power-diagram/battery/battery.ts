import { Node } from '../../topology/models/node';

export function battery(ctx: CanvasRenderingContext2D, node: Node) {
    ctx.beginPath();
    ctx.scale(0.01, 0.01);
    ctx.lineWidth = 80;
    ctx.strokeStyle = "rgb(41, 212, 41,1)";
    //电池主体矩形
    ctx.moveTo(7610, 9980);
    ctx.lineTo(2620, 9980);
    ctx.bezierCurveTo(2360, 9980, 2110, 9720, 2110, 9470);
    ctx.lineTo(2110, 1600);
    ctx.bezierCurveTo(2110, 1340, 2360, 1080, 2620, 1080);
    ctx.lineTo(7610, 1080);
    ctx.bezierCurveTo(7870, 1080, 8120, 1340, 8120, 1600);
    ctx.lineTo(8120, 9470);
    ctx.bezierCurveTo(8120, 9790, 7870, 9980, 7610, 9980);
    //颜色渐变
    var canvasGra = ctx.createLinearGradient(0, 0, 10000, 0);
    canvasGra.addColorStop(0, "rgba(0,153,0,0.3)");
    canvasGra.addColorStop(0.3, "rgba(101, 224, 101, 0.3)");
    canvasGra.addColorStop(0.5, "rgba(155, 245, 155, 0.4)");
    canvasGra.addColorStop(0.7, "rgba(101, 224, 101, 0.3)");
    canvasGra.addColorStop(1, "rgba(0,153,0,0.3)");
    ctx.fillStyle = canvasGra;//样式，颜色渐变
    ctx.fill();
    ctx.stroke();
    ctx.save();

    ctx.beginPath();
    //电池主体内部矩形
    // ctx.moveTo(262.40000000000003,140.79999999999995);
    // ctx.bezierCurveTo(256.00000000000006,140.79999999999995,243.20000000000005,147.19999999999996,243.20000000000005,159.99999999999994);
    // ctx.lineTo(243.20000000000005,947.2);
    // ctx.bezierCurveTo(243.20000000000005,953.6,249.60000000000005,966.4000000000001,262.40000000000003,966.4000000000001);
    // ctx.lineTo(761.6,966.4000000000001);
    // ctx.bezierCurveTo(768,966.4000000000001,780.8000000000001,960.0000000000001,780.8000000000001,947.2);
    // ctx.lineTo(780.8000000000001,160);
    // ctx.bezierCurveTo(780.8000000000001,153.6,774.4000000000001,140.8,761.6,140.8);
    // ctx.lineTo(262.40000000000003,140.8);
    // ctx.closePath();
    // ctx.fill();
    // ctx.stroke();
    // ctx.fill();
    // ctx.stroke();
    ctx.fillStyle = "rgb(0,153,0,1)";

    ctx.restore();
    ctx.beginPath();
    //电池容量
    ctx.moveTo(2810, 6910);
    ctx.lineTo(7420, 5180);
    ctx.lineTo(7420, 8960);
    ctx.bezierCurveTo(7420, 9150, 7290, 9280, 7100, 9280);
    ctx.lineTo(3130, 9280);
    ctx.bezierCurveTo(2940, 9280, 2810, 9150, 2810, 8960);
    ctx.lineTo(2810, 6910);
    ctx.fill();
    // ctx.stroke();
    //闪电图案
    ctx.fillStyle = "#ffff24";
    ctx.restore();

    ctx.beginPath();
    ctx.moveTo(5690, 3130);
    ctx.lineTo(5240, 4860);
    ctx.lineTo(6140, 4860);
    ctx.lineTo(4540, 7420);
    ctx.lineTo(5050, 5630);
    ctx.lineTo(4030, 5630);
    ctx.fill();
    ctx.restore();
    
    ctx.beginPath();
    //电池正极
    ctx.fillStyle = "rgb(0,153,0,1)";
    ctx.moveTo(4150, 1080);
    ctx.lineTo(4150, 440);
    ctx.bezierCurveTo(4150, 310, 4220, 250, 4350, 250);
    ctx.lineTo(5880, 250);
    ctx.bezierCurveTo(5950, 250, 6080, 320, 6080, 440);
    ctx.lineTo(6080, 1080);
    // ctx.lineTo(4150,1080);
    ctx.closePath();
    ctx.fill();
    // ctx.stroke();
    ctx.restore();
}