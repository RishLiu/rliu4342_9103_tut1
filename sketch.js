let song;
let fft;
let circles = [];
let speedSlider;
let centroid = 0; 

function preload() {
  song = loadSound('audio/sample.mp3'); 
}

function setup() {
  createCanvas(400, 400);
  // Create a new FFT analysis object
  fft = new p5.FFT();
  // Add the song (sample) into the FFT's input
  song.connect(fft);

  // Add a slider to user to control the speed of dropping
  speedSlider = createSlider(1, 5, 2); 
  speedSlider.position(10, height + 10);
}

function draw() {
  // Give the user a hint on how to interact with the sketch
  if (getAudioContext().state !== 'running') {
    background(220);
    fill(0);
    text('tap here to play some sound!', 10, 20, width - 20);
    // Early exit of the draw loop
    return;
  }
  background(220);

// Request fresh data from the FFT analysis
  let spectrum = fft.analyze();

// Extract the spectral centroid
// The highest frequency measured in the FFT (e.g., sample_rate / 2)
let nyquist = 22050;

// get the centroid
spectralCentroid = fft.getCentroid();

// The mean_freq_index calculation is for the display.
let mean_freq_index = spectralCentroid / (nyquist / spectrum.length);

// Use a log scale to match the energy per octave in the FFT display
let centroidplot = map(log(mean_freq_index), 0, log(spectrum.length), 0, width);

// the line showing where the centroid is will be red
  stroke(255, 0, 0);
  line(centroidplot, 0, centroidplot, height);

// iterate through the circles and update them
  for (let i = 0; i < circles.length; i++) {
    let circle = circles[i];
    circle.update(spectrum);
    circle.display();
  }

  // Add new circle to the array
  circles.push(new Circle(speedSlider.value()));
}

// Toggle playback on or off with a mouse click
function mousePressed() {
  if ( mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) {
    if (song.isPlaying()) {
      song.stop(); // .isPlaying() returns a boolean
    } else {
      song.play();
    }
  }
}

// A class to draw circles
class Circle {
  constructor(speed) {
    this.x = random(width);
    this.y = -20; 
    this.diameter = random(20, 50);
    this.speed = speed; // from the slider
    this.color = color(random(255), random(255), random(255));
  }

  //the target size is defined by the amplitude of the frequency band with a max of 100
  //because the amplitude is between 0 and 255 we map the value to 10 and 100
  update(spectrum) {
    let index = floor(map(this.x, 0, width, 0, spectrum.length - 1));
    let size = map(spectrum[index], 0, 255, 10, 100);
    this.diameter = size;
    this.y += this.speed;
  }

  display() {
    fill(this.color);
    noStroke();
    ellipse(this.x, this.y, this.diameter);
  }
}
