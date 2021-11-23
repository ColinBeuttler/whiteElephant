// import { currentplayer } from "./script.js";

const discEl = document.querySelector(".playerDisc");
let swapDiscEl = document.querySelectorAll(".btn--swap");

class SwapRound {
  constructor() {
    // find current players and discs
    this._getLocalStorage();
    // Button iniates for swaping discs

    swapDiscEl.forEach((ele) => {
      ele.addEventListener("click", this._swapDisc.bind(this));
    });

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
