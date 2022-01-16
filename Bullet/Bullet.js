/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Bullet extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Bullet/costumes/costume1.png", {
        x: -50,
        y: 4
      })
    ];

    this.sounds = [new Sound("pop", "./Bullet/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLONE_START, this.startAsClone)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *startAsClone() {
    this.visible = true;
    this.goto(this.sprites["Hennencok"].x, this.sprites["Hennencok"].y);
    /* TODO: Implement looks_gotofrontback */ null;
    while (true) {
      if (!this.touching(this.sprites["Sprite1"].andClones())) {
        this.x += 10;
      }
      if (this.touching(this.sprites["Sprite1"].andClones())) {
        this.visible = false;
        this.deleteThisClone();
      }
      if (this.touching(this.sprites["ArloStan"].andClones())) {
        yield* this.wait(0.02);
        this.visible = false;
        this.deleteThisClone();
      }
      yield;
    }
  }
}
