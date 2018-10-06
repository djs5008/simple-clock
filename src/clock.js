import { HourHand } from "./hand-types/standard/hour";
import { MinuteHand } from "./hand-types/standard/minute";
import { SecondHand } from "./hand-types/standard/second";
import { MSHand } from "./hand-types/standard/ms";
import { ClockHand } from "./clock-hand";

export class Clock {

  /**
   * Construct a base-clock type object
   *  This will add hands from the "standard" hand package
   *  Feel free to experiment with different hand types
   * 
   * @param {number} radius The radius of the clock
   */
  constructor(radius) {
    this.radius = radius;
    this.hands = [];
    this.addHand(new HourHand(radius * (2/3), radius / 20));
    this.addHand(new MinuteHand(radius * (4/5), radius / 40));
    this.addHand(new SecondHand(radius * (4 / 5), radius / 80));
    this.addHand(new MSHand(radius * (1/5), radius / 160));
  }

  /**
   * Add a hand to this clock
   * 
   * @param {ClockHand} hand The hand being added to the clock
   * @throws If the hand passed is not an instance of ClockHand
   */
  addHand(hand) {
    if (hand instanceof ClockHand) {
      this.hands.push(hand);
    } else {
      throw 'ERROR: Invalid Hand Type. You can only add clock-hands to the clock.';
    }
  }

  /**
   * Set the current time of the clock
   *  This will set the angle of all children hands
   * 
   * @param {number} time The number of milliseconds since UNIX Epoch
   */
  setTime(time) {
    this.hands.forEach(hand => hand.setAngle(time));
  }

  /**
   * Draw the current clock
   * 
   * @param {Object} center The center point of the clock
   * @param {number} center.x The x-position of the center of the clock
   * @param {number} center.y The y-position of the center of the clock
   * @param {createjs.Graphics} graphics The instance of graphics being drawn to
   */
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
        graphics.setStrokeStyle(this.radius / 40);
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