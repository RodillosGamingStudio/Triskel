//CARTAS NORDICAS
class CartaRagnar extends Carta {
    constructor(scene, cont, own){
        var x = 0;
        var y = 0;

        super(scene ,x, y);

        this.seleccionada;

        this.setTexture('ragnar');

        // terrenal sagrado oscuro neutro

        this.setNorte("oscuro");
        this.setSur("oscuro");
        this.setEste("terrenal");
        this.setOeste("neutro");

        this.setWhich(cont);
        this.setOwner(own);

    }
}

class CartaN1 extends Carta {
    constructor(scene, cont, own){
        var x = 0;
        var y = 0;

        super(scene ,x, y);

        this.seleccionada;

        this.setTexture('hela');

        // terrenal sagrado oscuro neutro

        this.setNorte("oscuro");
        this.setSur("terrenal");
        this.setEste("neutro");
        this.setOeste("sagrado");

        this.setWhich(cont);
        this.setOwner(own);

    }
}

class CartaN2 extends Carta {
    constructor(scene, cont, own){
        var x = 0;
        var y = 0;

        super(scene ,x, y);

        this.seleccionada;

        this.setTexture('freyja');

        // terrenal sagrado oscuro neutro

        //3	4	1	1

        this.setNorte("sagrado");
        this.setSur("sagrado");
        this.setEste("neutro");
        this.setOeste("sagrado");

        this.setWhich(cont);
        this.setOwner(own);

    }
}

class CartaN3 extends Carta {
    constructor(scene, cont, own){
        var x = 0;
        var y = 0;

        super(scene ,x, y);

        this.seleccionada;

        this.setTexture('jomsviking');

        // terrenal sagrado oscuro neutro
        // 4	1	3	2

        this.setNorte("terrenal");
        this.setSur("neutro");
        this.setEste("oscuro");
        this.setOeste("oscuro");

        this.setWhich(cont);
        this.setOwner(own);

    }
}

//CARTAS GRIEGAS
class CartaMedusa extends Carta {
    constructor(scene, cont, own){
        var x = 0;
        var y = 0;

        super(scene ,x, y);

        this.setTexture('medusa');

        // terrenal sagrado oscuro neutro
        //2  3	2	2

        this.setNorte("terrenal");
        this.setSur("terrenal");
        this.setEste("neutro");
        this.setOeste("terrenal");

        this.setWhich(cont);
        this.setOwner(own);

    }
}

class CartaG1 extends Carta {
    constructor(scene, cont, own){
        var x = 0;
        var y = 0;

        super(scene ,x, y);

        this.setTexture('poseidon');

        //terrenal sagrado oscuro neutro
        // 3	1	4	2

        this.setNorte("neutro");
        this.setSur("sagrado");
        this.setEste("sagrado");
        this.setOeste("terrenal");

        this.setWhich(cont);
        this.setOwner(own);

    }
}

class CartaG2 extends Carta {
    constructor(scene, cont, own){
        var x = 0;
        var y = 0;

        super(scene ,x, y);

        this.setTexture('zeus');

        //terrenal sagrado oscuro neutro
        //1	1	4	1

        this.setNorte("oscuro");
        this.setSur("neutro");
        this.setEste("sagrado");
        this.setOeste("sagrado");

        this.setWhich(cont);
        this.setOwner(own);

    }
}

class CartaG3 extends Carta {
    constructor(scene, cont, own){
        var x = 0;
        var y = 0;

        super(scene ,x, y);

        this.setTexture('thot');

        //terrenal sagrado oscuro neutro
        //2	4	2	1

        this.setNorte("sagrado");
        this.setSur("terrenal");
        this.setEste("oscuro");
        this.setOeste("neutro");

        this.setWhich(cont);
        this.setOwner(own);

    }
}