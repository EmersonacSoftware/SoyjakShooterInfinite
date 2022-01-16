/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class ArloStan extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("BonkBrainlet", "./ArloStan/costumes/BonkBrainlet.png", {
        x: 211,
        y: 79
      }),
      new Costume("Boomlet", "./ArloStan/costumes/Boomlet.png", {
        x: 271.5,
        y: 221.5
      }),
      new Costume("brickbrainlet", "./ArloStan/costumes/brickbrainlet.png", {
        x: 236,
        y: 213
      }),
      new Costume("BushBrainlet", "./ArloStan/costumes/BushBrainlet.png", {
        x: 318.5,
        y: 360
      }),
      new Costume(
        "CavedInBrainlet",
        "./ArloStan/costumes/CavedInBrainlet.png",
        { x: 256, y: 256 }
      ),
      new Costume(
        "CaveInBrainlet2",
        "./ArloStan/costumes/CaveInBrainlet2.png",
        { x: 211, y: 239 }
      ),
      new Costume(
        "ClappingBrainlet",
        "./ArloStan/costumes/ClappingBrainlet.png",
        { x: 230, y: 69 }
      ),
      new Costume("PitBrainlet", "./ArloStan/costumes/PitBrainlet.png", {
        x: 211,
        y: 239
      }),
      new Costume("PlugBrainlet", "./ArloStan/costumes/PlugBrainlet.png", {
        x: 208,
        y: 326
      }),
      new Costume("TwistBrainlet", "./ArloStan/costumes/TwistBrainlet.png", {
        x: 211,
        y: 181
      }),
      new Costume(
        "FrontFacingSoyjak",
        "./ArloStan/costumes/FrontFacingSoyjak.png",
        { x: 162, y: 174 }
      ),
      new Costume("Soyjak", "./ArloStan/costumes/Soyjak.png", {
        x: 154,
        y: 184
      }),
      new Costume("SoyjakCrying2", "./ArloStan/costumes/SoyjakCrying2.png", {
        x: 123,
        y: 184
      }),
      new Costume("SoyjakGuzzling", "./ArloStan/costumes/SoyjakGuzzling.png", {
        x: 176,
        y: 187
      })
    ];

    this.sounds = [new Sound("pop", "./ArloStan/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLONE_START, this.startAsClone)
    ];

    this.vars.hitz = 0;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *startAsClone() {
    this.visible = true;
    this.goto(200, this.random(-121, 160));
    /* TODO: Implement looks_gotofrontback */ null;
    /* TODO: Implement looks_goforwardbackwardlayers */ null;
    /* TODO: Implement looks_goforwardbackwardlayers */ null;
    this.size = 25;
    this.costume = this.random(1, 14);
    while (true) {
      this.x += -2;
      if (this.touching(this.sprites["Edgy"].andClones())) {
        this.deleteThisClone();
      }
      if (this.touching(this.sprites["Hennencok"].andClones())) {
        this.deleteThisClone();
      }
      if (this.touching(this.sprites["Bullet"].andClones())) {
        this.stage.vars.score += 100;
        this.deleteThisClone();
      }
      yield;
    }
  }
}
