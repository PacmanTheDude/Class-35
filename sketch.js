var hypnoticBall, database;
var position;
var player, form, game, gameState = 0, playerCount;

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
  game = new Game();
  game.getState();
  game.startFunction();
}

function draw() {
  background("white");
}
  
   