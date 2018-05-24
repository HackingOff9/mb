import intro from "./intro.js";
import play from "./play.js";
import gameover from "./gameover.js";

const config = {
    type: Phaser.AUTO,
    pixelArt: true,
    width: 400,
    height: 400,
    parent: "#game",
    physics: {
        default: "arcade",
    },
};

const game = new Phaser.Game(config);

game.scene.add("intro", intro);
game.scene.add("main", play);
game.scene.add("gameover", gameover);

game.scene.start("intro");
