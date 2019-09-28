class Carta extends Phaser.GameObjects.Sprite{
    constructor(scene, cont) {
        var x = 0;
        var y = 0;
        super(scene, x, y, 'carta');

        this.movible;
        this.posVal = false;
        
        this.setInteractive();

        this.norte;
        this.sur;
        this.este;
        this.oeste;

        this.controlador = cont;
        
        //scene.add.existing(this);
        
        //this.setPosicion();
    }
    
    
    getA(){ return this.movible; }
    setA(b){ this.movible = b; }

    getX(){ return this.x; }
    setX(man){ this.x = man; }

    getY(){ return this.y; }
    setY(man){ this.y = man; }

    getNorte(){ return this.norte; }
    getSur(){ return this.sur; }
    getEste(){ return this.este; }
    getOeste(){ return this.oeste; }

    setNorte(a) { this.norte = a; }
    setSur(a) { this.sur = a; }
    setEste(a) { this.este = a; }
    setOeste(a) { this.oeste = a; }

    


    setPosicion(posx, posy){
        this.x = posx;
        this.y = posy;
    }
    
    pintarCarta(escena){
        escena.add.existing(this);
    }


    setCeldaCercana(celda){
        var distX = Math.abs(celda.getX() - this.getX());
        var distY = Math.abs(celda.getY() - this.getY());

        if(distX < 118 && distY < 153) {
            this.setX(celda.getX());
            this.setY(celda.getY());
        }
    }

}