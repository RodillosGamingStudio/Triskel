class CartaRagnar extends Carta {
    constructor(scene, cont){
        var x = 0;
        var y = 0;

        super(scene ,x, y);

        this.setTexture('dorsocarta2');

        this.setNorte("terrenal");
        this.setSur("terrenal");
        this.setEste("terrenal");
        this.setOeste("terrenal");

        this.setWhich(cont);

    }

}