import Player from "./players.js";

const playerEl = document.querySelector(".boxclass");

const inputNameEl = document.querySelector(".form__input--playerName");

const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const btnPlayerForm = document.querySelector(".btn--playerSub");

let playerObj = [];

let currentPlayer = playerObj[0];

// button Calls

btnPlayerForm.addEventListener("click", createPlayer, renderPlayer);

// button Functions
function createPlayer(e, playerObj) {
  const playerName = inputNameEl.value;

  let player;
  e.preventDefault();

  // if (inputNameEl.hasOwnProperty(playerName)) return alert("Enter valid Input");

  player = new Player(playerName);
  console.log(player);

  playerObj.push(player);
  console.log(playerObj);
}

function renderPlayer(playerObj) {
  let html = `<div class="boxclass">
    <h1>${playerObj.player}</h1>
    <div class="playerDisc">
    </div>
  </div>`;
  playerEl.insertAdjacentHTML("afterend", html);
}
