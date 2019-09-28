class partida extends Phaser.Scene {
    constructor() {
        super("partidaScene");
    }

    preload(){
        
    }

    create() {
       //this.add.image(400, 300, 'fondo');
       this.background = this.add.image(0, 0, 'fondo');
       this.background.setOrigin(0, 0);
       
       this.carta1 = new Carta(this);
       //this.carta1.pintarCarta(this);

       this.jugador1 = new Jugador(this);

    }

    /*pintarCarta(){
        var i = 0;
        var mano = new Array(8);
        for (i; i < 5; i++) {
            mano[i] = new Carta(this);
            mano[i].y = mano[i].y + i*100;
        }
    }*/

    update() {
        //this.carta1.setPosicion(); 
    }

   
}