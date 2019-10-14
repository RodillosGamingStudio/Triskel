var config = {
	type: Phaser.WEBGL,
	width: 1280,
	height: 720,
	scale: {
		mode: Phaser.Scale.FIT,
		autoCenter: Phaser.Scale.CENTER_BOTH
	},
	autoRound: false,
	scene: [boot, preload, menu, partida, credits, settings]
	
};

var game = new Phaser.Game(config);

/*-------------------------------------*/
/*-----Ajustes globales del juego------*/
/*-------------------------------------*/

//Idioma actual (0 = Español, 1 = Inglés)
game.language = 0;

//Modo de juego actual (0, 1), se selecciona en menu
game.mode = 0;

//Volumen del juego (0-10), 5 por defecto
game.volume = 5;


    //this.scene.start('bootScene');
