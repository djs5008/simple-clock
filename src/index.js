import { Clock } from './clock';

// Set up stage
let stage = new createjs.StageGL('clock', { antialias: true });
let buffer = new createjs.Shape();
let clock = new Clock(stage.canvas.width / 2);
let center = {
  x: stage.canvas.width / 2,
  y: stage.canvas.height / 2,
};

// Cache stage components
stage.addChild(buffer);
buffer.cache(0, 0, stage.canvas.width, stage.canvas.height);
stage.setClearColor('#FFF');

// Handle Drawing
let draw = () => {
  // clear buffer
  buffer.graphics.clear();

  // draw clock
  clock.draw(center, buffer.graphics);

  // update buffer cache & stage
  buffer.updateCache();
  stage.update();
};

// Handle time changes
setInterval(() => {
  let date = new Date();
  let time = date.getTime();
  date.setTime(time - (date.getTimezoneOffset() * 60 * 1000));
  clock.setTime(date.getTime());
}, 0);

// Handle stage events
createjs.Ticker.on('tick', draw);
createjs.Ticker.framerate = 60;