class partida extends Phaser.Scene {
    constructor() {
        super("partidaScene");

        //var mano1;
        //var mano2;
        var celdas;


        this.pos0X1 = [];
        this.pos0Y1 = [];
        this.pos0X2 = [];
        this.pos0Y2 = [];

        this.cartaId;
    }

    preload() {

    }

    create() {

        //Variables para el jugador 1
        var mano1;
        var a1 = -1;
        var b1 = -1;
        var c1 = -1;
        var x01;
        var y01;

        //Variables para el jugador 2
        var mano2;
        var a2 = -1;
        var b2 = -1;
        var c2 = -1;
        var x02;
        var y02;


        //Variables generales
        var celdas;
        var turno = -1;
        var turnonumerico = 1;

        this.background = this.add.image(0, 0, 'fondo');
        this.background.setOrigin(0, 0);


        this.tablero = new Tablero(this, 4, 4);
        this.tablero.crearMatrizCeldas(this);

        celdas = this.tablero.getMatrizCeldas();

        this.jugador1 = new Jugador(this, 1);
        this.jugador1.crearMano(this);

        this.jugador2 = new Jugador(this, 2);
        this.jugador2.crearMano(this);
        this.jugador2.setManoX(1185);


        mano1 = this.jugador1.getMano();
        /*
        this.mano1[0].setId('a1');
        this.mano1[1].setId('a2');
        this.mano1[2].setId('a3');
        this.mano1[3].setId('a4');
        this.mano1[4].setId('a5');
        */

        mano2 = this.jugador2.getMano();
        /*
        this.mano2[0].setId('b1');
        this.mano2[1].setId('b2');
        this.mano2[2].setId('b3');
        this.mano2[3].setId('b4');
        this.mano2[4].setId('b5');
        */

        //pruebas

        mano1[0].sur = "sagrado";
        mano1[0].norte = "terrenal";
        mano1[0].este = "sagrado";
        mano1[0].oeste = "terrenal";
        mano1[0].owner = 0;
        mano2[0].norte = "oscuro";
        mano2[0].sur = "oscuro";
        mano2[0].este = "oscuro";
        mano2[0].oeste = "neutro";
        mano2[0].owner = 1;

        //Posicion inicial de las cartas
        for (var z = 0; z < mano1.length; z++) {
            this.setPos0X1(z, mano1[z].getX());
            this.setPos0Y1(z, mano1[z].getY());
        }
        for (var z = 0; z < mano2.length; z++) {
            this.setPos0X2(z, mano2[z].getX());
            this.setPos0Y2(z, mano2[z].getY());
        }


        //MANO 1
        //Para seleccionar solamente una carta a la vez
        if (turno == -1) {
            for (var i = 0; i < mano1.length; i++) {
                mano1[i].setInteractive();
            }
        }
        for (var i = 0; i < mano1.length; i++) {
            mano1[i].setData({ seleccionada: false, i: i });
            var jose1 = mano1[i].on('pointerup', function (turnonumerico) {
                if (a1 != -1) {
                    mano1[a1].setData({ 'seleccionada': false });
                    mano1[a1].clearTint();
                }
                a1 = this.getData('i');
                x01 = this.x;
                y01 = this.y;
                //console.log(x01, y01);
                console.log(turnonumerico);
                this.setData({ "seleccionada": true });
                this.setTint(0xff0000);
                //console.log(cartaAux);
                //mostrarSeleccionadas();

                //Para las celdas
                for (var i = 0; i < 4; i++) {
                    for (var j = 0; j < 4; j++) {
                        celdas[i][j].setData({ ocupada: false, i: i, j: j });
                        var chuko1 = celdas[i][j].on('pointerup', function (jose1, chuko2) {

                            b1 = this.getData('i');
                            c1 = this.getData('j');

                            if (!mano1[a1].colocada) {
                                if (!celdas[b1][c1].ocupada) {
                                    celdas[b1][c1].indice = a1;
                                    celdas[b1][c1].norte = mano1[a1].norte;
                                    celdas[b1][c1].sur = mano1[a1].sur;
                                    celdas[b1][c1].este = mano1[a1].este;
                                    celdas[b1][c1].oeste = mano1[a1].oeste;
                                    celdas[b1][c1].owner = mano1[a1].owner;

                                    console.log(celdas[b1][c1].norte, celdas[b1][c1].sur, celdas[b1][c1], celdas[b1][c1]);

                                    mano1[a1].x = celdas[b1][c1].x;
                                    mano1[a1].y = celdas[b1][c1].y;
                                    mano1[a1].clearTint();
                                    mano1[a1].colocada = true;
                                    celdas[b1][c1].ocupada = true;
                                    //ESQUINA SUPERIOR IZQUIERDA
                                    if (b1 == 0 && c1 == 0) {
                                        if (celdas[1][0].owner != celdas[0][0].owner) {
                                            if (celdas[0][0].este == "terrenal" && (celdas[1][0].oeste == "oscuro" || celdas[1][0].oeste == "neutro")) {
                                                celdas[1][0].owner = 0;
                                                mano2[celdas[1][0].indice].setInteractive();
                                                mano2[celdas[1][0].indice].clearTint();
                                                mano2[celdas[1][0].indice].removeInteractive();
                                            }
                                            if (celdas[0][0].este == "sagrado" && (celdas[1][0].oeste == "terrenal" || celdas[1][0].oeste == "neutro")) {
                                                celdas[1][0].owner = 0;
                                                mano2[celdas[1][0].indice].setInteractive();
                                                mano2[celdas[1][0].indice].clearTint();
                                                mano2[celdas[1][0].indice].removeInteractive();
                                            }
                                            if (celdas[0][0].este == "oscuro" && (celdas[1][0].oeste == "sagrado" || celdas[1][0].oeste == "neutro")) {
                                                celdas[1][0].owner = 0;
                                                mano2[celdas[1][0].indice].setInteractive();
                                                mano2[celdas[1][0].indice].clearTint();
                                                mano2[celdas[1][0].indice].removeInteractive();
                                            }
                                        }
                                        if (celdas[0][1].owner != celdas[0][0].owner) {
                                            if (celdas[0][0].sur == "terrenal" && (celdas[0][1].norte == "oscuro" || celdas[0][1].norte == "neutro")) {
                                                celdas[0][1].owner = 0;
                                                mano2[celdas[0][1].indice].setInteractive();
                                                mano2[celdas[0][1].indice].clearTint();
                                                mano2[celdas[0][1].indice].removeInteractive();
                                            }
                                            if (celdas[0][0].sur == "sagrado" && (celdas[0][1].norte == "terrenal" || celdas[0][1].norte == "neutro")) {
                                                celdas[0][1].owner = 0;
                                                mano2[celdas[0][1].indice].setInteractive();
                                                mano2[celdas[0][1].indice].clearTint();
                                                mano2[celdas[0][1].indice].removeInteractive();
                                            }
                                            if (celdas[0][0].sur == "oscuro" && (celdas[0][1].norte == "sagrado" || celdas[0][1].norte == "neutro")) {
                                                celdas[0][1].owner = 0;
                                                mano2[celdas[0][1].indice].setInteractive();
                                                mano2[celdas[0][1].indice].clearTint();
                                                mano2[celdas[0][1].indice].removeInteractive();
                                            }
                                        }

                                    }

                                    //ESQUINA SUPERIOR DERECHA
                                    else if (b1 == 3 && c1 == 0) {
                                        if (celdas[2][0].owner != celdas[3][0].owner) {
                                            if (celdas[3][0].oeste == "terrenal" && (celdas[2][0].este == "oscuro" || celdas[2][0].este == "neutro")) {
                                                celdas[2][0].owner = 0;
                                            }
                                            if (celdas[3][0].oeste == "sagrado" && (celdas[2][0].este == "terrenal" || celdas[2][0].este == "neutro")) {
                                                celdas[2][0].owner = 0;
                                            }
                                            if (celdas[3][0].oeste == "oscuro" && (celdas[2][0].este == "sagrado" || celdas[2][0].este == "neutro")) {
                                                celdas[2][0].owner = 0;
                                            }
                                        }
                                        if (celdas[3][1].owner != celdas[3][0].owner) {
                                            if (celdas[3][0].sur == "terrenal" && (celdas[3][1].norte == "oscuro" || celdas[3][1].norte == "neutro")) {
                                                celdas[3][1].owner = 0;
                                            }
                                            if (celdas[3][0].sur == "sagrado" && (celdas[3][1].norte == "terrenal" || celdas[3][1].norte == "neutro")) {
                                                celdas[3][1].owner = 0;
                                            }
                                            if (celdas[3][0].sur == "oscuro" && (celdas[3][1].norte == "sagrado" || celdas[3][1].norte == "neutro")) {
                                                celdas[3][1].owner = 0;
                                            }
                                        }
                                    }

                                    //ESQUINA INFERIOR IZQUIERDA

                                    else if (b1 == 0 && c1 == 3) {
                                        if (celdas[1][3].owner != celdas[0][3].owner) {
                                            if (celdas[0][3].este == "terrenal" && (celdas[1][3].oeste == "oscuro" || celdas[1][3].oeste == "neutro")) {
                                                celdas[1][3].owner = 0;
                                            }
                                            if (celdas[0][3].este == "sagrado" && (celdas[1][3].oeste == "terrenal" || celdas[1][3].oeste == "neutro")) {
                                                celdas[1][3].owner = 0;
                                            }
                                            if (celdas[0][3].este == "oscuro" && (celdas[1][3].oeste == "sagrado" || celdas[1][3].oeste == "neutro")) {
                                                celdas[1][3].owner = 0;
                                            }
                                        }
                                        if (celdas[0][2].owner != celdas[0][3].owner) {
                                            if (celdas[0][3].norte == "terrenal" && (celdas[0][2].sur == "oscuro" || celdas[0][2].sur == "neutro")) {
                                                celdas[0][2].owner = 0;
                                            }
                                            if (celdas[0][3].norte == "sagrado" && (celdas[0][2].sur == "terrenal" || celdas[0][2].sur == "neutro")) {
                                                celdas[0][2].owner = 0;
                                            }
                                            if (celdas[0][3].norte == "oscuro" && (celdas[0][2].sur == "sagrado" || celdas[0][2].sur == "neutro")) {
                                                celdas[0][2].owner = 0;
                                            }
                                        }

                                    }

                                    //ESQUINA INFERIOR DERECHA
                                    else if (b1 == 3 && c1 == 3) {
                                        if (celdas[2][3].owner != celdas[3][3].owner) {
                                            if (celdas[3][3].oeste == "terrenal" && (celdas[2][3].este == "oscuro" || celdas[2][3].este == "neutro")) {
                                                celdas[2][3].owner = 0;
                                            }
                                            if (celdas[3][3].oeste == "sagrado" && (celdas[2][3].este == "terrenal" || celdas[2][3].este == "neutro")) {
                                                celdas[2][3].owner = 0;
                                            }
                                            if (celdas[3][3].oeste == "oscuro" && (celdas[2][3].este == "sagrado" || celdas[2][3].este == "neutro")) {
                                                celdas[2][3].owner = 0;
                                            }
                                        }
                                        if (celdas[3][2].owner != celdas[3][3].owner) {
                                            if (celdas[3][3].norte == "terrenal" && (celdas[2][3].sur == "oscuro" || celdas[2][3].sur == "neutro")) {
                                                celdas[2][3].owner = 0;
                                            }
                                            if (celdas[3][3].norte == "sagrado" && (celdas[2][3].sur == "terrenal" || celdas[2][3].sur == "neutro")) {
                                                celdas[2][3].owner = 0;
                                            }
                                            if (celdas[3][3].norte == "oscuro" && (celdas[2][3].sur == "sagrado" || celdas[2][3].sur == "neutro")) {
                                                celdas[2][3].owner = 0;
                                            }
                                        }
                                    }

                                    //LADO SUPERIOR
                                    else if ((b1 == 1 || b1 == 2) && c1 == 0) {
                                        if (celdas[b1 - 1][c1].owner != celdas[b1][c1].owner) {
                                            if (celdas[b1][c1].oeste == "terrenal" && (celdas[b1 - 1][c1].este == "oscuro" || celdas[b1 - 1][c1].este == "neutro")) {
                                                celdas[b1 - 1][c1].owner = 0;
                                            }
                                            if (celdas[b1][c1].oeste == "sagrado" && (celdas[b1 - 1][c1].este == "terrenal" || celdas[b1 - 1][c1].este == "neutro")) {
                                                celdas[b1 - 1][c1].owner = 0;
                                            }
                                            if (celdas[b1][c1].oeste == "oscuro" && (celdas[b1 - 1][c1].este == "sagrado" || celdas[b1 - 1][c1].este == "neutro")) {
                                                celdas[b1 - 1][c1].owner = 0;
                                            }
                                        }
                                        if (celdas[b1 + 1][c1].owner != celdas[b1][c1].owner) {
                                            if (celdas[b1][c1].este == "terrenal" && (celdas[b1 + 1][c1].oeste == "oscuro" || celdas[b1 + 1][c1].oeste == "neutro")) {
                                                celdas[b1 + 1][c1].owner = 0;
                                            }
                                            if (celdas[b1][c1].este == "sagrado" && (celdas[b1 + 1][c1].oeste == "terrenal" || celdas[b1 + 1][c1].oeste == "neutro")) {
                                                celdas[b1 + 1][c1].owner = 0;
                                            }
                                            if (celdas[b1][c1].este == "oscuro" && (celdas[b1 + 1][c1].oeste == "sagrado" || celdas[b1 + 1][c1].oeste == "neutro")) {
                                                celdas[b1 + 1][c1].owner = 0;
                                            }
                                        }
                                        if (celdas[b1][c1 + 1].owner != celdas[b1][c1].owner) {
                                            if (celdas[b1][c1].sur == "terrenal" && (celdas[b1][c1 + 1].norte == "oscuro" || celdas[b1][c1 + 1].norte == "neutro")) {
                                                celdas[b1][c1 + 1].owner = 0;
                                            }
                                            if (celdas[b1][c1].sur == "sagrado" && (celdas[b1][c1 + 1].norte == "terrenal" || celdas[b1][c1 + 1].norte == "neutro")) {
                                                celdas[b1][c1 + 1].owner = 0;
                                            }
                                            if (celdas[b1][c1].sur == "oscuro" && (celdas[b1][c1 + 1].norte == "sagrado" || celdas[b1][c1 + 1].norte == "neutro")) {
                                                celdas[b1][c1 + 1].owner = 0;
                                            }
                                        }
                                    }

                                    //LADO INFERIOR
                                    else if (c1 == 3 && (b1 == 1 || b1 == 2)) {
                                        //Interaccion con la izquierda
                                        if (celdas[b1][c1].owner != celdas[b1 - 1][c1].owner) {
                                            if (celdas[b1][c1].oeste == "terrenal" && (celdas[b1 - 1][c1].este == "oscuro" || celdas[b1 - 1][c1].este == "neutro")) {
                                                celdas[b1 - 1][c1].owner = 0;
                                            }
                                            if (celdas[b1][c1].oeste == "sagrado" && (celdas[b1 - 1][c1].este == "terrenal" || celdas[b1 - 1][c1].este == "neutro")) {
                                                celdas[b1 - 1][c1].owner = 0;
                                            }
                                            if (celdas[b1][c1].oeste == "oscuro" && (celdas[b1 - 1][c1].este == "sagrado" || celdas[b1 - 1][c1].este == "neutro")) {
                                                celdas[b1 - 1][c1].owner = 0;
                                            }
                                        }
                                        //Interaccion con la derecha
                                        if (celdas[b1][c1].owner != celdas[b1 + 1][c1].owner) {
                                            if (celdas[b1][c1].este == "terrenal" && (celdas[b1 + 1][c1].oeste == "oscuro" || celdas[b1 + 1][c1].oeste == "neutro")) {
                                                celdas[b1 + 1][c1].owner = 0;
                                            }
                                            if (celdas[b1][c1].este == "sagrado" && (celdas[b1 + 1][c1].oeste == "terrenal" || celdas[b1 + 1][c1].oeste == "neutro")) {
                                                celdas[b1 + 1][c1].owner = 0;
                                            }
                                            if (celdas[b1][c1].este == "oscuro" && (celdas[b1 + 1][c1].oeste == "sagrado" || celdas[b1 + 1][c1].oeste == "neutro")) {
                                                celdas[b1 + 1][c1].owner = 0;
                                            }
                                        }
                                        //Interaccion con norte
                                        if (celdas[b1][c1].owner != celdas[b1][c1 - 1].owner) {
                                            if (celdas[b1][c1].norte == "terrenal" && (celdas[b1][c1 - 1].sur == "oscuro" || celdas[b1][c1 - 1].sur == "neutro")) {
                                                celdas[b1][c1 - 1].owner = 0;
                                            }
                                            if (celdas[b1][c1].norte == "sagrado" && (celdas[b1][c1 - 1].sur == "terrenal" || celdas[b1][c1 - 1].sur == "neutro")) {
                                                celdas[b1][c1 - 1].owner = 0;
                                            }
                                            if (celdas[b1][c1].norte == "oscuro" && (celdas[b1][c1 - 1].sur == "sagrado" || celdas[b1][c1 - 1].sur == "neutro")) {
                                                celdas[b1][c1 - 1].owner = 0;
                                            }
                                        }
                                    }


                                    //LADO IZQUIERDO
                                    else if (b1 == 0 && (c1 == 1 || c1 == 2)) {
                                        if (celdas[b1][c1 - 1].owner != celdas[b1][c1].owner) {
                                            if (celdas[b1][c1].norte == "terrenal" && (celdas[b1][c1 - 1].sur == "oscuro" || celdas[b1][c1 - 1].sur == "neutro")) {
                                                celdas[b1][c1 - 1].owner = 0;
                                            }
                                            if (celdas[b1][c1].norte == "sagrado" && (celdas[b1][c1 - 1].sur == "terrenal" || celdas[b1][c1 - 1].sur == "neutro")) {
                                                celdas[b1][c1 - 1].owner = 0;
                                            }
                                            if (celdas[b1][c1].norte == "oscuro" && (celdas[b1][c1 - 1].sur == "sagrado" || celdas[b1][c1 - 1].sur == "neutro")) {
                                                celdas[b1][c1 - 1].owner = 0;
                                            }
                                        }
                                        if (celdas[b1][c1 + 1].owner != celdas[b1][c1].owner) {
                                            if (celdas[b1][c1].sur == "terrenal" && (celdas[b1][c1 + 1].norte == "oscuro" || celdas[b1][c1 + 1].norte == "neutro")) {
                                                celdas[b1][c1 + 1].owner = 0;
                                            }
                                            if (celdas[b1][c1].sur == "sagrado" && (celdas[b1][c1 + 1].norte == "terrenal" || celdas[b1][c1 + 1].norte == "neutro")) {
                                                celdas[b1][c1 + 1].owner = 0;
                                            }
                                            if (celdas[b1][c1].sur == "oscuro" && (celdas[b1][c1 + 1].norte == "sagrado" || celdas[b1][c1 + 1].norte == "neutro")) {
                                                celdas[b1][c1 + 1].owner = 0;
                                            }
                                        }
                                        if (celdas[b1 + 1][c1].owner != celdas[b1][c1].owner) {
                                            if (celdas[b1][c1].este == "terrenal" && (celdas[b1 + 1][c1].oeste == "oscuro" || celdas[b1 + 1][c1].oeste == "neutro")) {
                                                celdas[b1 + 1][c1].owner = 0;
                                            }
                                            if (celdas[b1][c1].este == "sagrado" && (celdas[b1 + 1][c1].oeste == "terrenal" || celdas[b1 + 1][c1].oeste == "neutro")) {
                                                celdas[b1 + 1][c1].owner = 0;
                                            }
                                            if (celdas[b1][c1].este == "oscuro" && (celdas[b1 + 1][c1].oeste == "sagrado" || celdas[b1 + 1][c1].oeste == "neutro")) {
                                                celdas[b1 + 1][c1].owner = 0;
                                            }
                                        }
                                    }

                                    //LADO DERECHO
                                    else if (b1 == 3 && (c1 == 1 || c1 == 2)) {
                                        //Interaccion con la izquierda
                                        if (celdas[b1][c1].owner != celdas[b1 - 1][c1].owner) {
                                            if (celdas[b1][c1].oeste == "terrenal" && (celdas[b1 - 1][c1].este == "oscuro" || celdas[b1 - 1][c1].este == "neutro")) {
                                                celdas[b1 - 1][c1].owner = 0;
                                            }
                                            if (celdas[b1][c1].oeste == "sagrado" && (celdas[b1 - 1][c1].este == "terrenal" || celdas[b1 - 1][c1].este == "neutro")) {
                                                celdas[b1 - 1][c1].owner = 0;
                                            }
                                            if (celdas[b1][c1].oeste == "oscuro" && (celdas[b1 - 1][c1].este == "sagrado" || celdas[b1 - 1][c1].este == "neutro")) {
                                                celdas[b1 - 1][c1].owner = 0;
                                            }
                                        }
                                        //Interaccion con norte
                                        if (celdas[b1][c1].owner != celdas[b1][c1 - 1].owner) {
                                            if (celdas[b1][c1].norte == "terrenal" && (celdas[b1][c1 - 1].sur == "oscuro" || celdas[b1][c1 - 1].sur == "neutro")) {
                                                celdas[b1][c1 - 1].owner = 0;
                                            }
                                            if (celdas[b1][c1].norte == "sagrado" && (celdas[b1][c1 - 1].sur == "terrenal" || celdas[b1][c1 - 1].sur == "neutro")) {
                                                celdas[b1][c1 - 1].owner = 0;
                                            }
                                            if (celdas[b1][c1].norte == "oscuro" && (celdas[b1][c1 - 1].sur == "sagrado" || celdas[b1][c1 - 1].sur == "neutro")) {
                                                celdas[b1][c1 - 1].owner = 0;
                                            }
                                        }
                                        //Interaccion con sur
                                        if (celdas[b1][c1 + 1].owner != celdas[b1][c1 + 1].owner) {
                                            if (celdas[b1][c1].sur == "terrenal" && (celdas[b1][c1 + 1].norte == "oscuro" || celdas[b1][c1 + 1].norte == "neutro")) {
                                                celdas[b1][c1 + 1].owner = 0;
                                            }
                                            if (celdas[b1][c1].sur == "sagrado" && (celdas[b1][c1 + 1].oeste == "terrenal" || celdas[b1][c1 + 1].norte == "neutro")) {
                                                celdas[b1][c1 + 1].owner = 0;
                                            }
                                            if (celdas[b1][c1].sur == "oscuro" && (celdas[b1][c1 + 1].oeste == "sagrado" || celdas[b1][c1 + 1].norte == "neutro")) {
                                                celdas[b1][c1 + 1].owner = 0;
                                            }
                                        }
                                    }

                                    //RESTO
                                    else {
                                        //Interaccion con la izquierda
                                        if (celdas[b1][c1].owner != celdas[b1 - 1][c1].owner) {
                                            if (celdas[b1][c1].oeste == "terrenal" && (celdas[b1 - 1][c1].este == "oscuro" || celdas[b1 - 1][c1].este == "neutro")) {
                                                celdas[b1 - 1][c1].owner = 0;
                                            }
                                            if (celdas[b1][c1].oeste == "sagrado" && (celdas[b1 - 1][c1].este == "terrenal" || celdas[b1 - 1][c1].este == "neutro")) {
                                                celdas[b1 - 1][c1].owner = 0;
                                            }
                                            if (celdas[b1][c1].oeste == "oscuro" && (celdas[b1 - 1][c1].este == "sagrado" || celdas[b1 - 1][c1].este == "neutro")) {
                                                celdas[b1 - 1][c1].owner = 0;
                                            }
                                        }
                                        //Interaccion con norte
                                        if (celdas[b1][c1].owner != celdas[b1][c1 - 1].owner) {
                                            if (celdas[b1][c1].norte == "terrenal" && (celdas[b1][c1 - 1].sur == "oscuro" || celdas[b1][c1 - 1].sur == "neutro")) {
                                                celdas[b1][c1 - 1].owner = 0;
                                            }
                                            if (celdas[b1][c1].norte == "sagrado" && (celdas[b1][c1 - 1].sur == "terrenal" || celdas[b1][c1 - 1].sur == "neutro")) {
                                                celdas[b1][c1 - 1].owner = 0;
                                            }
                                            if (celdas[b1][c1].norte == "oscuro" && (celdas[b1][c1 - 1].sur == "sagrado" || celdas[b1][c1 - 1].sur == "neutro")) {
                                                celdas[b1][c1 - 1].owner = 0;
                                            }
                                        }
                                        //Interaccion con sur
                                        if (celdas[b1][c1 + 1].owner != celdas[b1][c1 + 1].owner) {
                                            if (celdas[b1][c1].sur == "terrenal" && (celdas[b1][c1 + 1].norte == "oscuro" || celdas[b1][c1 + 1].norte == "neutro")) {
                                                celdas[b1][c1 + 1].owner = 0;
                                            }
                                            if (celdas[b1][c1].sur == "sagrado" && (celdas[b1][c1 + 1].oeste == "terrenal" || celdas[b1][c1 + 1].norte == "neutro")) {
                                                celdas[b1][c1 + 1].owner = 0;
                                            }
                                            if (celdas[b1][c1].sur == "oscuro" && (celdas[b1][c1 + 1].oeste == "sagrado" || celdas[b1][c1 + 1].norte == "neutro")) {
                                                celdas[b1][c1 + 1].owner = 0;
                                            }
                                        }
                                        //Interaccion con la derecha
                                        if (celdas[b1][c1].owner != celdas[b1 + 1][c1].owner) {
                                            if (celdas[b1][c1].este == "terrenal" && (celdas[b1 + 1][c1].oeste == "oscuro" || celdas[b1 + 1][c1].oeste == "neutro")) {
                                                celdas[b1 + 1][c1].owner = 0;
                                            }
                                            if (celdas[b1][c1].este == "sagrado" && (celdas[b1 + 1][c1].oeste == "terrenal" || celdas[b1 + 1][c1].oeste == "neutro")) {
                                                celdas[b1 + 1][c1].owner = 0;
                                            }
                                            if (celdas[b1][c1].este == "oscuro" && (celdas[b1 + 1][c1].oeste == "sagrado" || celdas[b1 + 1][c1].oeste == "neutro")) {
                                                celdas[b1 + 1][c1].owner = 0;
                                            }
                                        }
                                    }

                                    for (var z = 0; z < 5; z++) {
                                        mano1[z].removeInteractive();
                                        if (mano2[z].x < 463 || mano2[z].x > 935 || mano2[z].y < 130.5 || mano2[z].y > 742.5) {
                                            mano2[z].setInteractive();
                                        }
                                    }
                                    turno = 1;
                                    turnonumerico++;

                                    //mano2[i].setInteractive();
                                } else {
                                    mano1[a1].x = x01;
                                    mano1[a1].y = y01;
                                }
                            }

                            //console.log(a);                            
                        });
                    }

                }

            });

        }


        //MANO 2
        //Para seleccionar solamente una carta a la vez

        for (var i = 0; i < mano2.length; i++) {
            mano2[i].setTint(0xfc8987);
            mano2[i].setData({ seleccionada: false, i: i });
            var jose2 = mano2[i].on('pointerup', function () {
                if (a2 != -1) {
                    mano2[a2].setData({ 'seleccionada': false });
                    mano2[a2].setTint(0xfc8987);
                }
                a2 = this.getData('i');
                x02 = this.x;
                y02 = this.y;
                //console.log(x01, y01);

                this.setData({ "seleccionada": true });
                this.setTint(0x2828fe);
                //console.log(cartaAux);
                //mostrarSeleccionadas();

                //Para las celdas
                for (var i = 0; i < 4; i++) {
                    for (var j = 0; j < 4; j++) {
                        celdas[i][j].setData({ ocupada: false, i: i, j: j });
                        var chuko2 = celdas[i][j].on('pointerup', function (jose2, chuko1) {

                            b2 = this.getData('i');
                            c2 = this.getData('j');

                            if (!mano2[a2].colocada) {
                                if (!celdas[b2][c2].ocupada) {
                                    celdas[b2][c2].indice = a2;
                                    celdas[b2][c2].norte = mano2[a2].norte;
                                    celdas[b2][c2].sur = mano2[a2].sur;
                                    celdas[b2][c2].este = mano2[a2].este;
                                    celdas[b2][c2].oeste = mano2[a2].oeste;
                                    celdas[b2][c2].owner = mano2[a2].owner;
                                    mano2[a2].x = celdas[b2][c2].x;
                                    mano2[a2].y = celdas[b2][c2].y;
                                    mano2[a2].setTint(0xfc8987);
                                    mano2[a2].colocada = true;
                                    celdas[b2][c2].ocupada = true;

                                    //ESQUINA SUPERIOR IZQUIERDA
                                    if (b2 == 0 && c2 == 0) {
                                        if (celdas[1][0].owner != celdas[0][0].owner) {
                                            if (celdas[0][0].este == "terrenal" && (celdas[1][0].oeste == "oscuro" || celdas[1][0].oeste == "neutro")) {
                                                celdas[1][0].owner = 1;
                                                mano1[celdas[1][0].indice].setInteractive();
                                                mano1[celdas[1][0].indice].setTint(0xfc8987);
                                                mano1[celdas[1][0].indice].removeInteractive();
                                            }
                                            if (celdas[0][0].este == "sagrado" && (celdas[1][0].oeste == "terrenal" || celdas[1][0].oeste == "neutro")) {
                                                celdas[1][0].owner = 1;
                                                mano1[celdas[1][0].indice].setInteractive();
                                                mano1[celdas[1][0].indice].setTint(0xfc8987);
                                                mano1[celdas[1][0].indice].removeInteractive();
                                            }
                                            if (celdas[0][0].este == "oscuro" && (celdas[1][0].oeste == "sagrado" || celdas[1][0].oeste == "neutro")) {
                                                celdas[1][0].owner = 1;
                                                mano1[celdas[1][0].indice].setInteractive();
                                                mano1[celdas[1][0].indice].setTint(0xfc8987);
                                                mano1[celdas[1][0].indice].removeInteractive();
                                            }
                                        }
                                        if (celdas[0][1].owner != celdas[0][0].owner) {
                                            if (celdas[0][0].sur == "terrenal" && (celdas[0][1].norte == "oscuro" || celdas[0][1].norte == "neutro")) {
                                                celdas[0][1].owner = 1;
                                                mano1[celdas[0][1].indice].setInteractive();
                                                mano1[celdas[0][1].indice].setTint(0xfc8987);
                                                mano1[celdas[0][1].indice].removeInteractive();
                                            }
                                            if (celdas[0][0].sur == "sagrado" && (celdas[0][1].norte == "terrenal" || celdas[0][1].norte == "neutro")) {
                                                celdas[0][1].owner = 1;
                                                mano1[celdas[0][1].indice].setInteractive();
                                                mano1[celdas[0][1].indice].setTint(0xfc8987);
                                                mano1[celdas[0][1].indice].removeInteractive();
                                            }
                                            if (celdas[0][0].sur == "oscuro" && (celdas[0][1].norte == "sagrado" || celdas[0][1].norte == "neutro")) {
                                                celdas[0][1].owner = 1;
                                                mano1[celdas[0][1].indice].setInteractive();
                                                mano1[celdas[0][1].indice].setTint(0xfc8987);
                                                mano1[celdas[0][1].indice].removeInteractive();
                                            }
                                        }

                                    }

                                    //ESQUINA SUPERIOR DERECHA
                                    else if (b2 == 3 && c2 == 0) {
                                        if (celdas[2][0].owner != celdas[3][0].owner) {
                                            if (celdas[3][0].oeste == "terrenal" && (celdas[2][0].este == "oscuro" || celdas[2][0].este == "neutro")) {
                                                celdas[2][0].owner = 0;
                                            }
                                            if (celdas[3][0].oeste == "sagrado" && (celdas[2][0].este == "terrenal" || celdas[2][0].este == "neutro")) {
                                                celdas[2][0].owner = 0;
                                            }
                                            if (celdas[3][0].oeste == "oscuro" && (celdas[2][0].este == "sagrado" || celdas[2][0].este == "neutro")) {
                                                celdas[2][0].owner = 0;
                                            }
                                        }
                                        if (celdas[3][1].owner != celdas[3][0].owner) {
                                            if (celdas[3][0].sur == "terrenal" && (celdas[3][1].norte == "oscuro" || celdas[3][1].norte == "neutro")) {
                                                celdas[3][1].owner = 0;
                                            }
                                            if (celdas[3][0].sur == "sagrado" && (celdas[3][1].norte == "terrenal" || celdas[3][1].norte == "neutro")) {
                                                celdas[3][1].owner = 0;
                                            }
                                            if (celdas[3][0].sur == "oscuro" && (celdas[3][1].norte == "sagrado" || celdas[3][1].norte == "neutro")) {
                                                celdas[3][1].owner = 0;
                                            }
                                        }
                                    }

                                    //ESQUINA INFERIOR IZQUIERDA

                                    else if (b2 == 0 && c2 == 3) {
                                        if (celdas[1][3].owner != celdas[0][3].owner) {
                                            if (celdas[0][3].este == "terrenal" && (celdas[1][3].oeste == "oscuro" || celdas[1][3].oeste == "neutro")) {
                                                celdas[1][3].owner = 0;
                                            }
                                            if (celdas[0][3].este == "sagrado" && (celdas[1][3].oeste == "terrenal" || celdas[1][3].oeste == "neutro")) {
                                                celdas[1][3].owner = 0;
                                            }
                                            if (celdas[0][3].este == "oscuro" && (celdas[1][3].oeste == "sagrado" || celdas[1][3].oeste == "neutro")) {
                                                celdas[1][3].owner = 0;
                                            }
                                        }
                                        if (celdas[0][2].owner != celdas[0][3].owner) {
                                            if (celdas[0][3].norte == "terrenal" && (celdas[0][2].sur == "oscuro" || celdas[0][2].sur == "neutro")) {
                                                celdas[0][2].owner = 0;
                                            }
                                            if (celdas[0][3].norte == "sagrado" && (celdas[0][2].sur == "terrenal" || celdas[0][2].sur == "neutro")) {
                                                celdas[0][2].owner = 0;
                                            }
                                            if (celdas[0][3].norte == "oscuro" && (celdas[0][2].sur == "sagrado" || celdas[0][2].sur == "neutro")) {
                                                celdas[0][2].owner = 0;
                                            }
                                        }

                                    }

                                    //ESQUINA INFERIOR DERECHA
                                    else if (b2 == 3 && c2 == 3) {
                                        if (celdas[2][3].owner != celdas[3][3].owner) {
                                            if (celdas[3][3].oeste == "terrenal" && (celdas[2][3].este == "oscuro" || celdas[2][3].este == "neutro")) {
                                                celdas[2][3].owner = 0;
                                            }
                                            if (celdas[3][3].oeste == "sagrado" && (celdas[2][3].este == "terrenal" || celdas[2][3].este == "neutro")) {
                                                celdas[2][3].owner = 0;
                                            }
                                            if (celdas[3][3].oeste == "oscuro" && (celdas[2][3].este == "sagrado" || celdas[2][3].este == "neutro")) {
                                                celdas[2][3].owner = 0;
                                            }
                                        }
                                        if (celdas[3][2].owner != celdas[3][3].owner) {
                                            if (celdas[3][3].norte == "terrenal" && (celdas[2][3].sur == "oscuro" || celdas[2][3].sur == "neutro")) {
                                                celdas[2][3].owner = 0;
                                            }
                                            if (celdas[3][3].norte == "sagrado" && (celdas[2][3].sur == "terrenal" || celdas[2][3].sur == "neutro")) {
                                                celdas[2][3].owner = 0;
                                            }
                                            if (celdas[3][3].norte == "oscuro" && (celdas[2][3].sur == "sagrado" || celdas[2][3].sur == "neutro")) {
                                                celdas[2][3].owner = 0;
                                            }
                                        }
                                    }

                                    //LADO SUPERIOR
                                    else if ((b2 == 1 || b2 == 2) && c2 == 0) {
                                        if (celdas[b2 - 1][c2].owner != celdas[b2][c2].owner) {
                                            if (celdas[b2][c2].oeste == "terrenal" && (celdas[b2 - 1][c2].este == "oscuro" || celdas[b2 - 1][c2].este == "neutro")) {
                                                celdas[b2 - 1][c2].owner = 0;
                                            }
                                            if (celdas[b2][c2].oeste == "sagrado" && (celdas[b2 - 1][c2].este == "terrenal" || celdas[b2 - 1][c2].este == "neutro")) {
                                                celdas[b2 - 1][c2].owner = 0;
                                            }
                                            if (celdas[b2][c2].oeste == "oscuro" && (celdas[b2 - 1][c2].este == "sagrado" || celdas[b2 - 1][c2].este == "neutro")) {
                                                celdas[b2 - 1][c2].owner = 0;
                                            }
                                        }
                                        if (celdas[b2 + 1][c2].owner != celdas[b2][c2].owner) {
                                            if (celdas[b2][c2].este == "terrenal" && (celdas[b2 + 1][c2].oeste == "oscuro" || celdas[b2 + 1][c2].oeste == "neutro")) {
                                                celdas[b2 + 1][c2].owner = 0;
                                            }
                                            if (celdas[b2][c2].este == "sagrado" && (celdas[b2 + 1][c2].oeste == "terrenal" || celdas[b2 + 1][c2].oeste == "neutro")) {
                                                celdas[b2 + 1][c2].owner = 0;
                                            }
                                            if (celdas[b2][c2].este == "oscuro" && (celdas[b2 + 1][c2].oeste == "sagrado" || celdas[b2 + 1][c2].oeste == "neutro")) {
                                                celdas[b2 + 1][c2].owner = 0;
                                            }
                                        }
                                        if (celdas[b2][c2 + 1].owner != celdas[b2][c2].owner) {
                                            if (celdas[b2][c2].sur == "terrenal" && (celdas[b2][c2 + 1].norte == "oscuro" || celdas[b2][c2 + 1].norte == "neutro")) {
                                                celdas[b2][c2 + 1].owner = 0;
                                            }
                                            if (celdas[b2][c2].sur == "sagrado" && (celdas[b2][c2 + 1].norte == "terrenal" || celdas[b2][c2 + 1].norte == "neutro")) {
                                                celdas[b2][c2 + 1].owner = 0;
                                            }
                                            if (celdas[b2][c2].sur == "oscuro" && (celdas[b2][c2 + 1].norte == "sagrado" || celdas[b2][c2 + 1].norte == "neutro")) {
                                                celdas[b2][c2 + 1].owner = 0;
                                            }
                                        }
                                    }

                                    //LADO INFERIOR
                                    else if (c2 == 3 && (b2 == 1 || b2 == 2)) {
                                        //Interaccion con la izquierda
                                        if (celdas[b2][c2].owner != celdas[b2 - 1][c2].owner) {
                                            if (celdas[b2][c2].oeste == "terrenal" && (celdas[b2 - 1][c2].este == "oscuro" || celdas[b2 - 1][c2].este == "neutro")) {
                                                celdas[b2 - 1][c2].owner = 0;
                                            }
                                            if (celdas[b2][c2].oeste == "sagrado" && (celdas[b2 - 1][c2].este == "terrenal" || celdas[b2 - 1][c2].este == "neutro")) {
                                                celdas[b2 - 1][c2].owner = 0;
                                            }
                                            if (celdas[b2][c2].oeste == "oscuro" && (celdas[b2 - 1][c2].este == "sagrado" || celdas[b2 - 1][c2].este == "neutro")) {
                                                celdas[b2 - 1][c2].owner = 0;
                                            }
                                        }
                                        //Interaccion con la derecha
                                        if (celdas[b2][c2].owner != celdas[b2 + 1][c2].owner) {
                                            if (celdas[b2][c2].este == "terrenal" && (celdas[b2 + 1][c2].oeste == "oscuro" || celdas[b2 + 1][c2].oeste == "neutro")) {
                                                celdas[b2 + 1][c2].owner = 0;
                                            }
                                            if (celdas[b2][c2].este == "sagrado" && (celdas[b2 + 1][c2].oeste == "terrenal" || celdas[b2 + 1][c2].oeste == "neutro")) {
                                                celdas[b2 + 1][c2].owner = 0;
                                            }
                                            if (celdas[b2][c2].este == "oscuro" && (celdas[b2 + 1][c2].oeste == "sagrado" || celdas[b2 + 1][c2].oeste == "neutro")) {
                                                celdas[b2 + 1][c2].owner = 0;
                                            }
                                        }
                                        //Interaccion con norte
                                        if (celdas[b2][c2].owner != celdas[b2][c2 - 1].owner) {
                                            if (celdas[b2][c2].norte == "terrenal" && (celdas[b2][c2 - 1].sur == "oscuro" || celdas[b2][c2 - 1].sur == "neutro")) {
                                                celdas[b2][c2 - 1].owner = 0;
                                            }
                                            if (celdas[b2][c2].norte == "sagrado" && (celdas[b2][c2 - 1].sur == "terrenal" || celdas[b2][c2 - 1].sur == "neutro")) {
                                                celdas[b2][c2 - 1].owner = 0;
                                            }
                                            if (celdas[b2][c2].norte == "oscuro" && (celdas[b2][c2 - 1].sur == "sagrado" || celdas[b2][c2 - 1].sur == "neutro")) {
                                                celdas[b2][c2 - 1].owner = 0;
                                            }
                                        }
                                    }


                                    //LADO IZQUIERDO
                                    else if (b2 == 0 && (c2 == 1 || c2 == 2)) {
                                        if (celdas[b2][c2 - 1].owner != celdas[b2][c2].owner) {
                                            if (celdas[b2][c2].norte == "terrenal" && (celdas[b2][c2 - 1].sur == "oscuro" || celdas[b2][c2 - 1].sur == "neutro")) {
                                                celdas[b2][c2 - 1].owner = 1;
                                                mano1[celdas[b2][c2 - 1].indice].setInteractive();
                                                mano1[celdas[b2][c2 - 1].indice].setTint(0xfc8987);
                                                mano1[celdas[b2][c2 - 1].indice].removeInteractive();
                                            }
                                            if (celdas[b2][c2].norte == "sagrado" && (celdas[b2][c2 - 1].sur == "terrenal" || celdas[b2][c2 - 1].sur == "neutro")) {
                                                celdas[b2][c2 - 1].owner = 1;
                                                mano1[celdas[b2][c2 - 1].indice].setInteractive();
                                                mano1[celdas[b2][c2 - 1].indice].setTint(0xfc8987);
                                                mano1[celdas[b2][c2 - 1].indice].removeInteractive();
                                            }
                                            if (celdas[b2][c2].norte == "oscuro" && (celdas[b2][c2 - 1].sur == "sagrado" || celdas[b2][c2 - 1].sur == "neutro")) {
                                                celdas[b2][c2 - 1].owner = 1;
                                                mano1[celdas[b2][c2 - 1].indice].setInteractive();
                                                mano1[celdas[b2][c2 - 1].indice].setTint(0xfc8987);
                                                mano1[celdas[b2][c2 - 1].indice].removeInteractive();
                                            }
                                        }
                                        if (celdas[b2][c2 + 1].owner != celdas[b2][c2].owner) {
                                            if (celdas[b2][c2].sur == "terrenal" && (celdas[b2][c2 + 1].norte == "oscuro" || celdas[b2][c2 + 1].norte == "neutro")) {
                                                celdas[b2][c2 + 1].owner = 1;
                                            }
                                            if (celdas[b2][c2].sur == "sagrado" && (celdas[b2][c2 + 1].norte == "terrenal" || celdas[b2][c2 + 1].norte == "neutro")) {
                                                celdas[b2][c2 + 1].owner = 1;
                                            }
                                            if (celdas[b2][c2].sur == "oscuro" && (celdas[b2][c2 + 1].norte == "sagrado" || celdas[b2][c2 + 1].norte == "neutro")) {
                                                celdas[b2][c2 + 1].owner = 1;
                                            }
                                        }
                                        if (celdas[b2 + 1][c2].owner != celdas[b2][c2].owner) {
                                            if (celdas[b2][c2].este == "terrenal" && (celdas[b2 + 1][c2].oeste == "oscuro" || celdas[b2 + 1][c2].oeste == "neutro")) {
                                                celdas[b2 + 1][c2].owner = 1;
                                            }
                                            if (celdas[b2][c2].este == "sagrado" && (celdas[b2 + 1][c2].oeste == "terrenal" || celdas[b2 + 1][c2].oeste == "neutro")) {
                                                celdas[b2 + 1][c2].owner = 1;
                                            }
                                            if (celdas[b2][c2].este == "oscuro" && (celdas[b2 + 1][c2].oeste == "sagrado" || celdas[b2 + 1][c2].oeste == "neutro")) {
                                                celdas[b2 + 1][c2].owner = 1;
                                            }
                                        }
                                    }

                                    //LADO DERECHO
                                    else if (b2 == 3 && (c2 == 1 || c2 == 2)) {
                                        //Interaccion con la izquierda
                                        if (celdas[b2][c2].owner != celdas[b2 - 1][c2].owner) {
                                            if (celdas[b2][c2].oeste == "terrenal" && (celdas[b2 - 1][c2].este == "oscuro" || celdas[b2 - 1][c2].este == "neutro")) {
                                                celdas[b2 - 1][c2].owner = 0;
                                            }
                                            if (celdas[b2][c2].oeste == "sagrado" && (celdas[b2 - 1][c2].este == "terrenal" || celdas[b2 - 1][c2].este == "neutro")) {
                                                celdas[b2 - 1][c2].owner = 0;
                                            }
                                            if (celdas[b2][c2].oeste == "oscuro" && (celdas[b2 - 1][c2].este == "sagrado" || celdas[b2 - 1][c2].este == "neutro")) {
                                                celdas[b2 - 1][c2].owner = 0;
                                            }
                                        }
                                        //Interaccion con norte
                                        if (celdas[b2][c2].owner != celdas[b2][c2 - 1].owner) {
                                            if (celdas[b2][c2].norte == "terrenal" && (celdas[b2][c2 - 1].sur == "oscuro" || celdas[b2][c2 - 1].sur == "neutro")) {
                                                celdas[b2][c2 - 1].owner = 0;
                                            }
                                            if (celdas[b2][c2].norte == "sagrado" && (celdas[b2][c2 - 1].sur == "terrenal" || celdas[b2][c2 - 1].sur == "neutro")) {
                                                celdas[b2][c2 - 1].owner = 0;
                                            }
                                            if (celdas[b2][c2].norte == "oscuro" && (celdas[b2][c2 - 1].sur == "sagrado" || celdas[b2][c2 - 1].sur == "neutro")) {
                                                celdas[b2][c2 - 1].owner = 0;
                                            }
                                        }
                                        //Interaccion con sur
                                        if (celdas[b2][c2 + 1].owner != celdas[b2][c2 + 1].owner) {
                                            if (celdas[b2][c2].sur == "terrenal" && (celdas[b2][c2 + 1].norte == "oscuro" || celdas[b2][c2 + 1].norte == "neutro")) {
                                                celdas[b2][c2 + 1].owner = 0;
                                            }
                                            if (celdas[b2][c2].sur == "sagrado" && (celdas[b2][c2 + 1].oeste == "terrenal" || celdas[b2][c2 + 1].norte == "neutro")) {
                                                celdas[b2][c2 + 1].owner = 0;
                                            }
                                            if (celdas[b2][c2].sur == "oscuro" && (celdas[b2][c2 + 1].oeste == "sagrado" || celdas[b2][c2 + 1].norte == "neutro")) {
                                                celdas[b2][c2 + 1].owner = 0;
                                            }
                                        }
                                    }

                                    //RESTO
                                    else {
                                        //Interaccion con la izquierda
                                        if (celdas[b2][c2].owner != celdas[b2 - 1][c2].owner) {
                                            if (celdas[b2][c2].oeste == "terrenal" && (celdas[b2 - 1][c2].este == "oscuro" || celdas[b2 - 1][c2].este == "neutro")) {
                                                celdas[b2 - 1][c2].owner = 0;
                                            }
                                            if (celdas[b2][c2].oeste == "sagrado" && (celdas[b2 - 1][c2].este == "terrenal" || celdas[b2 - 1][c2].este == "neutro")) {
                                                celdas[b2 - 1][c2].owner = 0;
                                            }
                                            if (celdas[b2][c2].oeste == "oscuro" && (celdas[b2 - 1][c2].este == "sagrado" || celdas[b2 - 1][c2].este == "neutro")) {
                                                celdas[b2 - 1][c2].owner = 0;
                                            }
                                        }
                                        //Interaccion con norte
                                        if (celdas[b2][c2].owner != celdas[b2][c2 - 1].owner) {
                                            if (celdas[b2][c2].norte == "terrenal" && (celdas[b2][c2 - 1].sur == "oscuro" || celdas[b2][c2 - 1].sur == "neutro")) {
                                                celdas[b2][c2 - 1].owner = 0;
                                            }
                                            if (celdas[b2][c2].norte == "sagrado" && (celdas[b2][c2 - 1].sur == "terrenal" || celdas[b2][c2 - 1].sur == "neutro")) {
                                                celdas[b2][c2 - 1].owner = 0;
                                            }
                                            if (celdas[b2][c2].norte == "oscuro" && (celdas[b2][c2 - 1].sur == "sagrado" || celdas[b2][c2 - 1].sur == "neutro")) {
                                                celdas[b2][c2 - 1].owner = 0;
                                            }
                                        }
                                        //Interaccion con sur
                                        if (celdas[b2][c2 + 1].owner != celdas[b2][c2 + 1].owner) {
                                            if (celdas[b2][c2].sur == "terrenal" && (celdas[b2][c2 + 1].norte == "oscuro" || celdas[b2][c2 + 1].norte == "neutro")) {
                                                celdas[b2][c2 + 1].owner = 0;
                                            }
                                            if (celdas[b2][c2].sur == "sagrado" && (celdas[b2][c2 + 1].oeste == "terrenal" || celdas[b2][c2 + 1].norte == "neutro")) {
                                                celdas[b2][c2 + 1].owner = 0;
                                            }
                                            if (celdas[b2][c2].sur == "oscuro" && (celdas[b2][c2 + 1].oeste == "sagrado" || celdas[b2][c2 + 1].norte == "neutro")) {
                                                celdas[b2][c2 + 1].owner = 0;
                                            }
                                        }
                                        //Interaccion con la derecha
                                        if (celdas[b2][c2].owner != celdas[b2 + 1][c2].owner) {
                                            if (celdas[b2][c2].este == "terrenal" && (celdas[b2 + 1][c2].oeste == "oscuro" || celdas[b2 + 1][c2].oeste == "neutro")) {
                                                celdas[b2 + 1][c2].owner = 0;
                                            }
                                            if (celdas[b2][c2].este == "sagrado" && (celdas[b2 + 1][c2].oeste == "terrenal" || celdas[b2 + 1][c2].oeste == "neutro")) {
                                                celdas[b2 + 1][c2].owner = 0;
                                            }
                                            if (celdas[b2][c2].este == "oscuro" && (celdas[b2 + 1][c2].oeste == "sagrado" || celdas[b2 + 1][c2].oeste == "neutro")) {
                                                celdas[b2 + 1][c2].owner = 0;
                                            }
                                        }
                                    }
                                    
                                    console.log()


                                    for (var z = 0; z < 5; z++) {
                                        mano2[z].removeInteractive();
                                        if (mano1[z].x < 463 || mano1[z].x > 935 || mano1[z].y < 130.5 || mano1[z].y > 742.5) {
                                            mano1[z].setInteractive();
                                        }
                                    }
                                    turno = 0;
                                    turnonumerico++;
                                } else {
                                    mano2[a2].x = x02;
                                    mano2[a2].y = y02;
                                }
                            }

                            //console.log(a);                            
                        });
                    }

                }

            });

        }
        //ESQUINA SUPERIOR IZQUIERDA



    }

    update() {

        /*
        for (var x = 0; x < this.mano1.length; x++) {
            if (this.jugador1.getCartaSeleccionada() > -1) {
                this.seleccionarCarta(this.mano1[x]);
                this.seleccionarCarta(this.mano1[x]);
                this.jugador1.setCartaSeleccionada(x);
                this.cartaId = this.jugador1.getCartaSeleccionada();
                //}
            }
        }*/

        //} else {
        //this.desseleccionarCarta(this.mano1[this.cartaId])

        //}


        //console.log(this.cartaId);

    }


    setPos0X1(index, c) {
        this.pos0X1[index] = c;
    }

    getPos0X1(index) {
        return this.pos0X1[index];
    }

    setPos0Y1(index, c) {
        this.pos0Y1[index] = c;
    }

    getPos0Y1(index) {
        return this.pos0Y1[index];
    }


    setPos0X2(index, c) {
        this.pos0X2[index] = c;
    }

    getPos0X2(index) {
        return this.pos0X2[index];
    }

    setPos0Y2(index, c) {
        this.pos0Y2[index] = c;
    }

    getPos0Y2(index) {
        return this.pos0Y2[index];
    }

    setAllInteractive() {
        for (var i = 0; i < 5; i++) {
            this[i].setInteractive();
        }
    }

}
