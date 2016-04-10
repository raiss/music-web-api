"use strict";
import { GainService } from "./gain.service";

export class OscillatorService {
  constructor(_ctx) {
    this.ctx = _ctx || new AudioContext();
    this.oscillator = this.ctx.createOscillator();
    this.gainNode = new GainService(this.ctx);
  }

  out(destination) {
    console.log(destination);
    this.oscillator.connect(destination.getNode());
  }

  start() {
    this.oscillator.start(0);
  }

  waveform(type) {
    this.oscillator.type = type || 'sawtooth';
  }

  gain(val) {
    this.gainNode.gain(val);
  }

  modulate(val) {
    this.oscillator.frequency.value = val|| 440;
  }

  stop() {
    this.oscillator.stop(0);
    //TODO: distroy/disconect the oscillator
  }
}
