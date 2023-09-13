const canvas = document.getElementById("snowfallCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const snowflakes = [];

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

class Snowflake {
  constructor() {
    this.x = randomInRange(0, canvas.width);
    this.y = randomInRange(0, canvas.height);
    this.radius = randomInRange(1, 4);
    this.speedY = randomInRange(1, 3);
  }

  update() {
    this.y += this.speedY;

    if (this.y > canvas.height) {
      this.x = randomInRange(0, canvas.width);
      this.y = 0;
    }
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();
  }
}

function createSnowflakes(numSnowflakes) {
  for (let i = 0; i < numSnowflakes; i++) {
    snowflakes.push(new Snowflake());
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (const snowflake of snowflakes) {
    snowflake.update();
    snowflake.draw();
  }

  requestAnimationFrame(animate);
}

createSnowflakes(200);
animate();
