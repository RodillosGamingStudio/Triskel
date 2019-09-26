class preload extends Phaser.Scene {
    constructor() {
        super("preloadScene");
    }

    preload(){
        this.load.image('fondo', 'assets/prueba.jpg');
    }

    create() {
        //this.add.image(400, 300, 'fondo');
        this.scene.start('menuScene');
    }

    update() {

    }
}