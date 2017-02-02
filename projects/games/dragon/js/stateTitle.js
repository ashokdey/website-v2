var StateTitle = {

    preload: function () {
        
    },

    create: function () {
        this.buttonStart = game.add.button(game.world.centerX, game.world.centerY + 100, "buttons", this.startGame, this, 6, 7, 6);
        this.buttonStart.anchor.set(0.5, 0.5);

        //dragon
        this.dragon = game.add.sprite(game.world.centerX, game.world.centerY, "dragon");
        this.dragon.anchor.set(0.5, 0.5);
        this.dragon.animations.add('fly', [0, 1, 2, 3], 12, true);
        this.dragon.animations.play('fly');
        game.stage.backgroundColor = "#26C9FF";

        this.titleText = game.add.text(game.world.centerX, 60, "Hungry Dragon", {
            font: "50px Lobster"
            , fill: "#00D900"
            , stroke: "#222222"
            , strokeThickness: 4
            , align: "center"
        });
        this.titleText.anchor.set(0.5, 0.5);
    }
    , startGame: function () {
        game.state.start("StateInstructions");
    }
    , update: function () {

    }

}