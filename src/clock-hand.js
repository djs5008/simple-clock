export class ClockHand {

  /**
   * Construct the base class for ClockHand
   *  Expected to be used by child types. Overriding setAngle() and *OPTIONALLY* draw().
   *  Be sure to accept the same required parameters when overriding
   * 
   * @param {number} length The length of the clock hand (used in default draw function)
   * @param {number} thickness The thickness of the clock hand (used in default draw function)
   */
  constructor(length, thickness) {
    this.length = length;
    this.thickness = thickness;
    this.angle = 0;
  }

  /**
   * Set the angle of the clock hand
   *  Defaulted to zero and expected to be overriden by child type
   * 
   * @param {number} time The current time since UNIX Epoch
   */
  setAngle(time) {
    this.angle = 0;
  }

  /**
   * Draw the current clock hand
   *  Override this if clock hands need to be drawn differently
   * 
   * @param {Object} center The center point of the clock
   * @param {number} center.x The x-position of the center of the clock
   * @param {number} center.y The y-position of the center of the clock
   * @param {createjs.Graphics} graphics The instance of graphics being drawn to
   */
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