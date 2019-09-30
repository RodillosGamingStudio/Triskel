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
    }

    getAlto(){ return this.alto; }
    getAncho(){ return this.ancho; }

    crearMatrizCeldas(scene){
        for(var i = 0; i < this.ancho; i++){
            this.matrizCeldas[i] = new Array();
            for(var j = 0; j < this.alto; j++){
                this.matrizCeldas[i][j] = new Celda(scene);
                this.matrizCeldas[i][j].setX(463 + 118*i);
                this.matrizCeldas[i][j].setY(130.5 + 153*j);
                this.matrizCeldas[i][j].pintarCelda(scene);                
            }
        }
    }

    getMatrizCeldas(){ return this.matrizCeldas; }
        
}