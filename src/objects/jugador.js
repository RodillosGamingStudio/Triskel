
class Jugador {

	constructor(scene, cont) {
		var i = 0;
		var n = 100;
		var m = 100;

		//this.cartaSeleccionada = -1;

		this.mano = [];

		for (i; i < 5; i++) {
			this.mano[i] = new Carta(scene, cont);
			this.mano[i].setPosicion(m, n + 100 * i);
		}
	}

	getCartaSeleccionada() { return this.cartaSeleccionada; }
	setCartaSeleccionada(a) { this.cartaSeleccionada = a; }

	getMano() {
		return this.mano;
	}

	crearMano(scene) {
		var i = 0;
		for (i; i < 5; i++) {
			this.mano[i].pintarCarta(scene);
		}
	}

	setManoX(a) {
		var i = 0;
		for (i; i < 5; i++) {
			this.mano[i].setX(a);
		}
	}

}