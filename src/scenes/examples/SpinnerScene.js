import Spinner from '../../sprites/Spinner';

class SpinnerScene extends Phaser.Scene {
  constructor() {
    super({
      key: 'SpinnerScene'
    });
  }

  create() {

    this.spinner = new Spinner({
      scene: this,
      key: 'spinner',
      x: this.game.config.width / 2,
      y: this.game.config.height / 2 - 150,
    })

    this.tweens.add({
      targets: this.spinner,
      y: this.game.config.height / 2 + 150,
      duration: 2000,
      ease: 'Power2',
      yoyo: true,
      loop: -1
    });

    var text = this.add.text(350, 250, '', { font: '16px Courier', fill: '#00ff00' });

    text.setText([
            'Name: ',
            'Level: '
        ]);
  }

  update() {
    this.spinner.update();
  }
}

export default SpinnerScene;
