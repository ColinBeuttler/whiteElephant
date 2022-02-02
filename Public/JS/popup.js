import {currentIndex} from "./gameScript.js"

// Html elements
const popUpEl = document.querySelector(".popUpBack")
const gameStartEl = document.querySelector('.btn--startGame')
// btns needed to swap form baxes
const swapDiscForm = document.querySelector('.disc--formswap')
const swapGiftForm = document.querySelector('.gift--formswap')
// divs that change CSS on form swap
const newGiftEl = document.querySelector('.newGift')
const newDiscEl = document.querySelector('.newDisc')
const discListEl = document.querySelector('.discList')
const giftListEl = document.querySelector('.giftList')
// lists that display added game data
const playerTextBox = document.querySelector('.playerText')
const discTextBox = document.querySelector('.discText')
const giftTextBox = document.querySelector('.giftText')

// console.log(document.querySelector('.popUpWin'))

class Popup{
  constructor(){
    this._getPopup()

    this._getLocalStorage()

    gameStartEl.addEventListener('click', this._startGame.bind(this))

    swapDiscForm.addEventListener('click', this._swapToGifts.bind(this))

    swapGiftForm.addEventListener('click', this._swapToDiscs.bind(this))


  }
  _getPopup(){
    popUpEl.style.display = 'inline-block'

  }

  _swapToGifts(){
    newDiscEl.style.display = 'none'
    discListEl.style.display = 'none'
    newGiftEl.style.display = 'inline-block'
    giftListEl.style.display = 'inline-block'
    
  }

  _swapToDiscs(){
    newGiftEl.style.display = 'none'
    giftListEl.style.display = 'none'
    newDiscEl.style.display = 'inline-block'
    discListEl.style.display = 'inline-block'
    
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
 
  _getLocalStorage(){
    let playersArr = JSON.parse(localStorage.getItem("players"))
    let discsArr = JSON.parse(localStorage.getItem("discs"))
    let giftsArr = JSON.parse(localStorage.getItem("gifts"))

    let playersArrText = playersArr[0].name
    console.log(playersArrText)
    // if(!players || !discs || !gifts) return 
    playerTextBox.insertAdjacentHTML("beforeend", playersArrText);
    // discTextBox.insertAdjacentHTML("beforeend", html);
    // giftTextBox.insertAdjacentHTML("beforeend", html);

    console.log(playersArr, discsArr, giftsArr)
  }

}

const PopUpWindow = new Popup();
