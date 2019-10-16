class preload extends Phaser.Scene {
    constructor() {
        super("preloadScene");
    }

    preload() {
        this.load.image('fondo', 'assets/tablero1.jpg');
        this.load.image('fondo2', 'assets/tablero2.jpg');
        this.load.image('carta', 'assets/carta.jpg');
        //this.load.image('dorsocarta', 'assets/dorsocarta.jpg');
        //this.load.image('dorsocarta2', 'assets/dorsocarta2.jpg');

        //Cartas 
        this.load.image('berserker', 'assets/Cartas/Nordicas/Berserker.jpg');
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
        this.load.image('Scrollbar', 'assets/Botones/Scrollbar.png');
        this.load.image('Settings', 'assets/Pantallas/Settings.png');

        this.load.spritesheet('Bbutton', 'assets/Botones/Bbutton.png',  { frameWidth: 267, frameHeight: 86 });
        this.load.spritesheet('Lbutton', 'assets/Botones/Lbutton.png',  { frameWidth: 138, frameHeight: 75 });
        this.load.spritesheet('Sbutton', 'assets/Botones/Sbutton.png',  { frameWidth: 271, frameHeight: 250 });        
    

        //MUSICAS
        this.load.audio('musica1', 'assets/Sonidos/musica1.mp3');
        this.load.audio('musica2', 'assets/Sonidos/musica2.mp3');
        this.load.audio('musica3', 'assets/Sonidos/musica3.mp3');


        //SONIDOS
        this.load.audio('clickCarta', 'assets/Sonidos/clickCarta.mp3');
        this.load.audio('clickCelda', 'assets/Sonidos/clickCelda.mp3');
        

    }
    create() {
        this.scene.start('menuScene');       

    }

    update() {
        

    }
}