function Snake() {
  this.x = 0;
  this.y = 0;
  this.xspeed = 1;
  this.yspeed = 0;
  this.total = 0;
  this.body = [];

  this.eat = function(pos) {
    var distance = dist(this.x, this.y, pos.x, pos.y);
    if (distance < 1) {
      this.total++;
      return true;
    } else {
      return false;
    }
  }

  this.turn = function(x, y) {
    this.xspeed = x;
    this.yspeed = y;
  }

  this.die = function() {
    for (var i = 0; i < this.body.length; i++) {
      var position = this.body[i];
      var distance = dist(this.x, this.y, position.x, position.y);
      if (distance < 1) {
        gameOver.play();
        gameOver.playMode('restart');
        theme.stop();
        level = 3;
        frameRate(level);

        this.total = 0;
        this.body = [];

      }
    }
  }

  this.restartMusic = function()
  {
    if (!gameOver.isPlaying() && !theme.isPlaying())
    theme.play();

  }

  this.update = function() {
    if (this.total === this.body.length) {
      for (var i = 0; i < this.body.length - 1; i++) {
        this.body[i] = this.body[i + 1];
      }
    }
    this.body[this.total - 1] = createVector(this.x, this.y);

    this.x = this.x + this.xspeed * grid;
    this.y = this.y + this.yspeed * grid;

    this.x = constrain(this.x, 0, width - grid);
    this.y = constrain(this.y, 0, height - grid);
  }

  this.show = function() {
    fill(255);
    for (var i = 0; i < this.body.length; i++) {
      rect(this.body[i].x, this.body[i].y, grid, grid);
    }
    rect(this.x, this.y, grid, grid);

  }
}
