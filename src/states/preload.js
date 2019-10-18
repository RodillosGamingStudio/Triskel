class preload extends Phaser.Scene {
    constructor() {
        super("preloadScene");
    }

    preload() {

        //MUSICAS
        this.load.audio('musica1', 'assets/Sonidos/musica1.mp3');
        this.load.audio('musica2', 'assets/Sonidos/musica2.mp3');
        this.load.audio('musica3', 'assets/Sonidos/musica3.mp3');


        //SONIDOS
        this.load.audio('clickCarta', 'assets/Sonidos/clickCarta.mp3');
        this.load.audio('clickCelda', 'assets/Sonidos/clickCelda.mp3');

        this.load.image('fondo', 'assets/tablero1.jpg');
        this.load.image('fondo2', 'assets/tablero2.jpg');
        this.load.image('carta', 'assets/carta.jpg');
        //this.load.image('dorsocarta', 'assets/dorsocarta.jpg');
        //this.load.image('dorsocarta2', 'assets/dorsocarta2.jpg');

        //Cartas 
        this.load.image('berserker', 'assets/Cartas/Nordicas/Berserker.jpg');
        this.load.image('berserkerbig', 'assets/Cartas/Nordicas/RagnarBig.png');
        this.load.image('einherjar', 'assets/Cartas/Nordicas/Einherjar.jpg');
        this.load.image('freyja', 'assets/Cartas/Nordicas/Freyja.jpg');
        this.load.image('jomsviking', 'assets/Cartas/Nordicas/Jomsviking.jpg');

        this.load.image('escarabajo', 'assets/Cartas/Griegas/Escarabajo.jpg');
        this.load.image('sacerdote', 'assets/Cartas/Griegas/Sacerdote.jpg');
        this.load.image('serket', 'assets/Cartas/Griegas/Serket.jpg');
        this.load.image('thot', 'assets/Cartas/Griegas/Thot.jpg');
        //Fin de cartas

        //this.load.image('tablero', 'assets/tablero.png');
        this.load.image('celda', 'assets/celda.png');

        this.load.image('menu', 'assets/Pantallas/Menu.png');
        this.load.image('mode', 'assets/Pantallas/Mode.png');
        this.load.image('infoENG', 'assets/Pantallas/infoENG.png');
        this.load.image('infoESP', 'assets/Pantallas/infoESP.png');
        this.load.image('Scrollbar', 'assets/Botones/Scrollbar.png');
        this.load.image('Settings', 'assets/Pantallas/Settings.png');
        this.load.image('gameover', 'assets/Pantallas/Gameover.png');

        this.load.spritesheet('Bbutton', 'assets/Botones/Bbutton.png', { frameWidth: 267, frameHeight: 86 });
        this.load.spritesheet('Lbutton', 'assets/Botones/Lbutton.png', { frameWidth: 138, frameHeight: 75 });
        this.load.spritesheet('Sbutton', 'assets/Botones/Sbutton.png', { frameWidth: 271, frameHeight: 250 });
        this.load.spritesheet('mute', 'assets/Botones/mute.png', { frameWidth: 271, frameHeight: 250 });



/*
        var progressBar = this.add.graphics();
        var progressBox = this.add.graphics();
        progressBox.fillStyle(0x222222, 0.8);
        progressBox.fillRect(240, 270, 320, 50);

        var width = this.cameras.main.width;
        var height = this.cameras.main.height;
        var loadingText = this.make.text({
            x: width / 2,
            y: height / 2 - 50,
            text: 'Loading...',
            style: {
                font: '20px monospace',
                fill: '#ffffff'
            }
        });
        loadingText.setOrigin(0.5, 0.5);

        var percentText = this.make.text({
            x: width / 2,
            y: height / 2 - 5,
            text: '0%',
            style: {
                font: '18px monospace',
                fill: '#ffffff'
            }
        });
        percentText.setOrigin(0.5, 0.5);

        var assetText = this.make.text({
            x: width / 2,
            y: height / 2 + 50,
            text: '',
            style: {
                font: '18px monospace',
                fill: '#ffffff'
            }
        });

        assetText.setOrigin(0.5, 0.5);

        this.load.on('progress', function (value) {
            percentText.setText(parseInt(value * 100) + '%');
            progressBar.clear();
            progressBar.fillStyle(0xffffff, 1);
            progressBar.fillRect(250, 280, 300 * value, 30);
        });

        this.load.on('fileprogress', function (file) {
            assetText.setText('Loading asset: ' + file.key);
        });

        this.load.on('complete', function () {
            progressBar.destroy();
            progressBox.destroy();
            loadingText.destroy();
            percentText.destroy();
            assetText.destroy();
        });*/

    }
    create() {
        this.scene.start('menuScene');     

    }

    update() {


    }
}