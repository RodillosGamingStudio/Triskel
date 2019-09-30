class boot extends Phaser.Scene {
    constructor() {
        super("bootScene");
    }

    preload(){
        
    }

    create() {
        this.scene.start('preloadScene');
    }

    update() {

    }
}