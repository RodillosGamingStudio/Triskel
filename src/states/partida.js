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

        var clicksonido = game.sound.add('clickmenus');

        var volumen = game.volume;
        var modojuego = game.mode;
      
        var random = Phaser.Math.Between(1, 2);
    
        if (random == 1){
            var music = this.sound.add('musica1', {volume: (volumen/20) ,loop: true});
            this.background = this.add.image(0, 0, 'fondo');
        } else if (random == 2) {
            var music = this.sound.add('musica2', {volume: (volumen/20) ,loop: true});
            this.background = this.add.image(0, 0, 'fondo2');
        }
        this.background.setOrigin(0, 0);
        music.play()

        //TEXTOS
        var C = JSON.parse(credits_text);

        this.add.sprite(310, 75, 'Scrollbar');
        this.add.sprite(1280, 75, 'Scrollbar');
        this.add.text(310, 75, C.jugador1[game.language], { fontFamily: 'Metamorphous', fontSize:'42px',fontWeight: 'bold'}).setOrigin(0.5);
        this.add.text(1280, 75, C.jugador2[game.language], { fontFamily: 'Metamorphous', fontSize:'42px',fontWeight: 'bold'}).setOrigin(0.5);
        //Botones
        var B = JSON.parse(buttons);
        
        var makebutton = new makeButton();
        makebutton.setButton(this, 800, 840, 'Lbutton', B.back[game.language], 'menuScene', null, music).setScale(1.45);
        var rules_button = makebutton.setButton(this, 100, 450, 'Lbutton', B.rules[game.language], 'none', null, null).setScale(1.45);

        var image;
        if(game.language == 0)
            image = this.add.image(800, 450, 'infoESP').setScale(1.8).setOrigin(0.5);
        else
            image = this.add.image(800, 450, 'infoENG').setScale(1.8).setOrigin(0.5);

        var text = this.add.text(340, 330, "", { fontFamily: 'Metamorphous', fontSize: '21px', color: 'black' });
        image.visible = false;
        image.depth = 1;
        text.depth = 1;

        rules_button.on('pointerdown', function () {
       clicksonido.play();

            if(!image.visible)
                text.text = game.modetext.text;
            else 
                text.text = "";
            
            image.visible = !image.visible;
        });

        //Botón de silenciar
        var mute_button = makebutton.setButton(this, 1500, 450, 'mute', B.mute[game.language], 'mode', null, null).setScale(0.65);
        var current = 0;
        mute_button.on('pointerdown', function () {            
            current = (current + 1) % 2;
            mute_button.setFrame(current);

            if(current == 1) music.pause();
            else music.resume();
        });

        

        var click1 = this.sound.add('clickCarta');
        var click2 = this.sound.add('clickCelda');

        //Variables para el jugador 1
        var mano1;
        var a1 = -1;
        var b1 = -1;
        var c1 = -1;
        var d1 = -1;
        var x01;
        var y01;

        //Variables para el jugador 2
        var mano2;
        var a2 = -1;
        var b2 = -1;
        var c2 = -1;
        var d2 = -1;
        var x02;
        var y02;


        //Variables generales
        var celdas;
        var turno = 0;
        var turnonumerico = 1;
        //var modojuego = this.mode;

        this.tablero = new Tablero(this, 4, 4);
        this.tablero.crearMatrizCeldas(this);

        celdas = this.tablero.getMatrizCeldas();

        var carta;

        this.jugador1 = new Jugador(this, 1, 0, game.deck[0]);
        this.jugador1.pintarMano(this);

        this.jugador2 = new Jugador(this, 2, 1, game.deck[1]);
        this.jugador2.pintarMano(this);
        //this.jugador2.setManoX(1185);

        mano1 = this.jugador1.getMano()[0];
        var manobig1 = this.jugador1.getMano()[1];
        /*
        this.mano1[0].setId('a1');
        this.mano1[1].setId('a2');
        this.mano1[2].setId('a3');
        this.mano1[3].setId('a4');
        this.mano1[4].setId('a5');
        */

        mano2 = this.jugador2.getMano()[0];
        var manobig2 = this.jugador2.getMano()[1];
        /*
        this.mano2[0].setId('b1');
        this.mano2[1].setId('b2');
        this.mano2[2].setId('b3');
        this.mano2[3].setId('b4');
        this.mano2[4].setId('b5');
        */
        //pruebas
       var timeout;
       var timeout2;
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
        //if (turno == 0) {
            for (var i = 0; i < mano1.length; i++) {
                manobig1[i].visible = false;
                manobig2[i].visible = false;
                mano1[i].setInteractive();
                mano2[i].setInteractive();
            }
        //}

        for (var i = 0; i < mano1.length; i++) {

            manobig1[i].setData({i: i});

            var  miguel = mano1[i].on('pointerover', function() {
                d1 =  this.getData('i');
                 timeout = setTimeout(function(){ 
                    manobig1[d1].setDepth(1);
                    manobig1[d1].visible = true;
                   
                 }, 500);
            });
        
            var cartalunya = mano1[i].on('pointerout', function(){
                if (manobig1[d1].visible){
                    manobig1[d1].visible = false;
                    }
                    clearTimeout(timeout);
            });

            mano1[i].setData({ seleccionada: false, i: i });
           
            var jose1 = mano1[i].on('pointerup', function (miguel, jose2) {
               
                if (a1 != -1) {
                    mano1[a1].setData({ 'seleccionada': false });
                    if (!mano1[a1].colocada){
                    mano1[a1].clearTint();
                    }
                }

                a1 = this.getData('i');
                x01 = this.x;
                y01 = this.y;
                
                if(!mano1[a1].colocada && turno == 0){
                click1.play();
                mano1[a1].setSeleccionada(true);
                this.setTint(0xff0000);
                

                //if(!mano2[a1].colocada && turno == 0){

                //}

                //Para las celdas
                if(mano1[a1].getSeleccionada() && turno == 0){
                for (var i = 0; i < 4; i++) {
                    for (var j = 0; j < 4; j++) {
                        celdas[i][j].setData({ ocupada: false, i: i, j: j });
                        celdas[i][j].setInteractive();
                        var chuko1 = celdas[i][j].on('pointerup', function (jose1, chuko2) {
                            

                            b1 = this.getData('i');
                            c1 = this.getData('j');

                            if (!mano1[a1].colocada && turno == 0) {
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

                                    console.log(mano1[0].colocada);
                                    
                                    if(modojuego == 0){
                                    interaccion2(mano1 ,mano2, celdas, b1, c1);
                                    } else if (modojuego == 1) {
                                    interaccion(mano1 ,mano2, celdas, b1, c1);        
                                    } else if (modojuego == 2) {
                                        interaccion3(mano1 ,mano2, celdas, b1, c1);
                                    }
                                        
                                    //for (var z = 0; z < 8; z++) {
                                      //  mano1[z].removeInteractive();
                                        //if (!mano2[z].colocada) {
                                     //       mano2[z].setInteractive();
                                       // }
                                    //}
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
        }
            });

        }
    

        //MANO 2
        //Para seleccionar solamente una carta a la vez

        for (var i = 0; i < mano2.length; i++) {

            manobig2[i].setData({i: i});

            var  miguel2 = mano2[i].on('pointerover', function() {
                d2 =  this.getData('i');
                 timeout2 = setTimeout(function(){ 
                    manobig2[d2].setDepth(1);
                    manobig2[d2].visible = true;
                   
                 }, 500);
            });
        
            var cartalunya2 = mano2[i].on('pointerout', function(){
                if (manobig2[d2].visible){
                    manobig2[d2].visible = false;
                    }
                    clearTimeout(timeout2);
            });


            mano2[i].setTint(0xfc8987);
            mano2[i].setData({ seleccionada: false, i: i });
            var jose2 = mano2[i].on('pointerup', function () {
               
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

                if(!mano2[a2].colocada && turno == 1){
                    click1.play();
                mano2[a2].setSeleccionada(true);
                this.setTint(0x2828fe);
                
                //Para las celdas
                if(mano2[a2].getSeleccionada() && turno == 1){
                for (var i = 0; i < 4; i++) {
                    for (var j = 0; j < 4; j++) {
                        celdas[i][j].setInteractive();
                        celdas[i][j].setData({ ocupada: false, i: i, j: j });
                        var chuko2 = celdas[i][j].on('pointerup', function (jose2, chuko1) {
                           
                            b2 = this.getData('i');
                            c2 = this.getData('j');

                            if (!mano2[a2].colocada && turno == 1) {
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
      
                                    /*for (var z = 0; z < 8; z++) {
                                        mano2[z].removeInteractive();
                                        
                                            mano1[z].setInteractive();
                                        
                                    }*/

                                    for (var i = 0; i < 4; i++) {
                                        for (var j = 0; j < 4; j++) {
                                            celdas[i][j].removeInteractive();
                                        }
                                    } 
                                    turno = 0;
                                    turnonumerico++;
                                    mano2[a2].setSeleccionada(false);


                                    //FUNCION QUE HAY QUE RECUPERAR PARA EL FINAL DE LA PARTIDA
                                    if (turnonumerico == 17){
                                        var finale = that.setWinner(celdas);
                                        that.scene.pause();
                                        setTimeout(function(){ music.stop();}, 2900);
                                        setTimeout(function(){  that.scene.start('gameOverScene', {puntos: finale}); }, 3000);
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
