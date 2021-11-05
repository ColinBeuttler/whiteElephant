class SwapRound {
  constructor() {
    // find current players and discs
    this._getLocalStorage();
    // Button iniates for swaping discs
    swapDiscEl.addEventListener("click", this._swapDisc.bind(this));
  }

  // Methods for swaping
  _swapDisc() {}

  _switchPlayers() {
    let currentPlayer = playerObj[0];

    if (currentPlayer < players.length) {
      currentPlayer = players[playerIndex]++;
    } else {
      currentPlayer = player[0];
    }
  }

  _getLocalStorage() {
    const data = JSON.parse(localStorage.getItem("discObjs"));

    if (!data) return;
  }
}
