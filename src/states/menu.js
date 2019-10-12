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

        //Variable que permite hacer botones
        var makebutton = new makeButton();

        //Botón de créditos
        var credits_button = makebutton.setButton(this, 640, 440, 'Bbutton', B.credits[game.language], 'creditsScene');
        
        //Botón de ajustes
        makebutton.setButton(this, 180, 400, 'Sbutton', B.settings[game.language], 'settingsScene'); 

        //Botón jugar
        var play_button = makebutton.setButton(this, 640, 280, 'Bbutton', B.play[game.language], 'none');

        var that = this;
        play_button.on('pointerdown', function () {
            //Desactivamos los botones no visibles
            play_button.disableInteractive();
            credits_button.disableInteractive();

            //Imagen y botones de selección de modo de juego
            that.add.image(640, 360, 'mode').setOrigin(0.5, 0.5);
            that.add.text(640, 150, B.gamemode[game.language], { fontFamily: '"Roboto Condensed"', fontSize:'36px', color:'white' }).setOrigin(0.5);
            var mode1 = makebutton.setButton(that, 640, 300, 'Bbutton', B.mode1[game.language], 'mode');
            var mode2 = makebutton.setButton(that, 640, 400, 'Bbutton', B.mode2[game.language], 'mode');

            mode1.setFrame(1);
            game.mode = 0;

            mode1.on('pointerdown', function () {  
                mode1.setFrame(1);
                mode2.setFrame(0);
                game.mode = 0;
            });            

            mode2.on('pointerdown', function () {  
                mode1.setFrame(0);
                mode2.setFrame(1);
                game.mode = 1;
            });

            makebutton.setButton(that, 500, 600, 'Lbutton', B.back[game.language], 'menuScene');
            makebutton.setButton(that, 790, 600, 'Lbutton', B.play[game.language], 'partidaScene');

        }); 
        
    }


    update() {

    }

}