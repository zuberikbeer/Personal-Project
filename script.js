"use strict";
const cardArray = [
  {
    name: "AssassinsCreed",
    image: "/assets/AssassinsCreed.png",
    id: 1,
  },
  {
    name: "AssassinsCreed",
    image: "/assets/AssassinsCreed.png",
    id: 2,
  },
  {
    name: "Doom",
    image: "assets/Doom.png",
    id: 3,
  },
  {
    name: "Doom",
    image: "assets/Doom.png",
    id: 4,
  },
  {
    name: "Minecraft.png",
    image: "assets/Minecraft.png",
    id: 5,
  },
  {
    name: "Minecraft.png",
    image: "assets/Minecraft.png",
    id: 6,
  },
  {
    name: "rocket-league",
    image: "/assets/rocket-league.png",
    id: 7,
  },
  {
    name: "rocket-league",
    image: "/assets/rocket-league.png",
    id: 8,
  },
  {
    name: "skyrim",
    image: "/assets/skyrim.png",
    id: 9,
  },
  {
    name: "skyrim",
    image: "/assets/skyrim.png",
    id: 10,
  },
  {
    name: "Stellaris",
    image: "/assets/Stellaris.png",
    id: 11,
  },
  {
    name: "Stellaris",
    image: "/assets/Stellaris.png",
    id: 12,
  },
];
const memoryGame = document.querySelector(".memory-game");

const shuffle = (cardArray) => {
  let m = cardArray.length,
    t,
    i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = cardArray[m];
    cardArray[m] = cardArray[i];
    cardArray[i] = t;
  }
  return cardArray;
};

shuffle(cardArray);
console.log(cardArray);
for (let i = 0; i < cardArray.length; i++) {
  let primaryDiv = document.createElement("div");
  let frontImage = document.createElement("img");
  let backImage = document.createElement("img");

  primaryDiv.classList.add("memory-card");
  frontImage.classList.add("front-face");
  backImage.classList.add("back-face");

  primaryDiv.setAttribute("data-framework", cardArray[i].name);

  backImage.setAttribute("src", "assets/controllers.png");
  frontImage.setAttribute("src", cardArray[i].image);

  primaryDiv.append(frontImage, backImage);
  memoryGame.append(primaryDiv);
}
memoryGame.addEventListener("click", (e) => {
  //console.log(e.target.parentNode.parentNode.parentNode);
  if (e.target.classList.contains("front-face")) {
    e.target.parentNode.parentNode.classList.add("flip");
  }
});

const cards = document.querySelectorAll(".memory-card");

let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard(e) {
  if (e.target.classList.contains("back-face")) {
    e.target.parentNode.classList.add("flip");
  }
  if (!hasFlippedCard) {
    //first click
    hasFlippedCard = true;
    firstCard = e.target.parentNode.getAttribute("data-framework");
    console.log(firstCard);
  } else {
    //second click
    hasFlippedCard = false;
    secondCard = e.target.parentNode.getAttribute("data-framework");

    if (firstCard === secondCard) {
      primaryDiv.remove("flip");
      console.log("it's a match!");
    } else {
      const allCards = document.querySelectorAll(".memory-card");
      allCards.forEach((card) => {
        if (card.classList.contains("flip")) {
          setTimeout(() => {
            card.classList.remove("flip");
          }, 1000);
        }
      });
    }

    //console.log(firstCard.dataset.cardArray[i].name)
    //do cards match?

    //   firstCard.removeEventListener("click", flipCard);
    //   secondCard.removeEventListener("click", flipCard);
    // } else {
    //   firstCard.classList.remove("flip");
    //   secondCard.classList.remove("flip");

    console.log("Function was executed!");
    //console.log({ firstCard, secondCard });

    //console.log({ hasFlippedCard, firstCard });
  }
}

cards.forEach((card) => card.addEventListener("click", flipCard));

//ask how do be set a html attribute data in javascript and how to we change the string of data to match the card.

// in order to remove an event listener you have to add an named function.

//annon fn: exmaple.
//cotton.addEventLItener("click"()=>{

//})

//const functionexample = (e)=>{

//};
//cotton.addEvent Listener("click", fucntionExample)
//to remove
//cotton.removeEventListener("click", fuctionExample)
