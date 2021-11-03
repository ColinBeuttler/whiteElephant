// Player Form elements
const inputNameEl = document.querySelector(".form__input--playerName");
const btnPlayerForm = document.querySelector(".btn--playerSub");
const playerList = document.querySelector(".playerList");

class Player {
  constructor(name) {
    this.name = name;
  }
}

class PlayerAdd {
  constructor() {
    // button Calls
    btnPlayerForm.addEventListener("click", this._createPlayer.bind(this));
  }
  // button Functions
  _createPlayer(e) {
    let playerName = inputNameEl.value;
    let playerObj = [];
    let player;

    e.preventDefault();

    // if (inputNameEl.hasOwnProperty(playerName)) return alert("Enter valid Input");

    player = new Player(playerName);
    console.log(player);

    playerObj.push(player);
    console.log(playerObj);
    this._renderPlayer(player);
  }

  _renderPlayer(Player) {
    let html = `<div class="boxclass">
    <h1>${Player.name}</h1>
    <div class="playerDisc">
    </div>
  </div>`;
    playerList.insertAdjacentHTML("beforeend", html);
  }
}

const PlayerApp = new PlayerAdd();

export default PlayerApp;
