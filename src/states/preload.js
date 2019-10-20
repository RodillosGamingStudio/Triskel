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
        this.load.audio('clickmenus', 'assets/Sonidos/clickmenus.mp3');

        this.load.image('fondo', 'assets/tablero1.jpg');
        this.load.image('fondo2', 'assets/tablero2.jpg');
        this.load.image('carta', 'assets/carta.jpg');
        //this.load.image('dorsocarta', 'assets/dorsocarta.jpg');
        //this.load.image('dorsocarta2', 'assets/dorsocarta2.jpg');

        //Cartas 
        this.load.image('ragnar', 'assets/Cartas/Nordicas/Ragnar.png');
        this.load.image('ragnarbig', 'assets/Cartas/Nordicas/RagnarBig.png');
        this.load.image('hela', 'assets/Cartas/Nordicas/Hela.png');
        this.load.image('helabig', 'assets/Cartas/Nordicas/HelaBig.png');
        this.load.image('thor', 'assets/Cartas/Nordicas/Thor.png');
        this.load.image('thorbig', 'assets/Cartas/Nordicas/ThorBig.png');        
        this.load.image('odin', 'assets/Cartas/Nordicas/Odin.png');
        this.load.image('odinbig', 'assets/Cartas/Nordicas/OdinBig.png');

        this.load.image('medusa', 'assets/Cartas/Griegas/Medusa.png');
        this.load.image('medusabig', 'assets/Cartas/Griegas/MedusaBig.png');
        this.load.image('poseidon', 'assets/Cartas/Griegas/Poseidon.png');
        this.load.image('poseidonbig', 'assets/Cartas/Griegas/PoseidonBig.png');
        this.load.image('zeus', 'assets/Cartas/Griegas/Zeus.png');
        this.load.image('zeusbig', 'assets/Cartas/Griegas/ZeusBig.png');
        this.load.image('afrodita', 'assets/Cartas/Griegas/Afrodita.png');
        this.load.image('afroditabig', 'assets/Cartas/Griegas/AfroditaBig.png');
        this.load.image('atenea', 'assets/Cartas/Griegas/Atenea.png');
        this.load.image('ateneabig', 'assets/Cartas/Griegas/AteneaBig.png');
        this.load.image('hades', 'assets/Cartas/Griegas/Hades.png');
        this.load.image('hadesbig', 'assets/Cartas/Griegas/HadesBig.png');
        //Fin de cartas

        //this.load.image('tablero', 'assets/tablero.png');
        this.load.image('celda', 'assets/celda.png');

        this.load.image('menu', 'assets/Pantallas/Menu.png');
        this.load.image('mode', 'assets/Pantallas/Mode.png');
        this.load.image('infoENG', 'assets/Pantallas/infoENG.png');
        this.load.image('infoESP', 'assets/Pantallas/infoESP.png');
        this.load.image('helpESP', 'assets/Pantallas/dummyESP.png');
        this.load.image('helpENG', 'assets/Pantallas/dummyENG.png');
        this.load.image('Scrollbar', 'assets/Botones/Scrollbar.png');
        this.load.image('Settings', 'assets/Pantallas/Settings.png');
        this.load.image('gameover', 'assets/Pantallas/Gameover.png');

        this.load.spritesheet('Bbutton', 'assets/Botones/Bbutton.png', { frameWidth: 267, frameHeight: 86 });
        this.load.spritesheet('Lbutton', 'assets/Botones/Lbutton.png', { frameWidth: 138, frameHeight: 75 });
        this.load.spritesheet('Sbutton', 'assets/Botones/Sbutton.png', { frameWidth: 271, frameHeight: 250 });
        this.load.spritesheet('mute', 'assets/Botones/mute.png', { frameWidth: 271, frameHeight: 250 });




        var progressBar = this.add.graphics();
        var progressBox = this.add.graphics();
        progressBox.fillStyle(0x222222, 0.8);
        progressBox.fillRect(480, 420, 640, 60);

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
            progressBar.fillRect(490, 425, 620 * value, 50);
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
        });

    }
    create() {
        this.scene.start('menuScene');     

    }

    update() {


    }
}