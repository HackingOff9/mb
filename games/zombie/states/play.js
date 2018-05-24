const bulletSpeed = 1500;
const playerSpeed = 200;

const fireRate = 100;
const bulletLifespan = 1000;

const worldHeight = 800;
const worldWidth = 1200;

export default class Play extends Phaser.Scene {
    getPlayerRotation() {
        const mouse = this.input.activePointer.positionToCamera(this.cameras.main);
        const deltaX = this.player.x - mouse.x;
        const deltaY = this.player.y - mouse.y;
        return Math.atan2(-deltaX, deltaY);
    }
    preload() {
        this.load.image("player", "img/player.png");
        this.load.image("ground", "img/ground.png");
        this.load.image("bullet", "img/bullet.png");
    }
    init() {
        this.canFire = true;
        this.keys = undefined;
        this.bullets = undefined;
        this.player = undefined;
    }
    create() {
        this.physics.world.setBounds(0, 0, worldWidth, worldHeight);

        const ground = this.add.tileSprite(worldWidth/2, worldHeight/2, worldWidth, worldHeight, "ground");

        this.player = this.physics.add.sprite(worldWidth/2, worldHeight/2, "player");
        this.player.setScale(4);
        this.player.setCollideWorldBounds(true);

        this.bullets = this.physics.add.group();
        this.bullets.defaultKey = "bullet";

        const camera = this.cameras.main;
        camera.startFollow(this.player);
        camera.setBounds(0, 0, worldWidth, worldHeight);

        this.keys = this.input.keyboard.addKeys({
            W: Phaser.Input.Keyboard.KeyCodes.W,
            Up: Phaser.Input.Keyboard.KeyCodes.UP,

            A: Phaser.Input.Keyboard.KeyCodes.A,
            Left: Phaser.Input.Keyboard.KeyCodes.LEFT,

            S: Phaser.Input.Keyboard.KeyCodes.S,
            Down: Phaser.Input.Keyboard.KeyCodes.DOWN,

            D: Phaser.Input.Keyboard.KeyCodes.D,
            Right: Phaser.Input.Keyboard.KeyCodes.RIGHT
        });
    }
    update() {
        if (this.keys.W.isDown || this.keys.Up.isDown) {
            this.player.setVelocityY(-playerSpeed);
        } else if (this.keys.S.isDown || this.keys.Down.isDown) {
            this.player.setVelocityY(playerSpeed);
        } else {
            this.player.setVelocityY(0);
        }

        if (this.keys.A.isDown || this.keys.Left.isDown) {
            this.player.setVelocityX(-playerSpeed);
        } else if (this.keys.D.isDown || this.keys.Right.isDown) {
            this.player.setVelocityX(playerSpeed);
        } else {
            this.player.setVelocityX(0);
        }

        this.player.rotation = this.getPlayerRotation();

        if (this.input.activePointer.primaryDown && this.canFire) {
            this.canFire = false;
            this.createBullet(); 
            this.time.addEvent({
                delay: fireRate,
                callback: () => {
                    this.canFire = true;
                }
            });
       }
    }
    createBullet() {
        const bullet = this.bullets.create(this.player.x, this.player.y);

        const rotation = this.getPlayerRotation();
        bullet.rotation = rotation;
        bullet.setVelocityY(-Math.cos(rotation)*bulletSpeed);
        bullet.setVelocityX(Math.sin(rotation)*bulletSpeed);

        this.time.addEvent({
            delay: bulletLifespan,
            callback: () => {
                bullet.destroy();
            }
        });
    }
};
