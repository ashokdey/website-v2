var StateInit = {

    preload: function () {
        game.load.image("loadingEmpty", "images/loading/progress_none.png");
        game.load.image("loadingFull", "images/loading/progress_all.png");


        game.scale.forceOrientation(true, false);


        game.scale.enterIncorrectOrientation.add(this.wrongWay, this);
        game.scale.leaveIncorrectOrientation.add(this.rightWay, this);

    }
    , create: function () {
        game.state.start("StateLoad");
    }
    , update: function () {

    }
    , rightWay: function () {
        document.getElementById("wrong").style.display = "none";
    }
    , wrongWay: function () {
        document.getElementById("wrong").style.display = "block";
    }

}