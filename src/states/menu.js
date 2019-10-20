class menu extends Phaser.Scene {

    constructor() {
        super("menuScene");

    }

    init(data) {
        if (data.volumen) {
            this.volume = data.volumen;
        } else if (data.volumen == 0) {
            this.volume = 0;
        } else {
            this.volume = 5;
        }
      
    }

    preload() {

    }

    create() {

        var volumen = game.volume;

        var clicksonido = game.sound.add('clickmenus');

        var music = this.sound.add('musica3', {volume: (game.volume/20) ,loop: true});
        music.play();

        var mododejuego = -1;

        this.background = this.add.image(0, 0, 'menu');
        this.background.setOrigin(0, 0);

        var titulo = this.add.image(800, 105, 'titulo');

        var B = JSON.parse(buttons);
        var MODES = JSON.parse(modes_text);

        //Variable que permite hacer botones
        var makebutton = new makeButton();

        //Botón de créditos
        var credits_button = makebutton.setButton(this, 800, 550, 'Bbutton', B.credits[game.language], 'creditsScene', null, music);

        //Botón de ajustes
        var settings_button = makebutton.setButton(this, 180, 500, 'Sbutton', B.settings[game.language], 'settingsScene', null, music);

        //Botón jugar
        var play_button = makebutton.setButton(this, 800, 350, 'Bbutton', B.play[game.language], 'none', null, music);


        //Contexto
        var that = this;


        //Acciones genéricas al pulsar un botón de modo
        function setModeDescription(){
            makebutton.setButton(that, 575, 750, 'Lbutton', B.play[game.language], 'deckSelectScene', mododejuego, music);
            
            if(game.language == 0)
                that.add.image(1125, 450, 'infoESP').setScale(1.35).setOrigin(0.5);
            else
                that.add.image(1125, 450, 'infoENG').setScale(1.35).setOrigin(0.5);

            game.modetext = that.add.text(780, 350, "", { fontFamily: 'Metamorphous', fontSize: '16px', color: 'black' });
        }
        
        play_button.on('pointerdown', function () {
            clicksonido.play();
            //Desactivamos los botones no visibles
            play_button.disableInteractive();
            credits_button.disableInteractive();
            settings_button.disableInteractive();

            //Si se ha creado la ventana
            var set = false;

            //Imagen y botones de selección de modo de juego
            that.add.image(400, 450, 'mode').setScale(1.25).setOrigin(0.5, 0.5);

            that.add.text(400, 187.5, B.gamemode[game.language], { fontFamily: 'Metamorphous', fontSize: '46px', color: 'white' }).setOrigin(0.5);
            var mode1 = makebutton.setButton(that, 400, 312.5, 'Bbutton', MODES.mode1.name[game.language], 'mode');
            var mode2 = makebutton.setButton(that, 400, 437.5, 'Bbutton', MODES.mode2.name[game.language], 'mode');
            var mode3 = makebutton.setButton(that, 400, 562.5, 'Bbutton', MODES.mode3.name[game.language], 'mode');

            mode1.setFrame(0);

            mode1.on('pointerdown', function () {
                clicksonido.play();
                mode1.setFrame(1);
                mode2.setFrame(0);
                mode3.setFrame(0)
                //mododejuego = 0;
                game.mode = 0;
                if(!set){
                    setModeDescription();
                    set = true;
                }
                
                game.modetext.text = MODES.mode1.description[game.language];
            });

            mode2.on('pointerdown', function () {
                clicksonido.play();
                mode1.setFrame(0);
                mode2.setFrame(1);
                mode3.setFrame(0)
                //mododejuego = 1;
                game.mode = 1;
                
                if(!set){
                    setModeDescription();
                    set = true;
                }

                game.modetext.text = MODES.mode2.description[game.language];
            });

            mode3.on('pointerdown', function () {
                clicksonido.play();
                mode1.setFrame(0);
                mode2.setFrame(0);
                mode3.setFrame(1)
                //mododejuego = 2;
                game.mode = 2;
                if(!set){
                    setModeDescription();
                    set = true;
                }

                game.modetext.text = MODES.mode3.description[game.language];
            });

            makebutton.setButton(that, 225, 750, 'Lbutton', B.back[game.language], 'menuScene', null, music);
            //makebutton.setButton(that, 790, 600, 'Lbutton', B.play[game.language], 'partidaScene', game.mode);

        });

    }


    update() {



    }

}