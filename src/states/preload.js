class preload extends Phaser.Scene {
    constructor() {
        super("preloadScene");
    }

    preload() {
        this.load.image('fondo', 'assets/fondo.jpg');
        this.load.image('carta', 'assets/carta.jpg');
        this.load.image('dorsocarta', 'assets/dorsocarta.jpg');
        this.load.image('dorsocarta2', 'assets/dorsocarta2.jpg');
        this.load.image('tablero', 'assets/tablero.png');
        this.load.image('celda', 'assets/celda.jpg');
        
        this.load.image('menu', 'assets/Pantallas/Menu.png');
        this.load.image('mode', 'assets/Pantallas/Mode.png');
        this.load.image('Scrollbar', 'assets/Botones/Scrollbar.png');
        this.load.image('Settings', 'assets/Pantallas/Settings.png');
        this.load.spritesheet('Bbutton', 'assets/Botones/Bbutton.png',  { frameWidth: 267, frameHeight: 86 });
        this.load.spritesheet('Lbutton', 'assets/Botones/Lbutton.png',  { frameWidth: 138, frameHeight: 75 });
        this.load.spritesheet('Sbutton', 'assets/Botones/Sbutton.png',  { frameWidth: 271, frameHeight: 250 });        
    }

    create() {
        this.scene.start('menuScene');       

    }

    update() {
        

    }
}