import { ClockHand } from "../../clock-hand";

export class MinuteHand extends ClockHand {

  /**
   * Construct a new MinuteHand type
   *  Used in the standard package of clock-hands
   *  Represents the current minute of the current time
   * 
   * @param {number} length 
   * @param {number} thickness 
   */
  constructor(length, thickness) {
    const DEFAULT_LENGTH = 1;
    const DEFAULT_THICKNESS = 1;
    super(
      length === undefined ? DEFAULT_LENGTH : length,
      thickness === undefined ? DEFAULT_THICKNESS : thickness
    );
  }

  /**
   * Override setAngle from base ClockHand
   *  Set the angle based on the current minute
   */
  setAngle(time) {
    const MIN = (time / (1000 * 60)) % 60;
    const PI = Math.PI;
    this.angle = (PI / 2) - (((2 * PI) / 60) * MIN);
  }

}