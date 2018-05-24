import play from "./states/play.js";

const config = {
    pixelArt: true,
    width: 600,
    height: 400,
    physics: {
        default: "arcade",
    },
};

const game = new Phaser.Game(config);

game.scene.add("play", play);

game.scene.start("play");
