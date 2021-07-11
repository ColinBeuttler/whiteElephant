"use strict";

const discEl = document.querySelector(".dicsdisplay");
const playerEl = document.querySelector(".boxclass");

const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

const partipants = ["Colin", "Gabe", "Dad", "Beth", "Mom", "McKyla"];

let discs = [
  {
    Brand: "Dynamic Discs",
    Mold: "Trespass",
    Plastic: "Lucid",
    Weight: "169g",
    Color: "Yellow",
    Flight: "12 5 -0.5 3",
  },
  {
    Brand: "Latitude 64",
    Mold: "Ballista",
    Plastic: "Opto",
    Weight: "169g",
    Color: "Red",
    Flight: "14 4 0 3",
  },
  {
    Brand: "Dynamic Discs",
    Mold: "Sheriff",
    Plastic: "Lucid",
    Weight: "171g",
    Color: "Pearl",
    Flight: "13 5 -1 2",
  },
  {
    Brand: "Latitude 64",
    Mold: "Ballista",
    Plastic: "Gold",
    Weight: "176g",
    Color: "White",
    Flight: "14 4 0 3",
  },
  {
    Brand: "Latitude 64",
    Mold: "Explorer",
    Plastic: "Opto",
    Weight: "173g",
    Color: "Blue",
    Flight: "7 5 0 2",
  },
  {
    Brand: "Latitude 64",
    Mold: "Diamond",
    Plastic: "Opto",
    Weight: "156g",
    Color: "Yellow",
    Flight: "8 6 -3 1",
  },
  {
    Brand: "Latitude 64",
    Mold: "Fuse",
    Plastic: "Opto",
    Weight: "173g",
    Color: "Yellow",
    Flight: "5 6 -1 0",
  },
  {
    Brand: "Latitude 64",
    Mold: "Compass",
    Plastic: "Opto",
    Weight: "177g",
    Color: "Teal",
    Flight: "5 5 0 1",
  },
  {
    Brand: "Latitude 64",
    Mold: "Pirate",
    Plastic: "base",
    Weight: "unknown",
    Color: "White",
    Flight: "5 6 -2 0",
  },
  {
    Brand: "Westside Discs",
    Mold: "Crown",
    Plastic: "Orgio Burst",
    Weight: "174",
    Color: "Grey",
    Flight: "3 4 0 1",
  },
];

for (let i = 0; i < partipants.length; i++) {
  console.log(partipants[i]);
}

// const switchPlayer = function () {
//   document.getElementById(`current--${activePlayer}`).textContent = 0;
// };
// function shuffle(arr) {
//   let copy = [],
//     n = arr.length,
//     i;

//   while (n) {
//     i = Math.floor(Math.random() * n--);
//     copy.push(arr.splice(i, 1)[0]);
//   }
//   return copy;
// }

btnRoll.addEventListener("click", function () {
  // roll a random disc
  discs.sort(() => Math.random() - 0.5);
  btnHold.clicked = false;
  // display the object to html
  document.querySelector(".discdisplay").innerHTML = JSON.stringify(discs[0]);
});

btnHold.addEventListener("click", function () {
  // add html to active player
  document.querySelector(".currentPlayer").innerHTML = JSON.stringify(discs[0]);
  btnHold.clicked = true;
  // cut current roll from array
  if (btnHold.clicked !== true) {
    discs.splice(0, 1);
    console.log(discs);
  }

  // move to next active player
});
// const select = document.createElement('select');
// select.innerHTML = discs.map(fucntion(arr){

console.log();
