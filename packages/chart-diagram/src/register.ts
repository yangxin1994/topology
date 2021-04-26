import { registerNode, loadJS } from '@topology/core';
import { imageIconRect } from '@topology/core/middles/nodes/image.rect';
import { echarts, echartsObjs } from './echarts';

export function register(_echarts?: any) {
  echartsObjs.echarts = _echarts;
  if (!echartsObjs.echarts && !(echarts as any)) {
    loadJS(
      'https://cdn.bootcdn.net/ajax/libs/echarts/4.8.0/echarts.min.js',
      null,
      true
    );
  }
  registerNode('echarts', echarts, null, imageIconRect, null);
}
