class Carta extends Phaser.GameObjects.Sprite{
    constructor(scene) {
        var x = 0;
        var y = 0;
        super(scene, x, y, 'carta');

        this.movible;
        this.posVal = true;
        
        this.setInteractive();
        
        //scene.add.existing(this);
        
        //this.setPosicion();
    }   
    getA(){
        return this.movible;
    }

    setA(b){
        this.movible = b;
    }

    getX(){
        return this.x;
    }
    setX(man){
        this.x = man;
    }

    getY(){
        return this.y;
    }
    setY(man){
        this.y = man;
    }



    setPosicion(posx, posy){
        this.x = posx;
        this.y = posy;
    }
    
    pintarCarta(escena){


        escena.add.existing(this);
    }



}