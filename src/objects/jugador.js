
class Jugador {

	constructor(scene, cont, ndeck) {
		var i = 0;
		var n = 100;
		var m = 100;
	
		//this.cartaSeleccionada = -1;

		this.mano = [];
		
		if (ndeck == 0) {
			this.mano = this.crearManoNordico(scene, cont);
		} else {
			this.mano = this.crearManoGriego(scene, cont);
		}

		if (cont == 1) {
			this.setManoPos(100,100);
		} else if (cont == 2) {
			this.setManoPos(980, 100);
		}
	}

	crearManoNordico(scene, cont){
		var aux = [];

		aux[0] = new Carta(scene, cont, 'dorsocarta');
		aux[1] = new Carta(scene, cont, 'dorsocarta');
		aux[2] = new Carta(scene, cont, 'dorsocarta');
		aux[3] = new Carta(scene, cont, 'dorsocarta');
		aux[4] = new Carta(scene, cont, 'dorsocarta');
		aux[5] = new Carta(scene, cont, 'dorsocarta');
		aux[6] = new Carta(scene, cont, 'dorsocarta');
		aux[7] = new Carta(scene, cont, 'dorsocarta');



		return aux;
	}

	crearManoGriego(scene, cont){
		var aux = [];

		aux[0] = new Carta(scene, cont, 'dorsocarta2');
		aux[1] = new Carta(scene, cont, 'dorsocarta2');
		aux[2] = new Carta(scene, cont, 'dorsocarta2');
		aux[3] = new Carta(scene, cont, 'dorsocarta2');
		aux[4] = new Carta(scene, cont, 'dorsocarta2');
		aux[5] = new Carta(scene, cont, 'dorsocarta2');
		aux[6] = new Carta(scene, cont, 'dorsocarta2');
		aux[7] = new Carta(scene, cont, 'dorsocarta2');

		return aux;
	}

	getCartaSeleccionada() { return this.cartaSeleccionada; }
	setCartaSeleccionada(a) { this.cartaSeleccionada = a; }

	getMano() {
		return this.mano;
	}

	pintarMano(scene) {
		var i = 0;
		for (i; i < 8; i++) {
			this.mano[i].pintarCarta(scene);
		}
	}

	setManoX(a) {
		var i = 0;
		for (i; i < 8; i++) {
			this.mano[i].setX(a);
		}
	}

	setManoPos(a, b){
		for (var i = 0; i < 4; i++) {
			this.mano[i].setX(a);
			this.mano[i].setY(b + i*154);
		}

		for (var i = 4; i < 8; i++) {
			this.mano[i].setX(a + 120);
			this.mano[i].setY(b + (i-4)*154);
		}
	}



}