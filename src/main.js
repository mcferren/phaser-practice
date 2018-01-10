import 'phaser';
import BootScene from './scenes/Boot';
import BootMenu from './scenes/BootMenu';
import PlayerScene from './scenes/examples/PlayerScene';
import MushroomScene from './scenes/examples/MushroomScene';
import SpinnerScene from './scenes/examples/SpinnerScene';
import EyesScene from './scenes/examples/EyesScene';


let config = {
    type: Phaser.AUTO,
    parent: 'content',
    width: 800,
    height: 600,
    scene: [
      BootScene,
      BootMenu,
      MushroomScene,
      SpinnerScene,
      PlayerScene,
      EyesScene
    ]
};

let game = new Phaser.Game(config);
