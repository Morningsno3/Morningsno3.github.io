let page = 1;
let img;
let buttonimg;

function preload() {
  img = loadImage('assets/school.jpg');
  buttonimg
}
function setup() {
  createCanvas(400, 600);
  
  
}

function draw() {
  var centralXpos = width / 2;
  var centralYpos = height / 2;
  textSize(30);
  textAlign(CENTER);
  
  if (page === 1) {
    
  
    background(220);
    fill(0,180,255,100);
    noStroke();
  
    rect(0,0,width,50);
    rect(0,height-100,width,100);
  
    
    
    fill(255);
    text("추천 여행지",centralXpos,38);
    text("다른 여행지 찾아보기",centralXpos,height-38)
  
    multipleRect3x3(28,70,20,20,100,120);
    
  
  }
  
  if (page === 2) {
    fill(240)
    rect(0,0,400,800)
    
    fill(0,180,255,100);
    noStroke();
    rect(0,0,width,50);
    
    fill(255);
    text("여행지 5",centralXpos,38);
    imageMode(CENTER);
    image(img,centralXpos,centralYpos-100,width,300);

    textAlign(LEFT);

    fill(0,0,255);
    text('경사로 있음\n입장료 무료',20,400);
    

    textSize(20);
    fill(255,0,0);
    text('경사 급함\n지체장애인 배려 시설 없음\n시각장애인 배려 시설 없음',20,500);

  }
  
  console.log(page);
}

function multipleRect3x3(startX,startY,intervalX,intervalY,xSize,ySize) {
  for (i = 0; i < 3; i++) {
    for (j = 0; j < 3; j++) {
      var xPos = startX + (xSize+intervalX) * i;
      var yPos = startY + (ySize+intervalY) * j;
      fill(255)
      rect(xPos,yPos,xSize,ySize);
      textSize(15);
      fill(0);
      text("여행지" + (j*3+i+1),xPos+(xSize/2),yPos+100);
    }
  }
}

function mousePressed() {
  if (page === 1) {
    page = 2;
  } else {
    page = 1;
  }
}