
class Jugador {
    
    constructor(scene){
        var i = 0;
        var n = 100;
        var mano = new Array(8);
        for (i; i < 5; i++) {
            mano[i] = new Carta(this);
            //mano[i].y = mano[i].y + i*100;
            n = n + 100;
            mano[i].pintarCarta(100, n);
        }
    }
}