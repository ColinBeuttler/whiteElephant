import Player from "./players.js";

// Player Form elements
const playerEl = document.querySelector(".boxclass");
const inputNameEl = document.querySelector(".form__input--playerName");
const btnPlayerForm = document.querySelector(".btn--playerSub");

// button Calls
btnPlayerForm.addEventListener("click", createPlayer, renderPlayer);

// button Functions
function createPlayer(e) {
  let playerName = inputNameEl.value;
  let playerObj = [];

  let currentPlayer = playerObj[0];
  let player;

  e.preventDefault();

  // if (inputNameEl.hasOwnProperty(playerName)) return alert("Enter valid Input");

  player = new Player(playerName);
  console.log(player);

  playerObj.push(player);
  console.log(playerObj);
  return playerObj;
}

function renderPlayer(playerObj) {
  let html = `<div class="boxclass">
    <h1>${playerObj.player}</h1>
    <div class="playerDisc">
    </div>
  </div>`;
  playerEl.insertAdjacentHTML("afterend", html);
}
