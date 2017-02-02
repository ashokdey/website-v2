var game;
var score;
var soundOn = true;
var musicOn = true;

window.onload = function () {
    if (screen.width > 1500) {
        //desktop laptop
        game = new Phaser.Game(640, 480, Phaser.AUTO, "ph_game");

    } else {
        //mobile device
        game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, "ph_game");
    }
    //add a state or screen to the game
    game.state.add("StateMain", StateMain);
    game.state.add("StateOver", StateOver);
    game.state.add("StateTitle", StateTitle);
    game.state.add("StateInit", StateInit);
    game.state.add("StateLoad", StateLoad);
    game.state.add("StateInstructions", StateInstructions);
    game.state.start("StateInit");
}