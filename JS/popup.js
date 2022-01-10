
class Popup{
  constructor(){
    this._getPopup()

    
  }
  _getPopup(){
    let popupHtml =`
<div class='popupWin'>
  <div class="newPlayer">
  <form class="newPlayerForm">
    <input type="text" placeholder="New Player Name" class="form__input form__input--playerName"/>
    <input type="button" value="Add New Player" class="btn btn--playerSub"></input>
  </form>
  </div>

  <div class="newDisc">
  <form class="newDiscForm">
    <input type="text" placeholder="Disc Mold" class="input--mold" id="discInput" />
    <input type="text" placeholder="Disc Plastic" class="input--plastic" id="discInput"/>
    <input type="text" placeholder="Disc Color" class="input--color" id="discInput"/>
    <input type="text" placeholder="Disc Weight" class="input--weight" id="discInput"/>
    <input type="button" value="Add Disc" class="btn btn--discSub"></input>
  </form>
  </div>

  <form>
  <input type="button" value="Start Game" class="btn btn--gameStart"></input>
  </form>

</div>`

body.insertAdjacentHTML("afterbegin", popupHtml);

  }


}


