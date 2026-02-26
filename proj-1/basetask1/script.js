const incButton = document.getElementById('inc');
const decButton = document.getElementById('dec');
const coin = document.getElementById("coin");

const coinImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMPQqQzzpb1bSRUwOl1AGQfHve9vWXFqAcOKBXCD2iAg&s"


incButton.addEventListener('click', () => {
    
   const imge = document.createElement('img');

    const randomNum = Math.floor(Math.random() * 100);
    console.log("rhb", randomNum.x);
    
     console.log("randomNum", randomNum);
     
   imge.src = coinImg=`${randomNum}`;
   imge.width = 50;
   imge.style.margin = "5px";


   coin.appendChild(imge);
   
});

decButton.addEventListener("click", () => {
  const lastCoin = coin.lastElementChild;

  if (lastCoin) {
    lastCoin.remove();
  }
});