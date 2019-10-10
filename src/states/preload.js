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
        this.load.spritesheet('Bbutton', 'assets/Botones/Bbutton.png',  { frameWidth: 267, frameHeight: 86 });
        this.load.spritesheet('Lbutton', 'assets/Botones/Lbutton.png',  { frameWidth: 138, frameHeight: 75 });
    }

    create() {
        this.scene.start('menuScene');       

    }

    update() {
        

    }
}