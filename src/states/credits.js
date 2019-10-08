class credits extends Phaser.Scene {
    constructor() {
        super("creditsScene");
    }

    preload(){
        
    }

    create() {
        this.background = this.add.image(0, 0, 'menu');
        this.background.setOrigin(0, 0);

        var B = JSON.parse(buttons);
        var makebutton = new makeButton();
        makebutton.setButton(this, 640, 360, 'Lbutton', B.back[game.language], 'menuScene');
    }

    update() {

    }
}