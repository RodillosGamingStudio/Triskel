class Tablero extends Phaser.GameObjects.Sprite{
    constructor(scene, alto, ancho){
        var x = 640;
        var y = 360;
        super(scene, x, y, 'tablero');

        var i = 0;
        var j = 0;

        this.alto = alto;
        this.ancho = ancho;
        
        this.matrizCeldas = new Array();
        //this.Create2DArray(this.ancho, this.alto);
        //463 + 118*i, 130.5 + 153*j

        /*
        for(i; i < this.ancho; i++){
            this.matrizCeldas[i] = new Array(this.alto);
            for(j; j < this.alto; j++){
                this.matrizCeldas[i][j] = new Celda();
            }
        }*/
    }

    /*Create2DArray(filas, columnas) {
        var arr = new Array(filas);
      
        for (var i=0; i < filas;i++) {
           arr[i] = new Array(columnas);
        }
      
        return arr;

      }*/

    getAlto(){ return this.alto; }
    getAncho(){ return this.ancho; }

    crearMatrizCeldas(x, y){
        for(var i = 0; i < this.ancho; i++){
            this.matrizCeldas[i] = new Array();
            for(var j = 0; j < this.alto; j++){
                this.matrizCeldas[i][j] = new Celda();
                this.matrizCeldas[i][j].setX(463 + 118*i);
                this.matrizCeldas[i][j].setY(130.5 + 153*j);
            }
        }
    }

    getMatrizCeldas(){ return this.matrizCeldas; }

    pintarTablero(escena){
        escena.add.existing(this);
    }

    
}