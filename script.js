"use strict";

const discEl = document.querySelector(".dicsdisplay");
const playerEl = document.querySelectorAll(".boxclass");

const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const btnNew = document.querySelector(".btn--new");

// let currentIndex = 0;
// const currentplayer = playerEl[currentIndex];

const players = [];

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
  playersObj = [];
  constructor() {
    // find current players and discs
    this._getLocalStorage();

    // add CSS to currentplayer
    this._currentplayerFunc();

    // Set up button calls
    btnRoll.addEventListener("click", this._discSort.bind(this));

    btnHold.addEventListener("click", this._discSelect.bind(this));

    btnNew.addEventListener("click", this._clearGame.bind(this));
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
    // display to currentplayer html
    currentplayer.insertAdjacentHTML("beforeend", html);
  }

  _discSelect() {
    btnHold.clicked = true;
    // cut current roll from array
    discs.splice(0, 1);
    console.log(discs);
  }

  _switchPlayers(playerEl, playerIndex) {
    // let currentPlayer = playerObj[0];

    if (playerIndex < playerEl.length) {
      playerIndex++;
    } else {
      playerIndex = 0;
    }
  }

  _clearGame() {
    localStorage.clear();
    location.reload();
    console.log(localStorage);
  }

  // turn into method handled by confirm listener
  _currentplayerFunc = () => {
    let currentIndex = 0;
    const currentplayer = playerEl[currentIndex];
    currentplayer.classList.add("currentPlayer");
  };

  _getLocalStorage() {
    const discsArr = JSON.parse(localStorage.getItem("discs"));
    const playersArr = JSON.parse(localStorage.getItem("players"));

    if (!discsArr || !playersArr) return;

    this.playersObj = playersArr;

    console.log(this.playersArr);

    // this.discs.forEach((disc) => {
    //   this._renderDisc(disc);
    // });
  }
}

// const select = document.createElement('select');
// select.innerHTML = discs.map(fucntion(arr){

const game = new GameApp();
