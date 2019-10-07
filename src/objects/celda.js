class Celda extends Phaser.GameObjects.Sprite {
    constructor(scene) {



        var x = 0;
        var y = 0;

        super(scene, x, y, 'celda');

        this.height = 153;
        this.width = 118;
        this.centroHeight = 76.5;
        this.centroWidth = 59;
        this.owner;
        this.which;

        this.norte;
        this.sur;
        this.este;
        this.oeste;

        this.indice;
        this.setInteractive();

        this.ocupada;

    }

    getX() { return this.x; }
    getY() { return this.y; }

    setX(a) { this.x = a; }
    setY(a) { this.y = a; }

    pintarCelda(escena) {
        escena.add.existing(this);
    }

}