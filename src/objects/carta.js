class Carta extends Phaser.GameObjects.Sprite{
    constructor(scene) {
        var x;
        var y;
        super(scene, x , y, 'carta');

        scene.add.existing(this);
    }
}