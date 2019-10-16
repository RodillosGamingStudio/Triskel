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
        console.log(data);
    }

    preload() {

    }

    create() {

        var volumen = this.volume;

        console.log(volumen);

        var mododejuego = -1;

        this.background = this.add.image(0, 0, 'menu');
        this.background.setOrigin(0, 0);

        var B = JSON.parse(buttons);

        //Variable que permite hacer botones
        var makebutton = new makeButton();

        //Botón de créditos
        var credits_button = makebutton.setButton(this, 800, 550, 'Bbutton', B.credits[game.language], 'creditsScene');

        //Botón de ajustes
        makebutton.setButton(this, 180, 500, 'Sbutton', B.settings[game.language], 'settingsScene', null, volumen);

        //Botón jugar
        var play_button = makebutton.setButton(this, 800, 350, 'Bbutton', B.play[game.language], 'none');

        var that = this;
        play_button.on('pointerdown', function () {
            //Desactivamos los botones no visibles
            play_button.disableInteractive();
            credits_button.disableInteractive();

            //Imagen y botones de selección de modo de juego
            that.add.image(800, 450, 'mode').setOrigin(0.5, 0.5);
            that.add.text(800, 220, B.gamemode[game.language], { fontFamily: '"Roboto Condensed"', fontSize: '36px', color: 'white' }).setOrigin(0.5);
            var mode1 = makebutton.setButton(that, 800, 312, 'Bbutton', B.mode1[game.language], 'mode');
            var mode2 = makebutton.setButton(that, 800, 437, 'Bbutton', B.mode2[game.language], 'mode');
            var mode3 = makebutton.setButton(that, 800, 562, 'Bbutton', B.mode3[game.language], 'mode');

            mode1.setFrame(0);

            mode1.on('pointerdown', function () {
                mode1.setFrame(1);
                mode2.setFrame(0);
                mododejuego = 0;
                makebutton.setButton(that, 920, 670, 'Lbutton', B.play[game.language], 'partidaScene', mododejuego, volumen);
            });

            mode2.on('pointerdown', function () {
                mode1.setFrame(0);
                mode2.setFrame(1);
                mododejuego = 1;
                makebutton.setButton(that, 920, 670, 'Lbutton', B.play[game.language], 'partidaScene', mododejuego, volumen);
            });

            makebutton.setButton(that, 685, 670, 'Lbutton', B.back[game.language], 'menuScene', mododejuego);
            //makebutton.setButton(that, 790, 600, 'Lbutton', B.play[game.language], 'partidaScene', game.mode);

        });

    }


    update() {



    }

}