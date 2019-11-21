import { Node } from '../../topology/models/node';

export function lifeline(ctx: CanvasRenderingContext2D, node: Node) {
  const height = 50;
  const wr = node.rect.width * node.borderRadius;
  const hr = height * node.borderRadius;
  let r = wr < hr ? wr : hr;
  if (node.rect.width < 2 * r) {
    r = node.rect.width / 2;
  }
  if (height < 2 * r) {
    r = height / 2;
  }
  ctx.beginPath();
  ctx.moveTo(node.rect.x + r, node.rect.y);
  ctx.arcTo(node.rect.x + node.rect.width, node.rect.y, node.rect.x + node.rect.width, node.rect.y + height, r);
  ctx.arcTo(node.rect.x + node.rect.width, node.rect.y + height, node.rect.x, node.rect.y + height, r);
  ctx.arcTo(node.rect.x, node.rect.y + height, node.rect.x, node.rect.y, r);
  ctx.arcTo(node.rect.x, node.rect.y, node.rect.x + node.rect.width, node.rect.y, r);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  ctx.save();
  ctx.beginPath();
  ctx.lineWidth = 1;
  ctx.setLineDash([7, 7]);
  const middle = node.rect.x + node.rect.width / 2;
  ctx.moveTo(middle, node.rect.y + height + 1);
  ctx.lineTo(middle, node.rect.ey);
  ctx.stroke();
  ctx.restore();
}


// var canvas = document.getElementById("canvas");
// var ctx = canvas.getContext("2d");
// let lineWidth=80,scaleX=0.01,scaleY=0.01;
// let space=250,innerSpace=300,roundA=200,roundB=300;
// let w1 = 5400,h1=9000,w2=1450,h2=600;
// let lightScale=w1/6000;
// let lineStyle="rgb(41, 212, 41, 1)";//线颜色
// let topStyle = "rgba(0,153,0,1)";//电池正极fill颜色
// let volumeStyle = [[0,'rgba(0,153,0,1)'], [0.45,'rgb(32, 203, 32)'], [0.55,'rgb(61, 224, 19)'], [0.7,'rgb(32, 203, 32)'], [1,'rgba(0,153,0,1)']];//容量颜色
// let lightStyle = "#ffff24";
// let bgStyle = [[0,'rgba(0,153,0,0.3)'], [0.45,'rgba(101, 224, 101, 0.3)'], [0.55,'rgba(155, 245, 155, 0.4)'], [0.7,'rgba(101, 224, 101, 0.3)'], [1,'rgba(0,153,0,0.3)']];//背景颜色
// let percentage = 0.45;
// let model = "charge";

// //样式，颜色渐变
// var canvasGra = ctx.createLinearGradient(0,0,space*2+w1,0);
// bgStyle.forEach((item, index) => {
// 	canvasGra.addColorStop(item[0],item[1]);
// });
// var volGra = ctx.createLinearGradient(0,0,space*2+w1,0);
// volumeStyle.forEach((item, index) => {
// 	volGra.addColorStop(item[0],item[1]);
// });

		
// let drawBattery = function () {
// 	//电池正极
// 	ctx.beginPath();
// 	ctx.scale(scaleX,scaleY);
// 	ctx.lineWidth = lineWidth;
// 	ctx.strokeStyle = lineStyle;
// 	ctx.globalCompositeOperation="source-over";
// 	ctx.fillStyle=volGra;
// 	ctx.moveTo(space+(w1-w2)/2,space+h2);
// 	ctx.lineTo(space+(w1-w2)/2,space+roundA*w2/w1+roundB*w2/w1);
// 	ctx.bezierCurveTo(space+(w1-w2)/2,space+roundB*w2/w1,space+(w1-w2)/2+roundB*w2/w1,space,space+(w1-w2)/2+roundA*w2/w1+roundB*w2/w1,space);
// 	ctx.lineTo(space+(w1+w2)/2-roundA*w2/w1-roundB*w2/w1,space);
// 	ctx.bezierCurveTo(space+(w1+w2)/2-roundA*w2/w1,space,space+(w1+w2)/2,space+roundB*w2/w1,space+(w1+w2)/2,space+roundA*w2/w1+roundB*w2/w1);
// 	ctx.lineTo(space+(w1+w2)/2,space+h2);
// 	ctx.fill();

// 	//电池主体矩形
// 	ctx.beginPath();
// 	ctx.moveTo(w1+space-roundA-roundB,h1+h2+space);//右下角
// 	ctx.lineTo(space+roundA+roundB,h1+h2+space);
// 	ctx.bezierCurveTo(space+roundB,h1+h2+space,space,h1+h2-roundB,space,h1+h2-roundA-roundB);
// 	ctx.lineTo(space,h2+space+roundA+roundB);
// 	ctx.bezierCurveTo(space,h2+space+roundB,space+roundB,h2+space,space+roundA+roundB,h2+space);
// 	ctx.lineTo(space+w1-roundA-roundB,h2+space);
// 	ctx.bezierCurveTo(space+w1-roundA,h2+space,space+w1,h2+space+roundB,space+w1,h2+space+roundA+roundB);
// 	ctx.lineTo(space+w1,h1+h2+space-roundA-roundB);
// 	ctx.bezierCurveTo(space+w1,h1+h2+space-roundB,space+w1-roundB,h1+h2+space,space+w1-roundA-roundB,h1+h2+space);
// 	ctx.fillStyle =canvasGra;
// 	ctx.fill();
// 	ctx.stroke();
// 	ctx.closePath();
// 	ctx.save();
// }

// var drawLight = function(){
// 	if(model=="charge"){
// 		//闪电图案
// 		ctx.beginPath();
// 		ctx.globalCompositeOperation="source-over";
// 		ctx.fillStyle=lightStyle;
// 		let lx=space+w1*0.62;
// 		let ly=space+h2+2400*lightScale;
// 		ctx.moveTo(lx,ly);
// 		lx=lx-450*lightScale;
// 		ly=ly+1730*lightScale;
// 		ctx.lineTo(lx,ly);
// 		lx=lx+900*lightScale;
// 		ctx.lineTo(lx,ly);
// 		lx=lx-1600*lightScale;
// 		ly=ly+2560*lightScale;
// 		ctx.lineTo(lx,ly);
// 		lx=lx+510*lightScale;
// 		ly=ly-1790*lightScale;
// 		ctx.lineTo(lx,ly);
// 		lx=lx-1020*lightScale;
// 		ctx.lineTo(lx,ly);
// 		ctx.fill();
// 		ctx.closePath();
// 	}
// }
// var drawPercentage = function(percentage){
// 	//电池容量
// 	ctx.beginPath();
// 	ctx.globalCompositeOperation="source-over";
// 	ctx.fillStyle=volGra;
// 	ctx.moveTo(space+innerSpace,space+h2+h1-h1*percentage);//左上角
// 	ctx.lineTo(space+w1-innerSpace,space+h2+h1-h1*percentage);
// 	ctx.lineTo(space+w1-innerSpace,space+h2+h1-roundA-roundB-innerSpace);
// 	ctx.bezierCurveTo(space+w1-innerSpace,space+h2+h1-roundB-innerSpace,space+w1-innerSpace-roundB,space+h2+h1-innerSpace,space+w1-innerSpace-roundB,space+h2+h1-innerSpace);
// 	ctx.lineTo(space+innerSpace+roundA+roundB,space+h2+h1-innerSpace);
// 	ctx.bezierCurveTo(space+innerSpace+roundB,space+h2+h1-innerSpace,space+innerSpace,space+h2+h1-innerSpace-roundB,space+innerSpace,space+h2+h1-innerSpace-roundA-roundB);
// 	/* ctx.lineTo(2810,6910); */
// 	ctx.fill();
// 	ctx.closePath();
// }

// var render = function(){
// drawBattery();
// drawPercentage(0.4);
// drawSin();
// drawLight();
// }


// var axisLength = space+w1-innerSpace; //轴长
// var waveWidth = 0.0015;   //波浪宽度,数越小越宽    
// var waveHeight = 250; //波浪高度,数越大越高
// var speed = 0.09; //波浪速度，数越大速度越快
// var xOffset = 0; //波浪x偏移量
// var colors = ['rgba(0, 150, 138, 0.9)', 'rgba(108, 150, 138, 0.9)', 'rgba(255, 150, 138, 0.9)'];
// var nowRange = 40;   //用于做一个临时的range
//     // 绘制函数
//     let drawSin = function(xOffset, color, waveHeight){
//     	ctx.save();
//       ctx.clearRect(0, 0, w1+space*2, h1+h2+space*2); // 清空画布
// 			drawBattery();
// 			ctx.globalCompositeOperation="source-atop";
// drawLight();
//       // 遍历colors数组，进行绘制
//       colors.forEach((item, index) => {
//         ctx.fillStyle = item; // 画笔的颜色
//         ctx.beginPath();
//         ctx.moveTo(space+innerSpace, space+h1-h1*percentage);
//  				for(var x = space+innerSpace; x < space+w1-innerSpace; x += 20){
// 						//此处坐标(x,y)的取点，依靠公式 “振幅高*sin(x*振幅宽 + 振幅偏移量)”
// 						var y = Math.sin((-space-innerSpace-x) * waveWidth + xOffset) * 0.8 + 0.1;
				
// 						var dY = h1 * (1 - nowRange / 100 );
				
// 						ctx.lineTo(x, dY + y * waveHeight);     
// 				}
// 				//封闭路径
//         ctx.lineTo(space+w1-innerSpace, space+h1+h2-innerSpace-roundB-roundA);
// 				ctx.bezierCurveTo(space+w1-innerSpace, space+h1+h2-innerSpace-roundB,space+w1-innerSpace-roundB,space+h2+h1-innerSpace,space+w1-innerSpace-roundB,space+h2+h1-innerSpace);
//         ctx.lineTo(space+innerSpace+roundB+roundA, space+h1+h2-innerSpace);
// 				ctx.bezierCurveTo(space+innerSpace+roundB,space+h2+h1-innerSpace,space+innerSpace,space+h2+h1-innerSpace-roundB,space+innerSpace,space+h2+h1-innerSpace-roundA-roundB);
//         ctx.fill();
//         ctx.closePath();
				
// 				ctx.restore();
//       })

// 		drawLight();
//       //requestAnimationFrame(drawSin); // 自调
//     }
// drawSin();


