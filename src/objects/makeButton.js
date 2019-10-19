class makeButton{    
    
    constructor(){}

    //Crea un botón a partir del contexto (context), su posición x e y (posX, posY), el tipo de botón (type), texto que contiene (text) y escena a la que transiciona (scene)
    setButton(context, posX, posY, type, text, scene, selecMode = null, music = null){

        var clicksonido = game.sound.add('clickmenus');
        var button;
        var t;
        //Tipo de botón
        switch(type){
            case 'Bbutton':
                    button = context.add.sprite(posX, posY, 'Bbutton', 0);
                    t = context.add.text(posX, posY, text, { fontFamily: 'Metamorphous', fontSize:'42px', color:'white' });
            break;

            case 'Lbutton':
                    button = context.add.sprite(posX, posY, 'Lbutton', 0);
                    t = context.add.text(posX, posY, text, { fontFamily: 'Metamorphous', fontSize:'34px', color:'white' });
            break;

            case 'Sbutton':
                    button = context.add.sprite(posX, posY, 'Sbutton', 0);
                    button.scale = 0.75;
                    t = context.add.text(posX, posY + 50, text, { fontFamily: 'Metamorphous', fontSize:'30px', color:'white' });
            break;

            case 'mute':
                    button = context.add.sprite(posX, posY, 'mute', 0);
                    t = context.add.text(posX, posY + 50, text, { fontFamily: 'Metamorphous', fontSize:'24px', color:'white' });
            break;

            default:
                    button = context.add.sprite(posX, posY, 'Lbutton', 0);
                    t = context.add.text(posX, posY, text, { fontFamily: 'Metamorphous', fontSize:'34px', color:'white' });
            break;

        }     

        if(type != 'Sbutton')
        button.scale = 1.25;

        t.setOrigin(0.5);

        button.setInteractive();

        if(scene != "mode"){
        button.on('pointerover', function (event) { 
            t.setOrigin(0.5, 0.4);   
            button.setFrame(1);   
        });

        
        button.on('pointerout', function (event) { 
            t.setOrigin(0.5);   
            button.setFrame(0);    
        });


        if(scene != "none"){
            button.on('pointerdown', function () {
                clicksonido.play();
                if (music != null) {    
                music.stop();
                }   
                    context.scene.start(scene, {mode: selecMode});  
                    
            });
        }

        }

        return button;
    }
}