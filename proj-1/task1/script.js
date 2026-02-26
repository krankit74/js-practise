const coin_container = document.getElementById("coin_container");

const width = 800;
const height = 500;
const coin_size = 35;
const coin_count = 30;
const image = "coin.jpg";
const player_img = "player.jpg"
const player_size = 50;

for (let i = 0; i < coin_count; i++) {
  const coin = document.createElement("img");
  coin.src = image;
  coin.className = "coin";

  // Generate random position
  const x = Math.random() * (width - coin_size);
  const y = Math.random() * (height - coin_size);

  coin.style.left = `${x}px`;
  coin.style.top = `${y}px`;

  coin_container.appendChild(coin);
}

  const player = document.createElement("img");
  player.src = player_img;
  player.className = "player"

  const z = Math.random() * (width - player_size);
  const p = Math.random() * (height - player_size);

  player.style.left = `${z}px`;
  player.style.top = `${p}px`;

  coin_container.appendChild(player);