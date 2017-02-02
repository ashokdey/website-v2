var StateLoad = {

    preload: function () {

        var empty = game.add.image(0, 0, "loadingEmpty");
        var full = game.add.image(0, 0, "loadingFull");

        empty.x = game.world.centerX;
        empty.y = game.world.centerY;
        empty.anchor.set(0.5, 0.5);
        full.anchor.set(0, 0.5);
        full.x = game.world.centerX - empty.width / 2;
        full.y = empty.y;

        game.load.setPreloadSprite(full);

        //PRELOAD EVERYTHING HERE
        game.load.spritesheet("dragon", "images/main/dragon.png", 120, 85, 4);
        game.load.image("background", "images/main/background.png");
        game.load.spritesheet("candy", "images/main/candy.png", 52, 50, 8);
        game.load.image("balloon", "images/main/thought.png");
        game.load.spritesheet("soundButtons", "images/ui/soundButtons.png", 44, 44, 4);
        game.load.audio("burp", "sounds/burp.mp3");
        game.load.audio("gulp", "sounds/gulp.mp3");
        game.load.audio("backgroundMusic", "sounds/background.mp3");
        game.load.spritesheet("buttons", "images/ui/buttons.png", 265, 75);

    },

    create: function () {
        game.state.start("StateTitle");
    },

    update: function () {

    }

}