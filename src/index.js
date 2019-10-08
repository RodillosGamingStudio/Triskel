var config = {
          type: Phaser.WEBGL,
          width: 1280,
          height: 720,
          scene: [boot, preload, menu, partida, credits]
      };
  
      var game = new Phaser.Game(config);
      game.language = 0;

    //this.scene.start('bootScene');
     