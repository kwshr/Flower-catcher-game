class Flower {
  constructor(x, y,tl,colour,r,speed) {
    this.x = x;
    this.y = y;
    this.radius = r;
    this.tl=tl;
    this.colour=colour;
    this.speed=speed;
  }

  display() {
  fill(this.colour)
  let centerX = this.x;
  let centerY = this.y;
  ellipse(centerX, centerY, this.radius * 1.2);
  let angleStep = 360 / 10;
  let triangleLength = this.tl;
  for (let i = 0; i < 10; i++) {
    let angle = radians(i * angleStep);
    let x1 = centerX + cos(angle) * r;
    let y1 = centerY + sin(angle) * r;
    let x2 = x1 + cos(angle) * triangleLength;
    let y2 = y1 + sin(angle) * triangleLength;
    let x3 = x2 + cos(angle + radians(45)) * 5;
    let y3 = y2 + sin(angle + radians(45)) * 5;
    triangle(x1, y1, x2, y2, x3, y3);
  }
  }

  fall() {
    this.y +=this.speed; 
  }

}
