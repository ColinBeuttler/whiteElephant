// import { currentplayer } from "./script.js";

// const discEl = document.querySelector(".playerDisc");
const swapDiscEl = document.querySelector(".btn--swap");
// const select = document.getElementById("selector");

// let discOptions = document.getElementsByClassName("discObj");

// for (let i = 0; i < discOptions.length; i++) {
//   let opt = discOptions[i];
//   let el = document.createElement("option");
//   el.textContent = opt;
//   el.value = opt;
//   select.add(el);
// }

class SwapRound {
  constructor() {
    // find current players and discs
    this._getLocalStorage();
    // Button iniates for swaping discs

    swapDiscEl.addEventListener("click", this._swapDisc.bind(this));

    // discEl.addEventListener("click", this._initiateClick.bind(this));
  }

  // Methods for swaping
  _swapDisc() {
    console.log("swap disc");
    // Element.parentNode.insertBefore(elem, elem.parentNode.firstChild);
  }

  _initiateClick() {
    console.log("swap initiated");
  }

  _getLocalStorage() {
    const data = JSON.parse(localStorage.getItem("discObjs"));

    if (!data) return;
  }
}

const swapRound = new SwapRound();

export default swapRound;
