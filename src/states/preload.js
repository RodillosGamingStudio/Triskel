class preload extends Phaser.Scene {
    constructor() {
        super("preloadScene");
    }

    preload(){
        this.load.image('fondo', 'assets/prueba.jpg');
        this.load.image('carta', 'assets/carta.jpg');
    }

    create() {
        //this.add.image(400, 300, 'fondo');
        this.scene.start('menuScene'); 
    }

    update() {

    }
}