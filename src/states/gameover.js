class gameOver extends Phaser.Scene {
    constructor() {
        super("gameOverScene");
    }

    init(data){
        this.puntos = data.puntos;
    }

    preload(){
        
    }

    create() {
        this.background = this.add.image(0, 0, 'gameover');
        this.background.setScale(1.25);
        this.background.setOrigin(0,0);

        var ganador;
        var textwinner;

        var B = JSON.parse(buttons);

        if(this.puntos[0] > this.puntos[1]){
            textwinner = B.gana[game.language];
            ganador = 1;
        }   else if (this.puntos[0] < this.puntos[1]) {
            textwinner = B.gana[game.language];
            ganador = 2;
        }   else {
            textwinner = B.empate[game.language];
            ganador = '';
        }

        this.add.text(800, 100, B.gameover[game.language], { fontFamily: 'Metamorphous', fontSize: '60px', color: 'white' }).setOrigin(0.5);

        this.add.text(600, 250, B.player[game.language] + " 1", { fontFamily: 'Metamorphous', fontSize: '50px', color: 'white' }).setOrigin(0.5);
        this.add.text(600, 425, this.puntos[0] + ' ' + B.puntos[game.language] , { fontFamily: 'Metamorphous', fontSize: '50px', color: 'white' }).setOrigin(0.5);
        this.add.text(1000, 250, B.player[game.language]+ " 2", { fontFamily: 'Metamorphous', fontSize: '50px', color: 'white' }).setOrigin(0.5);
        this.add.text(1000, 425, this.puntos[1] + ' ' + B.puntos[game.language], { fontFamily: 'Metamorphous', fontSize: '50px', color: 'white' }).setOrigin(0.5);

        this.add.text(800, 600, textwinner + ganador, { fontFamily: 'Metamorphous', fontSize: '50px', color: 'white' }).setOrigin(0.5);

        var makebutton = new makeButton();
        makebutton.setButton(this, 550, 812.5, 'Bbutton', B.back[game.language], "menuScene");
        makebutton.setButton(this, 1050, 812.5, 'Bbutton', B.rematch[game.language], "partidaScene");
    }

    update() {

    }
}