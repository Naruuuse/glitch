// Create a new canvas to the browser size
function setup() {
  createCanvas(windowWidth, windowHeight);
}

// On window resize, update the canvas size
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// Render loop that draws shapes with p5
function draw() {
  background(0);

  // Use the minimum screen size for relative rendering
  const dim = Math.min(width, height);

  // Set up stroke and disable fill
  strokeJoin(ROUND);
  strokeWeight(dim * 0.015);
  stroke(255);
  noFill();

  // Get time in seconds
  const time = millis() / 1000;

  // How long we want the loop to be (of one full rotation)
  const duration = 7;

  // Get a 'playhead' from 0..1
  // We use modulo to keep it within 0..1
  const playhead = time / duration % 1;

  // Get the rotation of a full circle
  const rotation = playhead * PI * 2;

  // Center of screen
  const x = width / 2;
  const y = height / 2;

  // Size of rectangle, relative to screen size
  const size = dim * 0.5;

  // Save transforms
  push();

  // To rotate around the center,
  // we have to first translate to center
  translate(x, y);

  // Then we can rotate around the center
  rotate(rotation);

  // Now we can draw at (0, 0) because we are still translated
  rectMode(CENTER);
  rect(0, 0, size, size);

  // Restore transforms
  pop();
}
