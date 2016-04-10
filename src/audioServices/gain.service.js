"use strict";

export class GainService {
  constructor(_ctx) {
    this.ctx = _ctx || new AudioContext();
    this.gainNode = this.ctx.createGain();
    this.gainNode.connect(this.ctx.destination);
  }

  getNode() {
    return this.gainNode;
  }

  gain(val) {
    this.gainNode.gain.value = val || 0;
  }
}
