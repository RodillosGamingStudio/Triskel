class puntuaciones extends Phaser.Scene {
    constructor() {
        super("puntuacionesScene");
    }

    init(data){
        
    }

    preload(){
        
    }

    create() {
        
        var B = JSON.parse(buttons);

        //Variable que permite hacer botones
        var makebutton = new makeButton();

        var menu_button = makebutton.setButton(this, 640, 440, 'Bbutton', B.credits[game.language], 'menuScene'); 
    }

    update() {

    }
}