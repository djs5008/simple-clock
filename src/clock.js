import { ClockHand, HandType } from './clock-hand';

export class Clock {

  constructor(radius) {
    this.radius = radius;
    this.hands = [];
    this.hands.push(new ClockHand(HandType.HOUR, radius * (2/3), 10));
    this.hands.push(new ClockHand(HandType.MINUTE, radius * (4/5), 5));
    this.hands.push(new ClockHand(HandType.SECOND, radius * (4 / 5), 2));
    this.hands.push(new ClockHand(HandType.MS, radius * (1/5), 1));
  }

  setTime(time) {
    this.hands.forEach(hand => hand.setAngle(time));
  }

  draw(center, graphics) {
    // Draw outline of clock
    graphics.setStrokeStyle(2);
    graphics.beginStroke(createjs.Graphics.getRGB(0,0,0));
    graphics.drawCircle(center.x, center.y, this.radius);
    graphics.endStroke();
    graphics.setStrokeStyle();

    // Draw sections
    this.drawIntervals(center, graphics);
    
    // Draw hands
    this.hands.forEach(hand => hand.draw(center, graphics));

    // Draw center circle
    graphics.beginFill(createjs.Graphics.getRGB(0, 0, 0));
    graphics.drawCircle(center.x, center.y, this.radius / 20);
    graphics.endFill();
  }

  drawIntervals(center, graphics) {
    let smallLen = 0.95;
    let bigLen = 0.9;
    let step = (360 / 60);
    graphics.beginStroke(createjs.Graphics.getRGB(0, 0, 0));
    for (let x = 0; x < 360; x += step) {
      
      let x1 = center.x + this.radius * Math.cos(x * (Math.PI / 180));
      let y1 = center.y + this.radius * Math.sin(x * (Math.PI / 180));
      let x2 = 0;
      let y2 = 0;
      let size = 0;

      // set stroke size based on if its an hour or minute
      if (x % (360/12) === 0) {
        graphics.setStrokeStyle(4);
        size = bigLen;
      } else {
        graphics.setStrokeStyle(1);
        size = smallLen;
      }

      x2 = center.x + (this.radius * size) * Math.cos(x * (Math.PI / 180));
      y2 = center.y + (this.radius * size) * Math.sin(x * (Math.PI / 180));

      // stroke to point
      graphics.moveTo(x1, y1);
      graphics.lineTo(x2, y2);
    }
    graphics.endStroke();
    graphics.setStrokeStyle();
  }

};