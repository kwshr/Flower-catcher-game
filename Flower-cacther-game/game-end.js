class Game{
  display(flowersSaved){
    background('lightgrey');
    for (let i = 0; i < 100; i++) {
    let y = i * 20; 
    drawSquare(y);
    }
    textFont('Georgia');
    strokeWeight(2);
    stroke('black')
    textSize(30);
    text("NO LIVES LEFT",135,150);
    text("YOU COLLECTED "+flowersSaved+" FLOWERS", 30,250)
    text("PLEASE, RESTART THE GAME",40,350);
    
  }
    drawSquare(y){
  noStroke()
  for (let i = 0; i < 25; i++) {
    let x = i * 20;
    let blueShade = map(i, 0, 20 - 1, 250, 190); 
    fill(blueShade,100,150);
    rect(x,y, 20, 20);
  }
}
}