
class Jugador{
    
    constructor(scene, cont){
        var i = 0;
        var n = 100;
        var m = 100;
        this.mano = [];
        for (i; i<5; i++) {
          this.mano[i] = new Carta(scense, cont);
          this.mano[i].setPosicion(m, n + 100*i);
        }
    }
    
    getMano(){
      return this.mano;
    }
    
    crearMano(scene){
      var o = 0;
      for (o; o<5; o++) {
        this.mano[o].pintarCarta(scene); 
      }
    }

    setManoX(a) {
        var i =0;
        for (i; i<5; i++) {
            this.mano[i].setX(a);  
        }
    }

}