// Create new Disc Form elements
const moldEl = document.querySelector(".input--mold");
const plasticEl = document.querySelector(".input--plastic");
const colorEl = document.querySelector(".input--color");
const weightEl = document.querySelector(".input--weight");

//Submit button element
const submitNewDisc = document.querySelector(".btn--discSub");

// disc array for local storage
let discs = [];

// disc class constructor
class Disc {
  constructor(mold, plastic, color, weight) {
    this.mold = mold;
    this.plastic = plastic;
    this.color = color;
    this.weight = weight;
  }
}

class DiscApp {
  constructor() {
    // Button Call
    submitNewDisc.addEventListener("click", this._createDisc.bind(this));
  }
  // Button Function

  _createDisc() {
    let mold = moldEl.value;
    let plastic = plasticEl.value;
    let color = colorEl.value;
    let weight = weightEl.value;
    let disc;

    if (
      mold.length == 0 ||
      plastic.length == 0 ||
      color.length == 0 ||
      weight.length == 0
    )
      return alert("Cannot Leave Fields Empty");

    disc = new Disc(mold, plastic, color, weight);
    console.log(disc);
    discs.push(disc);
    console.log(discs);
    this._setLocalStorage(discs);
  }
  _setLocalStorage(discs) {
    localStorage.setItem("discs", JSON.stringify(discs));
    console.log(localStorage);
  }
}

const DiscGame = new DiscApp();

export { Disc, DiscGame };
