class SwapRound {
  constructor() {
    // Button iniates for swaping discs
  }

  // Methods for swaping
  _swapDisc() {}

  __switchPlayers() {
    let currentPlayer = playerObj[0];

    if (currentPlayer < players.length) {
      currentPlayer = players[playerIndex]++;
    } else {
      currentPlayer = player[0];
    }
  }
}
