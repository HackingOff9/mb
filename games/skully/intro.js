let cursorKeys;
        
export default {
    preload() {
        this.load.image("skull", "img/skull.png");
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

        const text = this.add.text(200, 300, "Press space to start", {
            color: "#0c0221",
            fontFamily: "Helvetica"
        });
        text.setOrigin(0.5, 0);
    },
    update() {
        if (cursorKeys.Space.isDown || cursorKeys.Enter.isDown) {
            this.scene.start("main");
        }
    }
}
