class deckSelect extends Phaser.Scene {
    constructor() {
        super("deckSelectScene");
    }

    init(){
        
    }

    preload(){
        
    }

    create() {

        var clicksonido = game.sound.add('clickmenus');
        this.background = this.add.image(0, 0, 'Settings');
        this.background.setOrigin(0,0);

        this.add.image(562.5, 400, 'mode').setOrigin(0.5, 0.5);
        this.add.image(1037.5, 400, 'mode').setOrigin(0.5, 0.5);

        var B = JSON.parse(buttons);

        this.add.text(750, 75, B.deck[game.language], { fontFamily: 'Metamorphous', fontSize: '46px', color: 'white' }).setOrigin(0.5);

        this.add.text(562.5, 187.5, B.player[game.language] + " 1", { fontFamily: 'Metamorphous', fontSize: '36px', color: 'white' }).setOrigin(0.5);
        this.add.text(1037.5, 187.5, B.player[game.language] + " 2", { fontFamily: 'Metamorphous', fontSize: '36px', color: 'white' }).setOrigin(0.5);

        var makebutton = new makeButton();

        //Selección de mazo
        var deck1_1 = makebutton.setButton(this, 562.5, 312.5, 'Bbutton', B.nordic[game.language], 'mode');
        var deck2_1 = makebutton.setButton(this, 562.5, 437.5, 'Bbutton', B.greek[game.language], 'mode');
        var deck1_2 = makebutton.setButton(this, 1037.5, 312.5, 'Bbutton', B.nordic[game.language], 'mode');
        var deck2_2 = makebutton.setButton(this, 1037.5, 437.5, 'Bbutton', B.greek[game.language], 'mode');
        makebutton.setButton(this, 625, 800, 'Bbutton', B.back[game.language], 'menuScene');

        var one = false, two = false;
        var that = this;


        
        function select1(){
            one = true;

            if(two){
                makebutton.setButton(that, 975, 800, 'Bbutton', B.play[game.language], 'partidaScene');
            }
        }

        function select2(){
            two = true;

            if(one){
                makebutton.setButton(that, 975, 800, 'Bbutton', B.play[game.language], 'partidaScene');
            }
        }

        deck1_1.on('pointerdown', function () {
            clicksonido.play();
            deck1_1.setFrame(1);
            deck2_1.setFrame(0);

            game.deck[0] = 0;
            select1();
        });

        deck2_1.on('pointerdown', function () {
            clicksonido.play();
            deck1_1.setFrame(0);
            deck2_1.setFrame(1);

            game.deck[0] = 1;
            select1();
        });

        deck1_2.on('pointerdown', function () {
            clicksonido.play();
            deck1_2.setFrame(1);
            deck2_2.setFrame(0);

            game.deck[1] = 0;
            select2();
        });

        deck2_2.on('pointerdown', function () {
            clicksonido.play();
            deck1_2.setFrame(0);
            deck2_2.setFrame(1);

            game.deck[1] = 1;
            select2();
        });
    }

    update() {

    }
}