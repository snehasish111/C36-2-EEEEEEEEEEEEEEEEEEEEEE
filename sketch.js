var canvas, backgroundImage
var gameState = 0;
var playerCount;

var form, game, player;
var database;

function setup()
{
  canvas = createCanvas(400,4000);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}

function draw()
{
   
}