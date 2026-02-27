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


  const speed = 10; // move 10px each time when key is press

  let playerX = z;   //to track player position
  let playerY = p;

  document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowUp")  {
        playerY = playerY-speed;
      }

      if (e.key === "ArrowDown") {
        playerY = playerY + speed;
      }

      if (e.key === "ArrowLeft") {
        playerX = playerX - speed;
      }

      if (e.key === "ArrowRight") {
        playerX = playerX + speed;
      }
      // boundary check for the players 
      playerX = Math.max(0, Math.min(width - player_size, playerX));
      playerY = Math.max(0, Math.min(height - player_size, playerY));

      // Apply new position
      player.style.left = `${playerX}px`;
      player.style.top = `${playerY}px`;


      const coins = document.querySelectorAll(".coin");

      coins.forEach((coin) => {
      const coinX = parseFloat(coin.style.left);
      const coinY = parseFloat(coin.style.top);
    
      if (isColliding(playerX, playerY, player_size, coinX, coinY, coin_size)) {
        console.log("Coin collected!");

        coin.remove();
      }
      });
  })



// logic to check to the collision
  function isColliding(px, py, pSize, cx, cy, cSize) {
  return !(
    px + pSize < cx ||      // player is left of coin
    px > cx + cSize ||      // player is right of coin
    py + pSize < cy ||      // player is above coin
    py > cy + cSize         // player is below coin
  );
}