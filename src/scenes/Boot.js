/* globals __DEV__ */

class BootScene extends Phaser.Scene {
  
    constructor () {

        super({ key: 'BootScene' });

        if(__DEV__) { console.log('BootScene created!'); }
    }

    preload () {

        this.load.spritesheet('player', './assets/images/character.png', {frameWidth: 16, frameHeight: 32})
        this.load.image('mushroom', './assets/images/unnamed.png')
        this.load.image('spinner', './assets/images/spinner.gif')
        this.load.image('eye', './assets/images/eye.png')
    }

    create () {
        
        this.scene.start('BootMenu')
    }
}

export default BootScene
