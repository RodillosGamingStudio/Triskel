function tablero() {
    
    this.casilla;
    this.fondo;

    this.crearTablero = function() {
        //this.fondo = game.add.fondo('fondo'); 
        this.fondo = this.add.image(800, 600, 'fondo');   
    }


}