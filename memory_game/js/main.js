const cards = [{
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
  },
  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
  },
  {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
  },

  {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
  }
];
let cardsInPlay = [];


function checkForMatch() {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    window.alert("You found a match!");
  } else {
    window.alert("Sorry, try again.");
  }
}

function flipCard() {
  const cardId = this.getAttribute('data-id');
  console.log(cards[cardId].cardImage);
  console.log(cards[cardId].suit);
  console.log("User flipped " + cards[cardId].rank);
  cardsInPlay.push(cards[cardId].rank);
  this.setAttribute('src', cards[cardId].cardImage);
  if (cardsInPlay.length === 2) {
    checkForMatch();
  }
};

function createBoard() {
  for (let i = 0; i < cards.length; i++) {
    const cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
    document.getElementById('game-board').appendChild(cardElement);
  }
};

function reset() {
  const images = document.getElementsByTagName('img');
  for (let i = 0; i < images.length; i++) {
    images[i].setAttribute('src', 'images/back.png');
  }
};

document.getElementById('button').addEventListener('click', reset);


createBoard();
