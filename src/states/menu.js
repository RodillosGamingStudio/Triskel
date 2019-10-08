class menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload(){
        
    }

    create() {       
        this.background = this.add.image(0, 0, 'menu');
        this.background.setOrigin(0, 0);

        var B = JSON.parse(buttons);

        var makebutton = new makeButton();
        makebutton.setButton(this, 640, 280, 'Bbutton', B.play[game.language], 'partidaScene');
        makebutton.setButton(this, 640, 440, 'Bbutton', B.credits[game.language], 'creditsScene');  
        var language_button = makebutton.setButton(this, 1100, 50, 'LButton', B.language[game.language], 'menuScene');
        
        language_button.on('pointerdown', function () {
            if(game.language == 1){
                game.language = 0;  
            }
            else{
            game.language = 1;  
            }

        });
        
    }


    update() {
        

    }

}