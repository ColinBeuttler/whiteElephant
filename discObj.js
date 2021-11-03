// Create new Disc Form elements
const moldEl = document.querySelector(".input--mold");
const plasticEl = document.querySelector(".input--plastic");
const colorEl = document.querySelector(".input--color");
const weightEl = document.querySelector(".input--weight");

//Submit button element
const submitNewDisc = document.querySelector(".btn--discSub");

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
    // Button Submit Call
    submitNewDisc.addEventListener("click", this._createDisc);
  }
  // Button Function

  _createDisc() {
    let mold = moldEl.value;
    let plastic = plasticEl.value;
    let color = colorEl.value;
    let weight = weightEl.value;
    let discObjs = [];
    let disc;

    disc = new Disc(mold, plastic, color, weight);
    console.log(disc);
    discObjs.push(disc);
    console.log(discObjs);
  }
}

const DiscGame = new DiscApp();

export default DiscGame;
