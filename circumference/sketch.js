const n = 800
const radius = 1
const maxDist = 40

const particles = []

function setup() {
  createCanvas(windowWidth, windowHeight);

  const r = 100
  const cx = windowWidth / 2
  const cy = windowHeight / 2

  for (let i = 0; i < n; ++i) {
    const rad = TWO_PI / n * i
    particles[i] = {
      x: cx + cos(rad) * r,
      y: cy + sin(rad) * r,
      vx: 0,
      vy: 0,
    }
  }
}

// Function to be executed when the window size is changed
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  noFill()
  stroke(0, 10)

  for (let i = 0; i < n; ++i) {
    const p = particles[i]
    p.x += p.vx
    p.y += p.vy

    p.vx += 0.2 * (Math.random() - 0.5)
    p.vy += 0.2 * (Math.random() - 0.5)

    circle(p.x, p.y, radius)
  }
}