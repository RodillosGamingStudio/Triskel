var config = {
          type: Phaser.AUTO,
          width: 800,
          height: 600,
          scene: [boot, preload, menu, partida]
      };
  
      var game = new Phaser.Game(config);

    //this.scene.start('bootScene');
     