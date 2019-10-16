class settings extends Phaser.Scene {
    constructor() {
        super("settingsScene");
    }

    init(data){
        this.vol = data.volumen;
       
    }

    preload(){
        
    }

    create() {
        this.background = this.add.image(0, 0, 'Settings');
        this.background.setOrigin(0,0);

        var that = this;

        var pepito = this.vol;

        var S = JSON.parse(settings_text);

        var makebutton = new makeButton();

        var volumen = pepito;

        //Botón de retorno al menú
        makebutton.setButton(this, 800, 815, "Bbutton", S.return[game.language], "menuScene", null, volumen);

        this.add.text(800, 187, S.settings[game.language], { fontFamily: '"Roboto Condensed"', fontSize:'60px', color:'white' }).setOrigin(0.5);

        //Botón de idioma
        var language_button = makebutton.setButton(this, 805, 375, 'Bbutton', S.language[1][game.language], 'settingsScene');
        language_button.on('pointerdown', function () {
            if(game.language == 1){
                game.language = 0;  
            }
            else{
            game.language = 1;  
            }

        });

        this.add.text(500, 375, S.language[0][game.language]+" :", { fontFamily: '"Roboto Condensed"', fontSize:'40px', color:'white' }).setOrigin(0.5);

        //Barra de volumen
        this.add.text(500, 500, S.volume[game.language]+" :", { fontFamily: '"Roboto Condensed"', fontSize:'40px', color:'white' }).setOrigin(0.5);
        
        this.add.image(910, 500, 'Scrollbar').setScale(1.55, 1);
        var volume_bar = this.add.sprite(750 + game.volume * 30, 500, 'Lbutton', 0);
        
        var volume_number = this.add.text(750 + game.volume * 30, 500, game.volume, { fontFamily: '"Roboto Condensed"', fontSize:'40px', color:'white' });
        volume_number.setOrigin(0.5);

        volume_bar.setInteractive();
        this.input.setDraggable(volume_bar);
        
        // ARREGLAR THIS
        var jose = this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
            if((volume_bar.x <= 750 && dragX - gameObject.x < 0)||(volume_bar.x >= 1070 && dragX - gameObject.x > 0)) return;
            gameObject.x = dragX;
            game.volume = ((dragX - 750) / 30 | 0);
            volume_number.x = dragX;
            volume_number.text = game.volume;


            that.input.on('dragend', function (pointer, gameObject, jose){
                
                //volumen = game.volume
                game.volume = ((dragX - 750) / 30 | 0);
                
                //Botón de retorno al menú
                //makebutton.setButton(that, 800, 815, "Bbutton", S.return[game.language], "menuScene", null, volumen);


            })
        });

        makebutton.setButton(that, 800, 815, "Bbutton", S.return[game.language], "menuScene", null, volumen);

    }

    update() {

    }
}