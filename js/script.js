class Loader {
  constructor() {
    this.loadText = document.querySelector('.loading-text');
    this.bg = document.querySelector('.background');
    this.load = 0;
  }

  start() {
    setInterval(() => this.blurring(), 30);
  }

  blurring() { 
    this.load++;
    if (this.load > 99) {
      clearInterval(this.int);
    }
    this.loadText.innerText = `${this.load}%`;
    this.loadText.style.opacity = this.scale(this.load, 0, 100, 1, 0);
    this.bg.style.filter = `blur(${this.scale(this.load, 0, 100, 30, 0)}px)`;
  }

  scale(num, in_min, in_max, out_min, out_max) {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
  }
}
const loader = new Loader();
loader.start();