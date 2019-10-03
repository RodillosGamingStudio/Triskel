class Carta extends Phaser.GameObjects.Sprite {
    constructor(scene, cont) {
        var x = 0;
        var y = 0;
        super(scene, x, y, 'carta');

        //this.setInteractive();

        this.seleccionada;
        this.kk;

        this.colocada = false;

        this.norte;
        this.sur;
        this.este;
        this.oeste;

    }


    getA() { return this.movible; }
    setA(b) { this.movible = b; }

    getMovimiento() { return this.movimiento; }

    getX() { return this.x; }
    setX(man) { this.x = man; }

    getY() { return this.y; }
    setY(man) { this.y = man; }

    setPosicion(posx, posy) {
        this.x = posx;
        this.y = posy;
    }

    getId() { return this.ident; }
    setId(idn) { this.ident = idn; }


    getNorte() { return this.norte; }
    getSur() { return this.sur; }
    getEste() { return this.este; }
    getOeste() { return this.oeste; }

    setNorte(a) { this.norte = a; }
    setSur(a) { this.sur = a; }
    setEste(a) { this.este = a; }
    setOeste(a) { this.oeste = a; }



    pintarCarta(escena) {
        escena.add.existing(this);
    }


    /*
    setCeldaCercana(celda){
        var distX = Math.abs(celda.getX() - this.getX());
        var distY = Math.abs(celda.getY() - this.getY());

        //if(!celda.isOcupada()){
            if(distX < 118 && distY < 153) {
                this.setX(celda.getX());
                this.setY(celda.getY());
            }
        //} else {
            //this.setX(50);
            //this.setY(50);
        //}
    } */


}