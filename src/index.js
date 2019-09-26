var config = {
          type: Phaser.AUTO,
          width: 1280,
          height: 720,
          scene: [boot, preload, menu, partida]
      };
  
      var game = new Phaser.Game(config);

    //this.scene.start('bootScene');
     