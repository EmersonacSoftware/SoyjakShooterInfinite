/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Jojju extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Jojju", "./Jojju/costumes/Jojju.png", { x: 480, y: 44 }),
      new Costume("costume1", "./Jojju/costumes/costume1.svg", {
        x: 1.0525477707006416,
        y: 2.5
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];
  }

  *whenGreenFlagClicked() {
    this.costume = "costume1";
    this.goto(1724, 0);
    this.size = 830;
    yield* this.wait(0.02);
    this.costume = "Jojju";
    this.goto(1724, 0);
    while (true) {
      yield* this.glide(80, -1724, 1);
      this.goto(1724, 0);
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      /* TODO: Implement looks_gotofrontback */ null;
      yield;
    }
  }
}
