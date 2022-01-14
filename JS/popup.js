import {currentIndex} from "./gameScript.js"

// Html elements
const popUpEl = document.querySelector(".popUpBack")
const gameStartEl = document.querySelector('.btn--startGame')

// console.log(document.querySelector('.popUpWin'))

class Popup{
  constructor(){
    this._getPopup()

    gameStartEl.addEventListener('click', this._startGame.bind(this))


  }
  _getPopup(){
    popUpEl.style.display = 'inline-block'

  }

  _startGame(){
    popUpEl.style.display = "none";
    this._currentplayerFunc()
  }

  _currentplayerFunc() {
    let currentplayer = document.getElementsByClassName('boxclass')[0]
    currentplayer.classList.add("currentPlayer");
  }

}

const PopUpWindow = new Popup();
