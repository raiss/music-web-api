"use strict";

// let ctx = {};
// let oscillator = {};

export class OscillatorService {
  constructor(_ctx) {
    this.ctx = _ctx || new AudioContext();
    this.oscillator = this.ctx.createOscillator()
    this.gainNode = this.ctx.createGain();
    this.oscillator.connect(this.gainNode)
    this.oscillator.connect(this.ctx.destination)
  }

  start() {
    this.oscillator.start(0);
  }

  waveform(type) {
    this.oscillator.type = type || 'sawtooth';
  }

  gain(val) {
    console.log(val);
    this.gainNode.gain.value = val || 0;
  }

  modulate(val) {
    this.oscillator.frequency.value = val|| 440;
  }

  stop() {
    this.oscillator.stop(0);
    //TODO: distroy/disconect the oscillator
  }
}
