let myCapture, handPose, slider;
let hands = [];
let incrementVal, colorR, colorG, colorB;
let myfont;

function preload(){
  handPose = ml5.handPose({flipped: true});
  myfont = loadFont('pixel.otf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  myCapture = createCapture(VIDEO, {flipped: true});
  incrementVal = 3;
  myCapture.hide();
  myCapture.size(640, 480);
  pixelDensity(1);
  handPose.detectStart(myCapture, gotHands);

  slider = createSlider(3, 100, 60, 1);
  slider.position(270, 590);
}

function draw() {
  background(255);
  myCapture.loadPixels();
  image(myCapture, 0, 0);
  noStroke();

  textFont('Arial');
  fill("black");
  textSize(15);
  text("Pixel Size", 265, 585);

  textFont(myfont);
  textSize(50);
  text("Behind the Pixels", 700, 40)

  textFont('Arial');
  textSize(15);
  text("Inspired by the sudden popularity back to the early 2010s pixelated art, I created an experimental camera that explores the boundaries where both the extreme pixels of early technology and the constantly advancing technology merge together.", 700, 80, 600);
  text("Use one hand to pinch.", 700, 120, 600);

  incrementVal = slider.value();

  for(let y = 0; y < myCapture.height; y+=incrementVal){
    for(let x = 0; x < myCapture.width; x+=incrementVal){
      let index = (x + y * myCapture.width)*4;
  
      let r = myCapture.pixels[index];
      let g = myCapture.pixels[index+1];
      let b = myCapture.pixels[index+2];

      colorR = myCapture.pixels[0];
      colorG = myCapture.pixels[1];
      colorB = myCapture.pixels[2];
 
     fill(r, g, b);
     rect(x, y, incrementVal, incrementVal);
    }
  }

  for (let i = 0; i < hands.length; i++) {
    let hand = hands[i];
    let current_keypoints = hand.keypoints;
    
    let pinch_distance = dist(current_keypoints[8].x, current_keypoints[8].y, current_keypoints[4].x, current_keypoints[4].y)
    //mapped_pinch = map(pinch_distance, 0, 200, 2, 100);

    //let color = myCapture.pixels[];
    //console.log(current_keypoints[8].x);

    noFill();
    stroke(colorR, colorG, colorB);
    strokeWeight(incrementVal);
    rect(current_keypoints[8].x, current_keypoints[8].y, pinch_distance, pinch_distance);

    // how to get a capture of the pixelated camera ??
    copy(myCapture, current_keypoints[8].x, current_keypoints[8].y, pinch_distance, pinch_distance, current_keypoints[8].x, current_keypoints[8].y, pinch_distance, pinch_distance);
  }
}

function gotHands(results){
  hands = results;
}
