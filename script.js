"use strict";

const discEl = document.querySelector(".dicsdisplay");
const playerEl = document.querySelector(".boxclass");

const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const btnNew = document.querySelector(".btn--new");

const players = ["Colin", "Gabe", "Dad"];

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

class GameApp {
  discObj = [];
  constructor() {
    // find current players and discs
    // this._getLocalStorage();

    // Set up button calls
    btnRoll.addEventListener("click", this._discSort.bind(this));

    btnHold.addEventListener("click", this._discSelect.bind(this));

    btnNew.addEventListener("click", this.clearGame.bind(this));
  }

  // Button Functions
  _discSort() {
    discs.sort(() => Math.random() - 0.5);
    btnHold.clicked = false;
    console.log(discs[0]);
    this._renderDisc(discs[0]);

    // document.querySelector(".discdisplay").innerHTML = JSON.stringify(discs[0]);
  }

  _renderDisc(discs) {
    let html = `<div class="discObj">
    <p class="discMold">${discs.Mold}</p>
    <p class="discPlastic">${discs.Plastic}</p>
    <p class="discColor">${discs.Color}</p>
    <p class="discWeight">${discs.Weight}</p>
  </div>`;
    document.querySelector(".playerDisc").innerHTML = html;
    // discEl.insertAdjacentHTML("afterbegin ", html);
  }

  _discSelect() {
    btnHold.clicked = true;
    // cut current roll from array
    discs.splice(0, 1);
    console.log(discs);
  }

  _switchPlayers() {
    let currentPlayer = playerObj[0];

    if (currentPlayer < players.length) {
      currentPlayer = players[playerIndex]++;
    } else {
      currentPlayer = player[0];
    }
  }
}

// const select = document.createElement('select');
// select.innerHTML = discs.map(fucntion(arr){

const game = new GameApp();
