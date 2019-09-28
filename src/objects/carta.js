class Carta extends Phaser.GameObjects.Sprite{
    constructor(scene) {
        var x;
        var y;
        super(scene, x, y, 'carta');
        //scene.add.existing(this);
        
        //this.setPosicion();
    }

    

    setPosicion(posx, posy){
        this.x = posx;
        this.y = posy;
    }
    
    pintarCarta(escena){
        escena.add.existing(this);
    }

}