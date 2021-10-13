import Player from "./players";
import Disc from "./discObj";

const discEl = document.querySelector(".dicsdisplay");
const playerEl = document.querySelector(".boxclass");

const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const btnPlayerForm = document.querySelector(".newPlayerForm");

class App {
  playerObj = [];
  currentPlayer = playerObj[0];

  constructor() {
    btnRoll.addEventListener("click", this._discSort);

    btnHold.addEventListener("click", this._discSelect);

    btnPlayerForm.addEventListener("submit", this._renderPlayer);
  }

  _createPlayer(e) {
    e.preventDefault();
    let player;

    if (!validInput) return alert("Enter valid Input");

    player = new Player(name, disc);
  }

  _renderPlayer(playerObj) {
    let html = `<div class="boxclass">
    <h1>${this.player}</h1>
    <div class="playerDisc">
    <p>${this.disc}</p>
    </div>
  </div>`;
  }

  _displayPlayer() {
    playerObj.push(Json.stringify(this.player, this.disc));
  }

  _switchPlayers() {
    let playerIndex = 0;
    if (currentPlayer < players.length) {
      currentPlayer = players[playerIndex]++;
    } else {
      currentPlayer = player[0];
    }
  }
}

const playerApp = new App();

export default App;
