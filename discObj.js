// Create new Disc Form elements
const moldEl = document.querySelector(".input--mold").value;
const plasticEl = document.querySelector(".input--plastic").value;
const colorEl = document.querySelector(".input--color").value;
const weightEl = document.querySelector(".input--weight").value;

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

// Button Submit Call
submitNewDisc.addEventListener("click", createDisc);

// Button Function

function createDisc(moldEl, plasticEl, colorEl, weightEl) {
  let discObjs = [];
  let disc;

  disc = new Disc(moldEl, plasticEl, colorEl, weightEl);
  console.log(disc);
  discObjs.push(disc);
  console.log(discObjs);
}

export default Disc;
