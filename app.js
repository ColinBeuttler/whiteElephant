const discEl = document.querySelector(".dicsdisplay");
const playerEl = document.querySelector(".boxclass");

const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const btnSubmitPlayer = document.querySelector(".btn--playerSub");

class App {
  playerObj = [];
  currentPlayer = playerObj[0];

  constructor(playerName, discObj) {
    this.playerName = player;
    this.discObj = disc;
  }

  displayPlayer() {
    playerObj.push(Json.stringify(this.player, this.disc));
  }

  renderPlayer() {
    let html = `<div class="boxclass">
    <h1>${this.player}</h1>
    <div class="playerDisc">
    <p>${this.disc}</p>
    </div>
  </div>`;
  }
}
