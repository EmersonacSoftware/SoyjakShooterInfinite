/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("backdrop1", "./Stage/costumes/backdrop1.svg", {
        x: 240,
        y: 180
      })
    ];

    this.sounds = [new Sound("bgm_space", "./Stage/sounds/bgm_space.mp3")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];

    this.vars.myVariable = 0;
    this.vars.score = 9200;
    this.vars.dukeHealth = 0;
    this.vars.dukeDeath = 0;
  }

  *whenGreenFlagClicked() {
    while (true) {
      yield* this.wait(this.random(1, 3));
      this.sprites["ArloStan"].createClone();
      yield;
    }
    
    
  }
}
