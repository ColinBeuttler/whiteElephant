const swapDiscEl = document.querySelector(".btn--swap");

class SwapRound {
  constructor() {
    // find current players and discs
    this._getLocalStorage();
    // Button iniates for swaping discs
    swapDiscEl.addEventListener("click", this._swapDisc.bind(this));
  }

  // Methods for swaping
  _swapDisc() {
    console.log("yes working");
  }

  _getLocalStorage() {
    const data = JSON.parse(localStorage.getItem("discObjs"));

    if (!data) return;
  }
}

const swapRound = new SwapRound();

export default swapRound;
