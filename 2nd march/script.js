const coin_container = document.getElementById("coin_container");

const width = 800;
const height = 500;
const coin_size = 35;
const image = "coin.jpg";

const speed = 2;
const lifeTime = 3000;

function createCoin() {
  const coin = document.createElement("img");
  coin.src = image;
  coin.className = "coin";

  // random position
  let x = Math.random() * (width - coin_size);
  let y = Math.random() * (height - coin_size);

  coin.style.left = `${x}px`;
  coin.style.top = `${y}px`;

  coin_container.appendChild(coin);

  // to move coin in any single direction
  let dx = 0;
  let dy = 0;

  if (Math.random() < 0.5) {
    dx = speed * (Math.random() < 0.5 ? -1 : 1); // horizontal
  } else {
    dy = speed * (Math.random() < 0.5 ? -1 : 1); // vertical
  }

  let startTime = Date.now();

  function moveCoin() {
    x += dx;
    y += dy;

    // boundary check
    if (x <= 0 || x >= width - coin_size) dx = -dx;
    if (y <= 0 || y >= height - coin_size) dy = -dy;

    coin.style.left = `${x}px`;
    coin.style.top = `${y}px`;

    // destroy after 5 seconds
    if (Date.now() - startTime >= lifeTime) {
      coin.remove();
      createCoin(); // create new coin
      return;
    }

    requestAnimationFrame(moveCoin);
  }

  moveCoin();
}

// start the first coin
createCoin();