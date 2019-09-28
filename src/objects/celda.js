class Celda {
    constructor(){
        this.x;
        this.y;

        this.ocupada = false;

        this.height = 153;
        this.width = 118;
        this.centroHeight = 76.5;
        this.centroWidth = 59;


    }

    getX(){ return this.x; }
    getY(){ return this.y; }

    setX(a){ this.x = a; }
    setY(a){ this.y = a; }

    isOcupada(){ return this.ocupada; }
    setOcupada(){ 
        if(this.ocupada) {
            this.ocupada = false;
        } else {
            this.ocupada = true;
        }    
    }

}