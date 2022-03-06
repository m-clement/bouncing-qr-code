let x;
let y;

let xspeed;
let yspeed;

let qrCode;

let r, g, b;

function preload() {
  qrCode = loadImage("qr_code.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = random(width);
  y = random(height);
  xspeed = 2.5;
  yspeed = 2.5;
  pickColor();
}

function pickColor() {
  r = random(100, 256);
  g = random(100, 256);
  b = random(100, 256);
}

function draw() {
  background(0);
  tint(r, g, b);
  image(qrCode, x, y);


  x = x + xspeed;
  y = y + yspeed;

  if (x + qrCode.width >= width) {
    xspeed = -xspeed;
    x = width - qrCode.width;
    pickColor();
  } else if (x <= 0) {
    xspeed = -xspeed;
    x = 0;
    pickColor();
  }

  if (y + qrCode.height >= height) {
    yspeed = -yspeed;
    y = height - qrCode.height;
    pickColor();
  } else if (y <= 0) {
    yspeed = -yspeed;
    y = 0;
    pickColor();
  }
}