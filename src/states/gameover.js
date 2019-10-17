class gameOver extends Phaser.Scene {
    constructor() {
        super("gameOverScene");
    }

    init(){
        
    }

    preload(){
        
    }

    create() {
        this.background = this.add.image(0, 0, 'gameover');
        this.background.setScale(1.25);
        this.background.setOrigin(0,0);

        var B = JSON.parse(buttons);

        this.add.text(800, 100, B.gameover[game.language], { fontFamily: '"Roboto Condensed"', fontSize: '60px', color: 'white' }).setOrigin(0.5);

        this.add.text(600, 250, B.player[game.language] + " 1", { fontFamily: '"Roboto Condensed"', fontSize: '50px', color: 'white' }).setOrigin(0.5);
        this.add.text(1000, 250, B.player[game.language] + " 2", { fontFamily: '"Roboto Condensed"', fontSize: '50px', color: 'white' }).setOrigin(0.5);

        var makebutton = new makeButton();
        makebutton.setButton(this, 550, 812.5, 'Bbutton', B.back[game.language], "menuScene");
        makebutton.setButton(this, 1050, 812.5, 'Bbutton', B.rematch[game.language], "partidaScene");
    }

    update() {

    }
}