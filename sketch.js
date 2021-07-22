// Pi with Leibniz Series

let pi = 4;
let it = 0;
let prev = [];
let div;

let minY = 2;
let maxY = 4;

function setup() {
  createCanvas(600, 400);
  div = createDiv('').style('font-size', '48pt');
}

function draw() {
  background(245);
  let den = it * 2 + 3;
  if (it % 2 == 0) {
    pi -= 4 / den;
  } else {
    pi += 4 / den;
  }
  prev.push(pi);

  let piY = map(PI, minY, maxY, height, 0);
  line(0, piY, width, piY);

  stroke(89);
  noFill();
  beginShape();
  let spacing = width / prev.length;
  for (let i = 0; i < prev.length; i++) {
    let x = i * spacing;
    let y = map(prev[i], minY, maxY, height, 0);
    vertex(x, y);
  }
  endShape();
  div.html(pi);
  it++;
}