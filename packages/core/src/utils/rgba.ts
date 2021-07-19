function callRed(val: number) {
  if (val > 255) {
    return 255;
  } else if (val < 0) {
    return 0;
  } else {
    return Math.round(val);
  }
}

function callGreen(val: number) {
  if (val > 255) {
    return 255;
  } else if (val < 0) {
    return 0;
  } else {
    return Math.round(val);
  }
}
function callBlue(val: number) {
  if (val > 255) {
    return 255;
  } else if (val < 0) {
    return 0;
  }
  return Math.round(val);
}
function callAlpha(val: number) {
  if (val > 1) {
    return 1;
  } else if (val < 0) {
    return 0;
  } else {
    return val;
  }
}

export function RGBA(imageData: any, rgba: any[]) {
  let data = imageData.data,
    nPixels = data.length,
    red = callRed(rgba[0]),
    green = callGreen(rgba[1]),
    blue = callBlue(rgba[2]),
    alpha = callAlpha(rgba[3]),
    i,
    ia;
  for (i = 0; i < nPixels; i += 4) {
    ia = 1 - alpha;

    data[i] = red * alpha + data[i] * ia; // r
    data[i + 1] = green * alpha + data[i + 1] * ia; // g
    data[i + 2] = blue * alpha + data[i + 2] * ia; // b
  }
}
