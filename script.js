"use strict";
// get needed imports
import { Disc } from "./discObj.js";

// Html dom consts
const btnRoll = document.querySelector(".btn--roll");
// const btnHold = document.querySelector(".btn--hold");
const btnNew = document.querySelector(".btn--new");
const swapDiscEl = document.querySelector(".btn--swap");
// const select = document.getElementById("selector");

// non-const html collections
let discEl = document.querySelectorAll(".playerDisc");
let playerEl = document.querySelectorAll(".boxclass");

// determines current player and disc turns
let currentIndex = 0;
let currentplayer = playerEl[currentIndex];
// let currentDisc = discEl[currentIndex];

// const players = [];

let discs = [
  {
    mold: "Trespass",
    plastic: "Lucid",
    weight: "169g",
    color: "Yellow",
  },
  {
    mold: "Ballista",
    plastic: "Opto",
    weight: "169g",
    color: "Red",
  },
  {
    mold: "Sheriff",
    plastic: "Lucid",
    weight: "171g",
    color: "Pearl",
  },
  {
    mold: "Ballista",
    plastic: "Gold",
    weight: "176g",
    color: "White",
  },
  {
    mold: "Explorer",
    plastic: "Opto",
    weight: "173g",
    color: "Blue",
  },
  {
    mold: "Diamond",
    plastic: "Opto",
    weight: "156g",
    color: "Yellow",
  },
  {
    mold: "Fuse",
    plastic: "Opto",
    weight: "173g",
    color: "Yellow",
  },
  {
    mold: "Compass",
    plastic: "Opto",
    weight: "177g",
    color: "Teal",
  },
  {
    mold: "Pirate",
    plastic: "base",
    weight: "unknown",
    color: "White",
  },
  {
    mold: "Crown",
    plastic: "Orgio Burst",
    weight: "174",
    color: "Grey",
  },
];

class GameApp {
  discObj = [];
  playersObj = [];
  constructor() {
    // console.log(playerEl.length);
    // find current players and discs
    this._getLocalStorage();

    // add CSS to currentplayer
    this._currentplayerFunc();

    // Set up button calls
    btnRoll.addEventListener("click", this._discSort.bind(this));

    // btnHold.addEventListener("click", this._discSelect.bind(this));

    btnNew.addEventListener("click", this._clearGame.bind(this));

    swapDiscEl.addEventListener("click", this._initiateSwap.bind(this));
  }

  // Button Functions
  _discSort() {
    discs.sort(() => Math.random() - 0.5);

    this._renderDisc(discs[0]);

    // document.querySelector(".discdisplay").innerHTML = JSON.stringify(discs[0]);
  }

  _renderDisc(discs) {
    let html = `<div class="discObj" value="${discs.mold}, ${discs.plastic}, ${discs.color}, ${discs.weight}">
    <p class="discMold">${discs.mold}</p>
    <p class="discPlastic">${discs.plastic}</p>
    <p class="discColor">${discs.color}</p>
    <p class="discWeight">${discs.weight}</p>
  </div>`;

    // checks if disc object is child
    if (currentplayer.childNodes.length >= 6) {
      this._replaceFromHtml();
    }
    // console.log(html);

    // display to currentplayer html
    currentplayer.insertAdjacentHTML("beforeend", html);
    this._createOption();
    this._discSelect();

    // document.getElementsByClassName("playerDisc").innerHTML = html;
  }

  _createOption() {
    const select = document.getElementById("selector");
    let children = select.childNodes;
    let moldEl =
      document.getElementsByClassName("discMold")[currentIndex].innerHTML;
    let plasticEl =
      document.getElementsByClassName("discPlastic")[currentIndex].innerHTML;
    let colorEl =
      document.getElementsByClassName("discColor")[currentIndex].innerHTML;
    let weightEl =
      document.getElementsByClassName("discWeight")[currentIndex].innerHTML;

    console.log(children);

    let opt = [moldEl, plasticEl, colorEl, weightEl];
    let el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    select.add(el);
  }

  _replaceFromHtml() {
    // Get values from html for discs
    let selectOpt = document.getElementById("selector");
    let htmlDisc;
    let moldEl =
      document.getElementsByClassName("discMold")[currentIndex].innerHTML;
    let plasticEl =
      document.getElementsByClassName("discPlastic")[currentIndex].innerHTML;
    let colorEl =
      document.getElementsByClassName("discColor")[currentIndex].innerHTML;
    let weightEl =
      document.getElementsByClassName("discWeight")[currentIndex].innerHTML;

    // Use Html to create and push discs back to array
    htmlDisc = new Disc(moldEl, plasticEl, colorEl, weightEl);
    // console.log(htmlDisc);
    discs.push(htmlDisc);

    // deletes old disc html

    document.getElementsByClassName("discObj")[currentIndex].remove();

    // deletes old disc option from select dropdown
    for (let i = 0; i <= selectOpt.length; i++) {
      if ((selectOpt[i].value == moldEl, plasticEl, colorEl, weightEl)) {
        selectOpt.remove(i);
        return;
      }
    }
  }

  _discSelect() {
    // cut current roll from array
    discs.splice(0, 1);
    console.log(discs);
    this._switchPlayers();
  }

  // Methods for swaping
  _initiateSwap() {
    let select = document.getElementById("selector");
    let discHtml = document.getElementsByClassName("discObj");
    // console.log("swap disc");

    !select[currentIndex]
      ? alert("Cannot Swap Nothing")
      : console.log(select.value);

    for (let i = 0; i < discHtml.length; i++) {
      if (discHtml[i].value == select.value) {
        console.log(discHtml[i].value);
        return;
      }
    }

    // Element.parentNode.insertBefore(elem, elem.parentNode.firstChild);
  }

  _swapHtml() {
    console.log("swap initiated");
    this._switchPlayers();
  }

  _switchPlayers() {
    playerEl = document.querySelectorAll(".boxclass");
    currentplayer.classList.remove("currentPlayer");
    currentIndex < playerEl.length - 1 ? currentIndex++ : (currentIndex = 0);
    currentplayer = playerEl[currentIndex];
    // console.log(currentplayer);
    this._currentplayerFunc(currentplayer);
  }

  _clearGame() {
    localStorage.clear();
    location.reload();
    console.log(localStorage);
  }

  // turn into method handled by confirm listener
  _currentplayerFunc() {
    currentplayer.classList.add("currentPlayer");
  }

  _getLocalStorage() {
    const discsArr = JSON.parse(localStorage.getItem("discs"));
    const playersArr = JSON.parse(localStorage.getItem("players"));
    const data = JSON.parse(localStorage.getItem("discObjs"));

    if (!discsArr || !playersArr || !data) return;

    this.playersObj = playersArr;

    console.log(this.playersArr);

    // this.discs.forEach((disc) => {
    //   this._renderDisc(disc);
    // });
  }
}

const game = new GameApp();

export { currentplayer, currentIndex };
