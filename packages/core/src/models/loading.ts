import { DivLayer } from '../divLayer';

export class Loading {
  dom: HTMLElement;
  side = 20;

  constructor(parent: DivLayer) {
    this.dom = document.createElement('div');
    this.dom.innerHTML = `    <svg
    focusable="false"
    class="topology-loading"
    width="${this.side}px"
    height="${this.side}px"
    fill="#1890ff"
    aria-hidden="true"
    viewBox="0 0 1024 1024"
  >
    <path
      d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"
    ></path>
  </svg>`;

    parent.canvas.appendChild(this.dom);
    this.dom.style.position = 'absolute';

    let sheet: CSSStyleSheet;
    for (let i = 0; i < document.styleSheets.length; i++) {
      if (document.styleSheets[i].title === 'le5le/loading') {
        sheet = document.styleSheets[i];
      }
    }

    if (!sheet) {
      let style = document.createElement('style');
      style.type = 'text/css';
      style.title = 'le5le.com/loading';
      document.head.appendChild(style);

      style = document.createElement('style');
      style.type = 'text/css';
      document.head.appendChild(style);
      sheet = style.sheet;
      sheet.insertRule(
        `@keyframes rotatechange {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }`
      );
      sheet.insertRule(`     .topology-loading {
          animation: rotatechange 1s linear 0s infinite normal;
        }`);
    }
  }

  show(x: number, y: number) {
    this.dom.style.display = 'block';
    this.dom.style.left = x - this.side / 2 + 'px';
    this.dom.style.top = y - this.side / 2 + 'px';
  }

  hide() {
    this.dom.style.display = 'none';
  }
}
