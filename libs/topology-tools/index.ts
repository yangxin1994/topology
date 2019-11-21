import {Tools} from './profile';

export class Shape {
  parentElem: HTMLElement;
  leftToolDiv = document.createElement('div');

  constructor(parent: string | HTMLElement) {
    if (typeof parent === 'string') {
      this.parentElem = document.getElementById(parent);
    } else {
      this.parentElem = parent;
    }
    for (const toolitem of Tools) {
      var group = document.createElement('div');
      var titleDiv = document.createElement('div');
      titleDiv.className="title";
      titleDiv.innerText=toolitem.group;
      
      var btnsDiv = document.createElement('div');
      btnsDiv.className="buttons";
      for(const item of toolitem.children){
        var shape = document.createElement('a');
        shape.title = item.name;
        shape.draggable = true;
        var icon = document.createElement('i');
        icon.className="iconfont "+item.icon;      
        shape.ondragstart = event => {
          debugger;
          event.dataTransfer.setData('Text', JSON.stringify(item.data));
        };
        shape.appendChild(icon);
        btnsDiv.appendChild(shape);
      }
      group.appendChild(titleDiv);
      group.appendChild(btnsDiv);
      this.leftToolDiv.appendChild(group);
    }
    this.parentElem.appendChild(this.leftToolDiv);    
    console.dir(this.parentElem);
  }
}

// this.storeService.set('lineName', ret.data.lineName);
// this.storeService.set('fromArrowType', ret.data.fromArrowType);
// this.storeService.set('toArrowType', ret.data.toArrowType);

//右键菜单
// var rightMenu = 
// '<div class="context-menus" id="canvas-menus" style="">'+
// '    <div><a class="disabled"> 置顶 </a></div>'+
// '    <div><a class="disabled"> 置底 </a></div>'+
// '    <div class="line"></div>'+
// '    <div><a class="disabled"> 组合 </a></div>'+
// '    <div><a class="disabled"> 取消组合 </a></div>'+
// '    <div class="line"></div>'+
// '    <div><a class="disabled"> 删除 </a></div>'+
// '    <div class="line"></div>'+
// '    <div><a class="flex"><span  class="full">撤消</span><span  class="ml50">Ctrl + Z</span></a></div>'+
// '    <div><a> 恢复 <span  class="ml50">Ctrl + Shift+ Z</span></a></div>'+
// '    <div class="line"></div>'+
// '    <div><a class="flex"><span  class="full">剪切</span><span  class="ml50">Ctrl + X</span></a></div>'+
// '    <div><a class="flex"><span  class="full">复制</span><span  class="ml50">Ctrl + C</span></a></div>'+
// '    <div><a class="flex"><span  class="full">粘贴</span><span  class="ml50">Ctrl + V</span></a></div>'+
// '    <div class="line"></div>'+
// '    <div><a class="flex disabled"><span  class="full">复制节点图片地址</span></a></div>'+
// '</div>';

//menu

// <div class="menus">
//     <div class="item pointer"><img src="/assets/img/favicon.ico"></div>
//     <div class="item"><a> 文件 </a>
//         <div class="dropdown">
//             <div class="item"><a> 新建文件 </a></div>
//             <div class="item"><a> 打开本地文件（新建） </a></div>
//             <div class="item"><a> 导入本地文件... </a></div>
//             <div class="item line"></div>
//             <div class="">
//                 <div class="item"><a> 保存到云端 </a></div>
//                 <div class="item"><a> 另存为...（在云端） </a></div>
//                 <div class="item"><a> 保存到本地 </a></div>
//                 <div class="item line"></div>
//                 <div class="item"><a> 下载为PNG </a></div>
//                 <div class="item"><a> 下载为SVG </a></div>
//             </div>
//         </div>
//     </div>
//     <div class="item"><a>编辑</a>
//         <div class="dropdown">
//             <div class="item"><a> 撤消 <span class="ml50">Ctrl + Z</span></a></div>
//             <div class="item"><a> 恢复 <span class="ml50">Ctrl + Shift+ Z</span></a></div>
//             <div class="item line"></div>
//             <div class="item"><a> 剪切 <span class="ml50">Ctrl + X</span></a></div>
//             <div class="item"><a> 复制 <span class="ml50">Ctrl + C</span></a></div>
//             <div class="item"><a> 粘贴 <span class="ml50">Ctrl + V</span></a></div>
//         </div>
//     </div>
//     <div class="full text-center">
//         <div>
//             <form class="inline hidden ng-untouched ng-pristine ng-valid" novalidate="" ng-reflect-ui-touch-form="[object Object]"><input class="input ng-untouched ng-pristine ng-valid" name="filename" required="" ng-reflect-required="" ng-reflect-name="filename" ng-reflect-model="cube-demo"></form>
//             <div class="inline" title="双击修改"> cube-demo </div>
//         </div>
//     </div>
//     <div class="flex">
//         <div class="separator"></div>
//         <div class="item mh5"> 视图：100%
//         </div>
//         <div class="separator"></div>
//         <div class="item" title="锁定"><a><i class="iconfont icon-unlock"></i></a></div>
//         <div class="separator"></div>
//         <div class="item lines"><a><i style="position: relative;top: .06rem;" class="iconfont icon-curve"></i></a>
//             <div class="dropdown">
//                 <div class="item"> 默认连线类型： </div>
//                 <div class="item"><a><i class="iconfont icon-curve"></i></a></div>
//                 <div class="item"><a><i class="iconfont icon-polyline"></i></a></div>
//                 <div class="item"><a><i class="iconfont icon-line"></i></a></div>
//             </div>
//         </div>
//         <div class="item lines"><a><i style="position: relative;top: .06rem;" class="iconfont icon-from-"></i></a>
//             <div class="dropdown">
//                 <div class="item"> 默认起点箭头： </div>
//                 <div class="item"><a><i class="iconfont icon-from-"></i></a></div>
//                 <div class="item"><a><i class="iconfont icon-from-triangleSolid"></i></a></div>
//                 <div class="item"><a><i class="iconfont icon-from-triangle"></i></a></div>
//                 <div class="item"><a><i class="iconfont icon-from-diamondSolid"></i></a></div>
//                 <div class="item"><a><i class="iconfont icon-from-diamond"></i></a></div>
//                 <div class="item"><a><i class="iconfont icon-from-circleSolid"></i></a></div>
//                 <div class="item"><a><i class="iconfont icon-from-circle"></i></a></div>
//                 <div class="item"><a><i class="iconfont icon-from-line"></i></a></div>
//                 <div class="item"><a><i class="iconfont icon-from-lineUp"></i></a></div>
//                 <div class="item"><a><i class="iconfont icon-from-lineDown"></i></a></div>
//             </div>
//         </div>
//         <div class="item lines"><a><i style="position: relative;top: .06rem;" class="iconfont icon-to-triangleSolid"></i></a>
//             <div class="dropdown">
//                 <div class="item"> 默认终点箭头： </div>
//                 <div class="item"><a><i class="iconfont icon-to-"></i></a></div>
//                 <div class="item"><a><i class="iconfont icon-to-triangleSolid"></i></a></div>
//                 <div class="item"><a><i class="iconfont icon-to-triangle"></i></a></div>
//                 <div class="item"><a><i class="iconfont icon-to-diamondSolid"></i></a></div>
//                 <div class="item"><a><i class="iconfont icon-to-diamond"></i></a></div>
//                 <div class="item"><a><i class="iconfont icon-to-circleSolid"></i></a></div>
//                 <div class="item"><a><i class="iconfont icon-to-circle"></i></a></div>
//                 <div class="item"><a><i class="iconfont icon-to-line"></i></a></div>
//                 <div class="item"><a><i class="iconfont icon-to-lineUp"></i></a></div>
//                 <div class="item"><a><i class="iconfont icon-to-lineDown"></i></a></div>
//             </div>
//         </div>
//     </div>
// </div>

