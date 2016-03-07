"use strict";

var ctx = {};
var oscillator = {};

export function init(_ctx) {
  ctx = _ctx || new AudioContext();
  oscillator = ctx.createOscillator()
  oscillator.connect(ctx.destination)
}

export function start() {
  oscillator.start(0);
}

export function modulate(val) {
  oscillator.frequency.value = val|| 440;
}

export function stop() {
  oscillator.stop(0);
  //TODO: distroy/disconect the oscillator
}
