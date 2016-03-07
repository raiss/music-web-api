"use strict";

// let ctx = {};
// let oscillator = {};

export class OscillatorService {
  constructor(_ctx) {
    this.ctx = _ctx || new AudioContext();
    this.oscillator = this.ctx.createOscillator()
    this.oscillator.connect(this.ctx.destination)
  }

  start() {
    this.oscillator.start(0);
  }

  modulate(val) {
    this.oscillator.frequency.value = val|| 440;
  }

  stop() {
    this.oscillator.stop(0);
    //TODO: distroy/disconect the oscillator
  }
}

// export function init(_ctx) {
//   ctx = _ctx || new AudioContext();
//   oscillator = ctx.createOscillator()
//   oscillator.connect(ctx.destination)
// }
