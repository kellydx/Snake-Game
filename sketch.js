
var snake;
var grid = 20;
var mouse;
var eat;
var gameOver;
var theme;
var level =3;

function preload() {
  eat = loadSound("eat.mp3");
  gameOver = loadSound("die.mp3");
  theme = loadSound("theme1.mp4");
}

function setup() {
  createCanvas(600, 600);
  theme.play();
  theme.playMode('restart');
  snake = new Snake();
  frameRate(level);
  mouseLocation();
  snake.displayScore();

}

function mouseLocation() {
  var col = floor(width/grid);
  var row = floor(height/grid);
  mouse = createVector(floor(random(col)), floor(random(row)));
  mouse.mult(grid);
}

function draw() {
  background(51);

  if (snake.eat(mouse)) {
    snake.displayScore();
    eat.play();
    level=level+3;

    frameRate(level);
    mouseLocation();
  }

  snake.die();
  snake.update();
  snake.show();
  snake.restartMusic();

  fill(255, 0, 100);
  rect(mouse.x, mouse.y, grid, grid);
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    snake.turn(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    snake.turn(0, 1);
  } else if (keyCode === RIGHT_ARROW) {
    snake.turn(1, 0);
  } else if (keyCode === LEFT_ARROW) {
    snake.turn(-1, 0);
  }

}
