function preload() {
    this.load.image('fundo', 'assets/sky.png');
    this.load.image('obstaculo', 'assets/platform.png');
    //this.load.image('personagem', 'assets/dude.png');
    this.load.spritesheet('personagem','assets/dude.png', { frameWidth:32, frameHeight:48 });
  // ================================================  
  //  this.load.image('player', 'assets/repl.png');
}

function create() {

      this.add.image(300,200,'fundo');

      var platform  = this.physics.add.staticGroup();
      platform.create(300,380,'obstaculo').setScale(1.5);

      platform.create(50, 150, 'obstaculo');
      platform.create(550, 250, 'obstaculo');

      var personagem = this.physics.add.sprite(100, 330, 'personagem');

      personagem.setCollideWorldBounds(true);

      this.anims.create({
        key : 'parado',
        frames: [{ key : 'personagem', frame: 4 }],
        frameRate : 20
        });
      this.anims.create({
        key : 'esquerda',
        frames : this.anims.generateFrameNumbers('personagem', { start : 0, end : 3}),
        frameRate: 10,
        repeat : -1
      });  
      this.anims.create({
        key : 'direita',
        frames : this.anims.generateFrameNumbers('personagem', { start : 5, end : 8}),
        frameRate: 10,
        repeat : -1
      });  


      this.anims.create({
        key : 'esquerda',
        frames : this.anims.generateFrameNumbers('personagem', { start : 0, end : 3}),
        frameRate: 10,
        repeat : -1
      });  

      this.personagem = personagem;
// =====================================================  
    //this.w = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W)
    //this.a = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A)
    //this.s = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S)
    //this.d = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D)

    //this.player = this.physics.add.image(config.width / 2, config.height / 2, 'player').setScale(0.25, 0.25);
    //this.player.setCollideWorldBounds(true);
}

function update() {
    let cursors = this.input.keyboard.createCursorKeys();
    var personagem = this.personagem;

    if(cursors.left.isDown){
       personagem.setVelocityX(-160);
       personagem.anims.play('esquerda', true);
    } else if(cursors.right.isDown){
       personagem.setVelocityX(160);
       personagem.anims.play('direita', true);
    }
    else
    { 
    personagem.setVelocityX(0);
    personagem.anims.play('parado');
    }
    //if ((cursors.left.isDown || this.a.isDown) || (cursors.right.isDown || this.d.isDown)) this.player.setVelocityX(cursors.left.isDown || this.a.isDown ? -160 : 160);
    //else this.player.setVelocityX(0);
    //if ((cursors.up.isDown || this.w.isDown) || (cursors.down.isDown || this.s.isDown)) this.player.setVelocityY(cursors.up.isDown || this.w.isDown ? -160 : 160);
    //else this.player.setVelocityY(0);
}

const config = {
    type: Phaser.AUTO, // Canva ou WebGL
    width: 600,
    height: 400,
    backgroundColor: '#f9f9f9',
    autoCenter : Phaser.Scale.CENTER_BOTH,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 0
            },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config);