"use strict";

var ctx = {};
var oscillator = {};

export.module = {
  init,
  start,
  stop
}

function init(_ctx) {
  ctx = _ctx || new AudioContext();
  oscillator = ctx.createOscillator()
  oscillator.connect(ctx.destination)
}

function start() {
  oscillator.start(0);
}

function stop() {
  oscillator.stop(0);
  //TODO: distroy/disconect the oscillator
}
