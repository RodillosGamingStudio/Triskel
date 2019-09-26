class menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload(){
        
    }

    create() {
        this.scene.start('partidaScene');
    }

    update() {

    }
}