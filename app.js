// Player Form elements for event listeners
const inputNameEl = document.querySelector(".form__input--playerName");
const btnPlayerForm = document.querySelector(".btn--playerSub");
const playerList = document.querySelector(".playerList");

// player objects global variable
let players = [];

// new player object prototype
class Player {
  constructor(name) {
    this.name = name;
  }
}

class PlayerAdd {
  constructor() {
    // set local storage with new player objects
    this._getLocalPlayers();
    // button Calls
    btnPlayerForm.addEventListener("click", this._createPlayer.bind(this));
  }
  // button Functions
  _createPlayer(e) {
    const playerName = inputNameEl.value;

    let player;

    e.preventDefault();
    console.log(playerName);

    // fix check for existing player name
    // if (players.includes(playerName)) return alert("Player already exists");

    // check if empty
    if (playerName.length == 0) return alert("Player Name Cannot be Empty");

    // if (inputNameEl.hasOwnProperty(playerName)) return alert("Enter valid Input");

    player = new Player(playerName);

    players.push(player);
    console.log(players);
    this._renderPlayer(player);
    this._setLocalStorage(players);
  }

  _renderPlayer(player) {
    let html = `<div class="boxclass">
    <h1>${player.name}</h1>
    <div id="playerDisc">
    </div>
  </div>`;
    playerList.insertAdjacentHTML("beforeend", html);
  }

  _getLocalPlayers() {
    const playersArr = JSON.parse(localStorage.getItem("players"));
    if (!playersArr) return;

    playersArr.forEach((player) => {
      this._renderPlayer(player);
    });
  }

  _setLocalStorage(players) {
    localStorage.setItem("players", JSON.stringify(players));
    console.log(localStorage);
  }
}

const PlayerApp = new PlayerAdd();

export default PlayerApp;
