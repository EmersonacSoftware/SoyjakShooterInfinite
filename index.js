import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Jojju from "./Jojju/Jojju.js";
import Hennencok from "./Hennencok/Hennencok.js";
import Bullet from "./Bullet/Bullet.js";
import Sprite1 from "./Sprite1/Sprite1.js";
import ArloStan from "./ArloStan/ArloStan.js";
import Edgy from "./Edgy/Edgy.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Jojju: new Jojju({
    x: 1177.7937,
    y: 0.1584125,
    direction: 90,
    costumeNumber: 1,
    size: 830.0000000000001,
    visible: true
  }),
  Hennencok: new Hennencok({
    x: -7,
    y: 2,
    direction: 90,
    costumeNumber: 1,
    size: 200,
    visible: true
  }),
  Bullet: new Bullet({
    x: 116,
    y: 28,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  Sprite1: new Sprite1({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  ArloStan: new ArloStan({
    x: 36,
    y: 28,
    direction: 90,
    costumeNumber: 14,
    size: 100,
    visible: false
  }),
  Edgy: new Edgy({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  })
};

const project = new Project(stage, sprites);
export default project;
