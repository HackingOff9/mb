let cursorKeys;

export default {
    preload() {
        this.load.image("skull", "img/skull.png");
        this.load.image("gameover", "img/gameover.png");
    },
    create() {
        const G = this.add.graphics();
        G.fillStyle(0xEAEAEA);
        G.fillRect(0, 0, 400, 400);

        const skull = this.add.image(200, 200, "skull");
        skull.setScale(5);

        cursorKeys = this.input.keyboard.addKeys({
            Space: Phaser.Input.Keyboard.KeyCodes.SPACE,
            Enter: Phaser.Input.Keyboard.KeyCodes.ENTER,
        });

        const gameover = this.add.image(200, 300, "gameover");
        gameover.setOrigin(0.5);
    },
    update() {
        if (cursorKeys.Space.isDown || cursorKeys.Enter.isDown) {
            this.scene.start("main");
        }
    }

}
