class makeButton{    
    
    constructor(){}

    setButton(context, posX, posY, type, text, scene){
        var button;
        var t;
        if(type == 'Bbutton'){
                button = context.add.sprite(posX, posY, 'Bbutton', 2);
                t = context.add.text(posX, posY, text, { fontFamily: '"Roboto Condensed"', fontSize:'36px', color:'#e2b40b' });
        }
        else{
            button = context.add.sprite(posX, posY, 'Lbutton', 2);
            t = context.add.text(posX, posY, text, { fontFamily: '"Roboto Condensed"', fontSize:'27px', color:'#e2b40b' });
        }       

        t.setOrigin(0.5);

        button.setInteractive();

        button.on('pointerover', function (event) { 
            t.setOrigin(0.5, 0.4);   
            button.setFrame(1);    
        });

        button.on('pointerout', function (event) { 
            t.setOrigin(0.5);   
            button.setFrame(2);    
        });


        button.on('pointerdown', function () {
            context.scene.start(scene);    
        });

        return button;
    }
}