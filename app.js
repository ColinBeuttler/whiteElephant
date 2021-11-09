// Player Form elements to use ffor event listeners
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
    // this._setLocalStorage();

    // button Calls
    btnPlayerForm.addEventListener("click", this._createPlayer.bind(this));
  }
  // button Functions
  _createPlayer(e) {
    let playerName = inputNameEl.value;
    let player;

    e.preventDefault();

    // if (inputNameEl.hasOwnProperty(playerName)) return alert("Enter valid Input");

    player = new Player(playerName);
    console.log(player);

    players.push(player);
    console.log(players);
    this._renderPlayer(player);
    this._setLocalStorage(players);
  }

  _renderPlayer(Player) {
    let html = `<div class="boxclass">
    <h1>${Player.name}</h1>
    <div class="playerDisc">
    </div>
  </div>`;
    playerList.insertAdjacentHTML("beforeend", html);
  }

  _setLocalStorage(players) {
    localStorage.setItem("players", JSON.stringify(players));
    console.log(localStorage);
  }
}

const PlayerApp = new PlayerAdd();

export default PlayerApp;
