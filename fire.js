class Fire {
  constructor(x, y,r,speed) {
    this.x = x;
    this.y = y;
    this.radius = r;
    this.speed=speed;
  }

  display() {
  fill(random(400))
  let centerX = this.x;
  let centerY = this.y;
  ellipse(centerX, centerY, this.radius * 1.2);
  }

  fall() {
    this.y +=this.speed; 
  }
}
