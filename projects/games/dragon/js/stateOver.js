var StateOver = {

    preload: function () {
        
    },

    create: function () {
        this.buttonPlayAgain = game.add.button(game.world.centerX, game.world.centerY + 100, "buttons", this.replay, this, 0, 1, 0);
        this.buttonPlayAgain.anchor.set(0.5, 0.5);
        
         //dragon
        this.dragon = game.add.sprite(game.world.centerX, game.world.centerY, "dragon");
        this.dragon.anchor.set(0.5,0.5);
        this.dragon.animations.add('fly', [0, 1, 2, 3], 12, true);
        this.dragon.animations.play('fly');
        this.dragon.scale.x=-1;
        game.stage.backgroundColor="#26C9FF";
        
    }
    , replay: function () {
        game.state.start("StateMain");
    }
    , update: function () {

    }

}