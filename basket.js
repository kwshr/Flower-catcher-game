class Basket{
  constructor(x,y,w,h)
  {
    this.x=x;
    this.y=y;
    this.w=w;
    this.h=h;
  }
  show(){
  noFill();
  stroke('lightgrey')
  strokeWeight(5)
  arc(this.x,this.y,this.w*0.4*2,this.w*0.4*2,PI,0)
  noStroke()
  fill(150, 75, 0)
  beginShape();
  vertex(this.x - this.w / 2, this.y);
  vertex(this.x + this.w / 2, this.y);
  vertex(this.x + this.w / 4, this.y + this.h);
  vertex(this.x - this.w / 4, this.y + this.h);
  endShape(CLOSE);
  
}
}