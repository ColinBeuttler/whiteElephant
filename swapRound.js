class SwapRound {
  constructor() {
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
}
