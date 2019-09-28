class preload extends Phaser.Scene {
    constructor() {
        super("preloadScene");
    }

    preload(){
        this.load.image('fondo', 'assets/fondo.jpg');
        this.load.image('carta', 'assets/carta.jpg');
        this.load.image('tablero', 'assets/tablero.png');
    }

    create() {
        //this.add.image(400, 300, 'fondo');
        this.scene.start('menuScene'); 
    }

    update() {

    }
}