var config = {
          type: Phaser.WEBGL,
          width: 1280,
          height: 720,
          scene: [boot, preload, menu, partida]
      };
  
      var game = new Phaser.Game(config);

    //this.scene.start('bootScene');
     