class credits extends Phaser.Scene {
    constructor() {
        super("creditsScene");
    }

    preload(){
        
    }

    create() {
        //this.background = this.add.image(0, 0, 'menu');
        //this.background.setOrigin(0, 0);

        var B = JSON.parse(buttons);
        var makebutton = new makeButton();
        var back_button = makebutton.setButton(this, 70, 680, 'Lbutton', B.back[game.language], 'menuScene');
        back_button.tint = 	0x808080;

        var C = JSON.parse(credits_text);

        this.add.text(640, 70, C.title, { fontFamily: '"Roboto Condensed"', fontSize:'60px', color:'#e2b40b' }).setOrigin(0.5);
        this.add.text(640, 140, C.subtitle[game.language], { fontFamily: '"Roboto Condensed"', fontSize:'36px', color:'#e2b40b' }).setOrigin(0.5);

        for(var i = 0; i < C.roles[game.language].length; i++){
            this.add.text((i+1)*320, 260, C.roles[game.language][i], { fontFamily: '"Roboto Condensed"', fontSize:'30px', color:'#e2b40b' }).setOrigin(0.5);
            for(var j = 0; j < C.names[i].length; j++){
                this.add.text((i+1)*320, 260 + (j+1) * 100, C.names[i][j], { fontFamily: '"Roboto Condensed"', fontSize:'20px', color:'#e2b40b' }).setOrigin(0.5);
            }
        }




    }

    update() {

    }
}