var config = {
	type: Phaser.WEBGL,
	width: 1600,
	height: 900,
	scale: {
		mode: Phaser.Scale.FIT,
		autoCenter: Phaser.Scale.CENTER_BOTH
	},
	autoRound: false,
	scene: [boot, preload, menu, partida, credits, settings, gameOver, deckSelect]
	
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

//Texto del modo de juego
game.modetext;

//Mazos de cada jugador (Inicializado a -1 por defecto, 0 = Nórdicos, 1 = Griegos)
game.deck = [-1, -1];

    //this.scene.start('bootScene');
