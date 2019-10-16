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

    init(data){
        this.mode = data.mode;
       
        this.turnof;
        
    }
   
    preload() {
        
    }

    create() {
        var that = this;

        var escena = this.that;

        var volumen = game.volume;
        
        var random = Phaser.Math.Between(1, 2);
    
        if (random == 1){
            var music = this.sound.add('musica1', {volume: (volumen/20) ,loop: true});
        } else if (random == 2) {
            var music = this.sound.add('musica2', {volume: (volumen/20) ,loop: true});
        }
        music.play()

        var click1 = this.sound.add('clickCarta');
        var click2 = this.sound.add('clickCelda');

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
        var modojuego = this.mode;

        this.background = this.add.image(0, 0, 'fondo');
        this.background.setOrigin(0, 0);


        this.tablero = new Tablero(this, 4, 4);
        this.tablero.crearMatrizCeldas(this);

        celdas = this.tablero.getMatrizCeldas();

        this.jugador1 = new Jugador(this, 1, 0, 0);
        this.jugador1.pintarMano(this);

        this.jugador2 = new Jugador(this, 2, 1, 1);
        this.jugador2.pintarMano(this);
        //this.jugador2.setManoX(1185);


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

        /*mano1[0].sur = "sagrado";
        mano1[0].norte = "terrenal";
        mano1[0].este = "terrenal";
        mano1[0].oeste = "terrenal";
        mano1[0].owner = 0;
        mano2[0].norte = "oscuro";
        mano2[0].sur = "oscuro";
        mano2[0].este = "oscuro";
        mano2[0].oeste = "neutro";
        mano2[0].owner = 1;
        mano1[1].sur = "neutro";
        mano1[1].este = "terrenal";
        mano1[1].oeste = "neutro";
        mano1[1].norte = "terrenal";
        mano1[1].owner = 0;*/

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
            var jose1 = mano1[i].on('pointerup', function () {
                click1.play();
                if (a1 != -1) {
                    mano1[a1].setData({ 'seleccionada': false });
                    if (!mano1[a1].colocada){
                    mano1[a1].clearTint();
                    }
                }

                a1 = this.getData('i');
                x01 = this.x;
                y01 = this.y;
                
                mano1[a1].setSeleccionada(true);
                this.setTint(0xff0000);
            
                //Para las celdas
                if(mano1[a1].getSeleccionada()){
                for (var i = 0; i < 4; i++) {
                    for (var j = 0; j < 4; j++) {
                        celdas[i][j].setData({ ocupada: false, i: i, j: j });
                        celdas[i][j].setInteractive();
                        var chuko1 = celdas[i][j].on('pointerup', function (jose1, chuko2) {
                            

                            b1 = this.getData('i');
                            c1 = this.getData('j');

                            if (!mano1[a1].colocada) {
                                if (!celdas[b1][c1].ocupada) {
                                    click2.play();
                                    celdas[b1][c1].which = mano1[a1].which;
                                    celdas[b1][c1].indice = a1;
                                    celdas[b1][c1].norte = mano1[a1].norte;
                                    celdas[b1][c1].sur = mano1[a1].sur;
                                    celdas[b1][c1].este = mano1[a1].este;
                                    celdas[b1][c1].oeste = mano1[a1].oeste;
                                    celdas[b1][c1].owner = mano1[a1].owner;

                                    mano1[a1].x = celdas[b1][c1].x;
                                    mano1[a1].y = celdas[b1][c1].y;
                                    mano1[a1].clearTint();
                                    mano1[a1].colocada = true;
                                    celdas[b1][c1].ocupada = true;
                                    
                                    if(modojuego == 0){
                                    interaccion2(mano1 ,mano2, celdas, b1, c1);
                                    } else if (modojuego == 1) {
                                    interaccion(mano1 ,mano2, celdas, b1, c1);        
                                    } else if (modojuego == 2) {
                                        interaccion3(mano1 ,mano2, celdas, b1, c1);
                                    }
                                        
                                    for (var z = 0; z < 8; z++) {
                                        mano1[z].removeInteractive();
                                        if (mano2[z].x < 472 || mano2[z].x > 944 || mano2[z].y < 220.5 || mano2[z].y > 832.5) {
                                            mano2[z].setInteractive();
                                        }
                                    }
                                    turno = 1;
                                    turnonumerico++;
                                    this.turnof = turnonumerico;
                                    mano1[a1].setSeleccionada(false);
                                    
                                    for (var i = 0; i < 4; i++) {
                                        for (var j = 0; j < 4; j++) {
                                            celdas[i][j].removeInteractive();
                                        }
                                    }            
                                    
                                } else {
                                    mano1[a1].x = x01;
                                    mano1[a1].y = y01;
                                }
                            }
                           
                        });
                    }

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
                click1.play();
                if (a2 != -1) {
                    mano2[a2].setData({ 'seleccionada': false });
                    if (!mano2[a2].colocada){
                        mano2[a2].setTint(0xfc8987);
                        }
                }
                a2 = this.getData('i');
                x02 = this.x;
                y02 = this.y;
                //console.log(x01, y01);

                mano2[a2].setSeleccionada(true);
                this.setTint(0x2828fe);
                
                //Para las celdas
                if(mano2[a2].getSeleccionada()){
                for (var i = 0; i < 4; i++) {
                    for (var j = 0; j < 4; j++) {
                        celdas[i][j].setInteractive();
                        celdas[i][j].setData({ ocupada: false, i: i, j: j });
                        var chuko2 = celdas[i][j].on('pointerup', function (jose2, chuko1) {
                           
                            b2 = this.getData('i');
                            c2 = this.getData('j');

                            if (!mano2[a2].colocada) {
                                if (!celdas[b2][c2].ocupada) {
                                    click2.play();

                                    celdas[b2][c2].which = mano2[a2].which;
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

                                    if(modojuego == 0){
                                        interaccion2(mano1 ,mano2, celdas, b2, c2);
                                        } else if (modojuego == 1) {
                                        interaccion(mano1 ,mano2, celdas, b2, c2);        
                                        } else if (modojuego == 2) {
                                            interaccion3(mano1 ,mano2, celdas, b1, c1);
                                        }
      
                                    for (var z = 0; z < 8; z++) {
                                        mano2[z].removeInteractive();
                                        if (mano1[z].x < 472 || mano1[z].x > 944 || mano1[z].y < 220.5 || mano1[z].y > 832.5) {
                                            mano1[z].setInteractive();
                                        }
                                    }

                                    for (var i = 0; i < 4; i++) {
                                        for (var j = 0; j < 4; j++) {
                                            celdas[i][j].removeInteractive();
                                        }
                                    } 
                                    turno = 0;
                                    turnonumerico++;
                                    mano2[a2].setSeleccionada(false);


                                    //FUNCION QUE HAY QUE RECUPERAR PARA EL FINAL DE LA PARTIDA
                                    if (turnonumerico == 3){
                                        var finale = that.setWinner(celdas);
                                        that.scene.pause();
                                        setTimeout(function(){ music.stop();}, 2900);
                                        setTimeout(function(){  that.scene.start('puntuacionesScene', {puntos: finale}); }, 3000);
                                    }
                                    

                                } else {
                                    mano2[a2].x = x02;
                                    mano2[a2].y = y02;
                                }
                            }                            
                        });
                    }

                }
            }

            });

        }

    
        
        //FINALIZAR LA PARTIDA
       
    }

    update() {
        

    }

    changescene(){
        this.scene.start('menuScene');
    }

    setTurno(num){
        this.turnof = num;
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

    setWinner(celdas){

        var j1 = 0;
        var j2 = 0;

        for(var i = 0; i < 4; i++){
            for(var j = 0; j < 4; j++){
                if(celdas[i][j].owner == 0){
                    j1++;
                } else if (celdas[i][j].owner == 1){
                    j2++;
                }
            }
        }

        return [j1, j2];

    }

    setAllInteractive() {
        for (var i = 0; i < 8; i++) {
            this[i].setInteractive();
        }
    }

}
