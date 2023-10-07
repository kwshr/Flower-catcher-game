
let cursorImg;
let flowers =[]
let fires =[]
let r = 10;
let livesRemainaing =3;
let flowersSaved=0;

function setup() {
  createCanvas(500, 500);  
for(let i=0;i<100;i++){
  displayFlowers()
}
  for(let i=0;i<5;i++){
  displayFire()
}
}
function draw() {
  if(livesRemainaing>=0){
    background('lightgrey');
  for (let i = 0; i < 100; i++) {
    let y = i * 20; 
    drawSquare(y);
  }
  let basket= new Basket(mouseX,mouseY,80,35)
  basket.show();
  for (let i = 0; i < flowers.length; i++) {
    flowers[i].display();
    flowers[i].fall();
    if (isFlowerInBasket(flowers[i], basket)) {
      flowersSaved++;
      caught(flowers[i]);
  }
  }
  for (let i = 0; i < fires.length; i++) {
    fires[i].display();
    fires[i].fall();
    if(isFireinBasket(fires[i], basket)){
      livesRemainaing--;
      caught(fires[i]);
    }
  }
  if (frameCount % 10 === 0) {
    displayFlowers();
  }
  if (frameCount % 400 === 0) {
    displayFire();
  }
  scoreBoard();
  }
  else{
      let endGame= new Game();
      endGame.display(flowersSaved);
  }
}

function drawSquare(y){
  noStroke()
  for (let i = 0; i < 25; i++) {
    let x = i * 20;
    let blueShade = map(i, 0, 20 - 1, 250, 190); 
    fill(blueShade,100,150);
    rect(x,y, 20, 20);
  }
}
function displayFlowers(){
    let x = random(width);
    let y = random(-400, -100); // Start above the canvas
    let tl=random(1,10)
    let r=random(1,10)
    let speed=random(0.1,5)
    let colour=random(255)
    let flower = new Flower(x, y,tl,colour,r,speed);
    flowers.push(flower);
}
function displayFire(){
    let x = random(width);
    let y = random(-400, -100); 
    let r=10
    let speed=random(1,10)
    let fire = new Fire(x, y,r,speed);
    fires.push(fire);
}
function scoreBoard(){
  fill('white')
  ellipse(0,0, 400, 130)
  textSize(14);
  fill(120);
  textFont('Georgia');
  strokeWeight(5);
  text('Flowers saved: ' + flowersSaved, 8, 20);
  text('Lives remaining: ' + livesRemainaing, 8, 40);
}
function isFlowerInBasket(flower, basket) {
  if (flower.x > basket.x - basket.w / 2 && flower.x < basket.x + basket.w /2 && flower.y > basket.y
  ) {
    return true; 
  }
  return false; 
}
function isFireinBasket(fire, basket) {
  let x1 = basket.x - basket.w / 2;
  let x2 = basket.x + basket.w / 2;
  let y1 = basket.y;
  let y2 = basket.y + basket.h;
  if (fire.x >= x1 && fire.x <= x2 && fire.y >= y1 && fire.y <= y2) {
    return true;
  } else {
    return false;
  }
}
function caught(obj){
  obj.y = -100;
}
