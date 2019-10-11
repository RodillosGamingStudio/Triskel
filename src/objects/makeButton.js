class makeButton{    
    
    constructor(){}

    //Crea un botón a partir del contexto (context), su posición x e y (posX, posY), el tipo de botón (type), texto que contiene (text) y escena a la que transiciona (scene)
    setButton(context, posX, posY, type, text, scene){
        var button;
        var t;

        //Tipo de botón
        switch(type){
            case 'Bbutton':
                    button = context.add.sprite(posX, posY, 'Bbutton', 2);
                    t = context.add.text(posX, posY, text, { fontFamily: '"Roboto Condensed"', fontSize:'36px', color:'white' });
            break;

            case 'Lbutton':
                    button = context.add.sprite(posX, posY, 'Lbutton', 2);
                    t = context.add.text(posX, posY, text, { fontFamily: '"Roboto Condensed"', fontSize:'27px', color:'white' });
            break;

            case 'Sbutton':
                    button = context.add.sprite(posX, posY, 'Sbutton', 2);
                    button.scale = 0.6;
                    t = context.add.text(posX, posY + 50, text, { fontFamily: '"Roboto Condensed"', fontSize:'27px', color:'white' });
            break;

            default:
                    button = context.add.sprite(posX, posY, 'Lbutton', 2);
                    t = context.add.text(posX, posY, text, { fontFamily: '"Roboto Condensed"', fontSize:'27px', color:'white' });
            break;

        }     

        t.setOrigin(0.5);

        button.setInteractive();

        if(scene != "mode"){
        button.on('pointerover', function (event) { 
            t.setOrigin(0.5, 0.4);   
            button.setFrame(1);    
        });

        
        button.on('pointerout', function (event) { 
            t.setOrigin(0.5);   
            button.setFrame(2);    
        });


        if(scene != "none"){
            button.on('pointerdown', function () {
                    context.scene.start(scene);    
            });
        }

        }

        return button;
    }
}