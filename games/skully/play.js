let player;
let cursorKeys;

let score;
let scoreText;

let bones;
let boneSpawnDelay;

let bombs;
let bombSpawnDelay;

export default {
    preload() {
        this.load.image("skull", "img/skull.png");
        this.load.image("bone", "img/bone.png");
        this.load.image("bomb", "img/bomb.png");
    },
    init() {
        score = 0;
        boneSpawnDelay = 1000;
        bombSpawnDelay = 3000;
    },
    create() {
        const G = this.add.graphics();
        G.fillStyle(0xEAEAEA);
        G.fillRect(0, 0, 400, 400);

        scoreText = this.add.text(350, 10, score, {
            color: "#0c0221", 
            fontFamily: "Helvetica",
        });

        player = this.physics.add.sprite(200, 350, "skull");
        player.setScale(2);
        player.setCollideWorldBounds(true);
        player.setMaxVelocity(600);
        
        cursorKeys = this.input.keyboard.addKeys({
            A: Phaser.Input.Keyboard.KeyCodes.A,
            Left: Phaser.Input.Keyboard.KeyCodes.LEFT,

            D: Phaser.Input.Keyboard.KeyCodes.D,
            Right: Phaser.Input.Keyboard.KeyCodes.RIGHT,

            W: Phaser.Input.Keyboard.KeyCodes.W,
            SPACE: Phaser.Input.Keyboard.KeyCodes.SPACE,
        });

        bones = this.physics.add.group();
        bones.defaultKey = "bone";

        const spawnBone = () => {
            const bone = bones.create(Math.random()*380+10, 50);
            bone.setGravityY(100);
            if (boneSpawnDelay > 350) {
                boneSpawnDelay--;
            }
            this.time.addEvent({
                delay: boneSpawnDelay,
                callback: spawnBone,
            });
        };
        this.time.addEvent({
            delay: boneSpawnDelay,
            callback: spawnBone
        });

        bombs = this.physics.add.group();
        bombs.defaultKey = "bomb";

        const spawnBomb = () => {
            const bomb = bombs.create(Math.random()*380+10, 50);
            bomb.setGravityY(100);
            this.time.addEvent({
                delay: bombSpawnDelay,
                callback: spawnBomb
            });
        };
        this.time.addEvent({
            delay: bombSpawnDelay,
            callback: spawnBomb
        });
    },
    update() {
        const acceleration = 600;
        const initSpeed = 175;

        if (cursorKeys.A.isDown || cursorKeys.Left.isDown) {
            player.setAccelerationX(-acceleration);
            if (player.body.velocity.x === 0) {
                player.setVelocityX(-initSpeed);
            }
        } else if (cursorKeys.D.isDown || cursorKeys.Right.isDown) {
            player.setAccelerationX(acceleration);
            if (player.body.velocity.x === 0) {
                player.setVelocityX(initSpeed);
            }
        } else {
            player.setVelocityX(0);
            player.setAccelerationX(0);
        }

        this.physics.overlap(player, bones, (player, bone) => {
            bone.destroy(); 
            score++;
            scoreText.setText(score);
        });

        for (let bone of bones.getChildren()) {
            if (bone.y > 400) {
                bone.destroy();
                this.scene.start("gameover");
                return;
            }
        }

        this.physics.overlap(player, bombs, (player, bomb) => {
            this.scene.start("gameover");
        });

        for (let bomb of bombs.getChildren()) {
            if (bomb.y > 400) {
                bomb.destroy();
            };
        }
    }
};
