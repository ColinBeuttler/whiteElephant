// import { currentplayer } from "./script.js";
import { currentIndex } from "./script.js";

// const discEl = document.querySelector(".playerDisc");
const swapDiscEl = document.querySelector(".btn--swap");
// const select = document.getElementById("selector");

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
    let optCollection = document.getElementsByClassName("selectorOption");
    console.log("swap disc");
    if (!optCollection[currentIndex]) {
      alert("Cannot Swap Nothing");
    } else {
      console.log(optCollection[currentIndex]);
    }

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
