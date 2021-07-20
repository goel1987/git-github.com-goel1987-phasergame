var config = {
    type: Phaser.AUTO,//renderer type
    width: 215,
    height: 270,
    scene: { // here you set up which functions you are using for each step in the game loop
      init: init,
      preload: preload,
      create: create
    }
  };
  
  //you finally instantiate the "game" object using the "config" one
  var game = new Phaser.Game(config);