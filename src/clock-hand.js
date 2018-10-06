export let HandType = {
  HOUR: 'HOUR', MINUTE: 'MINUTE', SECOND: 'SECOND', MS: 'MS'
};

export class ClockHand {

  constructor(type, length, thickness) {
    this.type = type;
    this.length = length;
    this.thickness = thickness;
    this.angle = 0;
  }

  setAngle(time) {
    const HR  = (time / (1000 * 60 * 60)) % 12;
    const MIN = (time / (1000 * 60)) % 60;
    const SEC = (time / (1000)) % 60;
    const MS  =  time % 1000;
    const PI = Math.PI;

    switch (this.type) {
      case HandType.HOUR:
        this.angle = (PI / 2) - (((2 * PI) / 12) * HR);
        break;
      case HandType.MINUTE:
        this.angle = (PI / 2) - (((2 * PI) / 60) * MIN);
        break;
      case HandType.SECOND:
        this.angle = (PI / 2) - (((2 * PI) / 60) * SEC);
        break;
      case HandType.MS:
        this.angle = (PI / 2) - (((2 * PI) / 1000) * MS);
        break;
    }
  }

  draw(center, graphics) {
    let x1 = center.x;
    let y1 = center.y;
    let x2 = this.length * Math.cos(this.angle);
    let y2 = this.length * Math.sin(this.angle);

    graphics.setStrokeStyle(this.thickness);
    graphics.beginStroke(createjs.Graphics.getRGB(0,0,0));
    graphics.moveTo(x1, y1);
    graphics.lineTo(x1 + x2, y1 - y2);
    graphics.endStroke();
    graphics.setStrokeStyle();
  }

};