Triskel.preloadState = function(game) {
}

Triskel.preloadState.prototype = {
    preload: function(){
        //Tablero
        game.load.image('fondo', 'assets/prueba.jpg');
    },

    create: function(){
        game.state.start('menuState');
    },

    update: function(){
    }


}