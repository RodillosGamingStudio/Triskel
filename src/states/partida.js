class partida extends Phaser.Scene {
    constructor() {
        super("partidaScene");

        var mano1;
        var mano2;
        var celdas;

        this.pos0X1 = [];
        this.pos0Y1 = [];
        this.pos0X2 = [];
        this.pos0Y2 = [];
    }

    

    preload(){
        
    }

    create() {
       //this.add.image(400, 300, 'fondo');
       this.background = this.add.image(0, 0, 'fondo');
       this.background.setOrigin(0, 0);

       
       this.tablero = new Tablero(this, 4, 4);
       this.tablero.crearMatrizCeldas();
       this.tablero.pintarTablero(this);
       
       /*
       this.carta1 = new Carta(this);
       this.carta1.setPosicion(0,0);
       this.carta1.pintarCarta(this);
        */

       this.celdas = this.tablero.getMatrizCeldas();

       this.jugador1 = new Jugador(this, 1);
       this.jugador1.crearMano(this);
     
       this.jugador2 = new Jugador(this, 2);
       this.jugador2.crearMano(this);
       this.jugador2.setManoX(1185);
       this.mano1 = this.jugador1.getMano();
       this.mano2 = this.jugador2.getMano();      
       
       for(var z = 0; z<this.mano1.length; z++){
       this.setPos0X1(z ,this.mano1[z].getX());
       this.setPos0Y1(z ,this.mano1[z].getY());
       }    



       for(var z = 0; z<this.mano2.length; z++){
        this.setPos0X2(z ,this.mano2[z].getX());
        this.setPos0Y2(z ,this.mano2[z].getY());
        }  

    /*pintarCarta(){
        var i = 0;
        var mano = new Array(8);
        for (i; i < 5; i++) {
            mano[i] = new Carta(this);
            mano[i].y = mano[i].y + i*100;
        }
    }*/
}

    update() {

        //Jugador 1
        //X 
        for (var z=0; z<this.mano1.length; z++){
            this.mano1[z].getX();
            this.mano1[z].getY();
            if(this.mano1[z].getX() < 404 || this.mano1[z].getX() > 876  || 
               this.mano1[z].getY() < 54 || this.mano1[z].getY() > 666){
                this.mano1[z].setA(true);
            } else { this.mano1[z].setA(false); }
            if (this.mano1[z].getA()){
            this.input.setDraggable(this.mano1[z], true);
            } else {
            this.input.setDraggable(this.mano1[z], false);     
            }
        
        //Y

       }

       //Jugador 2
       for (var z=0; z<this.mano2.length; z++){
        this.mano2[z].getX();
        if(this.mano2[z].getX() < 404 || this.mano2[z].getX() > 876  || 
               this.mano2[z].getY() < 54 || this.mano2[z].getY() > 666){
            this.mano2[z].setA(true);
        } else { this.mano2[z].setA(false); }
        if (this.mano2[z].getA()){
        this.input.setDraggable(this.mano2[z], true);
        } else {
        this.input.setDraggable(this.mano2[z], false);     
        }

        }
    
        this.input.on('drag', function (pointer, gameObject, dragX, dragY) {

           // this.pos0X = gameObject.x;
            gameObject.x = dragX;
            gameObject.y = dragY;
    
        });

        this.input.on('dragend', function (pointer, gameObject) {
            if (gameObject.x < 404 || gameObject.x > 876 || gameObject.y < 54 || gameObject.y > 666){
                gameObject.posVal = false;
            } else {
                gameObject.posVal = true;
            }
            
        });

        for (var z = 0; z<this.mano1.length;z++){
            if (!this.mano1[z].posVal){
                this.mano1[z].setX(this.getPos0X1(z));
                this.mano1[z].setY(this.getPos0Y1(z));
                this.mano1[z].posVal = true;
            } else {
                for(var i = 0; i < this.tablero.getAncho(); i++){
                        //this.mano1[z].setCeldaCercana(this.celdas[i]);
                    for(var j = 0; j < this.tablero.getAlto(); j++){
                        this.mano1[z].setCeldaCercana(this.celdas[i][j]);
                        //console.log(this.celdas[i][j].getX());
                        //debugger;
                    }
                }
            }
         }



         for (var z = 0; z<this.mano2.length;z++){
            if (!this.mano2[z].posVal){
                this.mano2[z].setX(this.getPos0X2(z));
                this.mano2[z].setY(this.getPos0Y2(z));
                this.mano2[z].posVal = true;
            }
         }

         //Mecanica de flips
         for (var z = 0; z < this.mano1.length; z++) {
            for (var w = 0; w < this.mano2.length; w++) {


            }
         }


        
    }


    setPos0X1(index, c){
        this.pos0X1[index] = c;
    }

    getPos0X1(index){
        return this.pos0X1[index];
    }

    setPos0Y1(index, c){
        this.pos0Y1[index] = c;
    }

    getPos0Y1(index){
        return this.pos0Y1[index];
    }

    
    setPos0X2(index, c){
        this.pos0X2[index] = c;
    }

    getPos0X2(index){
        return this.pos0X2[index];
    }

    setPos0Y2(index, c){
        this.pos0Y2[index] = c;
    }

    getPos0Y2(index){
        return this.pos0Y2[index];
    }

}
