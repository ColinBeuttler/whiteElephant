import {currentIndex} from "./gameScript.js"

// Html elements
const popUpEl = document.querySelector(".popUpBack")
const gameStartEl = document.querySelector('.btn--startGame')
const swapDiscForm = document.querySelector('.disc--formswap')
const swapGiftForm = document.querySelector('.gift--formswap')
const newGiftEl = document.querySelector('.newGift')
const newDiscEl = document.querySelector('.newDisc')

// console.log(document.querySelector('.popUpWin'))

class Popup{
  constructor(){
    this._getPopup()

    gameStartEl.addEventListener('click', this._startGame.bind(this))

    swapDiscForm.addEventListener('click', this._swapToGifts.bind(this))

    swapGiftForm.addEventListener('click', this._swapToDiscs.bind(this))


  }
  _getPopup(){
    popUpEl.style.display = 'inline-block'

  }

  _swapToGifts(){
    newDiscEl.style.display = 'none'
    newGiftEl.style.display = 'inline-block'
    
  }

  _swapToDiscs(){
    newGiftEl.style.display = 'none'
    newDiscEl.style.display = 'inline-block'
    
  }

  _startGame(){
    let playersList = JSON.parse(localStorage.getItem("players"));
    console.log(playersList.length)
    if (!playersList){
      alert('Enter First Player')
      return
    }
    if(playersList.length == 1){
      alert('Need another player')
      return
    }
    popUpEl.style.display = "none";
    this._currentplayerFunc()
  }

  _currentplayerFunc() {
    let currentplayer = document.getElementsByClassName('boxclass')[0]
    currentplayer.classList.add("currentPlayer");
  }

}

const PopUpWindow = new Popup();
