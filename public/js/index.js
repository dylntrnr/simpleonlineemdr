const canvas = document.getElementById('stimulationCanvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
let xPos = canvas.width / 2;
let direction = 1;
let speed = document.getElementById('speedRange').value;
const circleRadius = 50;

function drawStimulation() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = '#EE4444';
  context.beginPath();
  context.arc(xPos, canvas.height / 2, circleRadius, 0, Math.PI * 2);
  context.fill();
}

function animate() {
  speed = document.getElementById('speedRange').value;
  xPos += Number(speed) * direction;
  if (xPos + circleRadius > canvas.width || xPos - circleRadius < 0) {
    direction *= -1;
  }
  drawStimulation();
  requestAnimationFrame(animate);
}

animate();