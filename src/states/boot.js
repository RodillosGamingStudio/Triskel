class boot extends Phaser.Scene {
    constructor() {
        super("bootScene");
    }

    preload(){
        
    }

    create() {
        //this.add.image(400, 300, 'fondo');
        this.scene.start('preloadScene');
    }

    update() {

    }
}