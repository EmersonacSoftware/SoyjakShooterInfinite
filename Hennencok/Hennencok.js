/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Hennencok extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume3", "./Hennencok/costumes/costume3.png", {
        x: 36,
        y: 33
      })
    ];

    this.sounds = [new Sound("pop", "./Hennencok/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.KEY_PRESSED, { key: "w" }, this.whenKeyWPressed),
      new Trigger(Trigger.KEY_PRESSED, { key: "s" }, this.whenKeySPressed),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.KEY_PRESSED, { key: "a" }, this.whenKeyAPressed),
      new Trigger(Trigger.KEY_PRESSED, { key: "d" }, this.whenKeyDPressed),
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "space" },
        this.whenKeySpacePressed
      ),
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "space" },
        this.whenKeySpacePressed2
      )
    ];
  }

  *whenKeyWPressed() {
    if (this.keyPressed("w")) {
      while (!!this.keyPressed("w")) {
        this.y += 4;
        yield;
      }
    } else {
      null;
    }
  }

  *whenKeySPressed() {
    if (this.keyPressed("s")) {
      while (!!this.keyPressed("s")) {
        this.y += -4;
        yield;
      }
    } else {
      null;
    }
  }

  *whenGreenFlagClicked() {
    yield* this.wait(0.4);
    this.visible = true;
    this.size = 200;
    while (true) {
      /* TODO: Implement looks_gotofrontback */ null;
      yield;
    }
  }

  *whenKeyAPressed() {
    if (this.keyPressed("a")) {
      while (!!this.keyPressed("a")) {
        this.x += -4;
        yield;
      }
    } else {
      null;
    }
  }

  *whenKeyDPressed() {
    if (this.keyPressed("d")) {
      while (!!this.keyPressed("d")) {
        this.x += 4;
        yield;
      }
    } else {
      null;
    }
  }

  *whenKeySpacePressed() {
    if (this.keyPressed("space")) {
      while (!!this.keyPressed("space")) {
        this.sprites["Bullet"].createClone();
        yield* this.wait(0.5);
        yield;
      }
    } else {
      null;
    }
  }

  *whenKeySpacePressed2() {
    if (this.keyPressed("space")) {
      while (!!this.keyPressed("space")) {
        /* TODO: Implement looks_gotofrontback */ null;
        yield;
      }
    } else {
      null;
    }
  }
}
