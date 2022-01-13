// Html elements
const popUpEl = document.querySelector(".popUpWin")
const gameStartEl = document.querySelector('.btn--startGame')

// console.log(document.querySelector('.popUpWin'))



class Popup{
  constructor(){
    this._getPopup()

    gameStartEl.addEventListener('click', this._startGame.bind(this))


  }
  _getPopup(){
console.log('Window Load')

  }

  _startGame(){
    console.log(true)
    
    popUpEl.style.display = "none";
  }


}

const PopUpWindow = new Popup();
