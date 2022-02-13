// gift Form elements for event listeners
const inputGiftEl = document.querySelector(".input--gift");
const btnGiftForm = document.querySelector(".btn--giftSub");
const inputGiftValue = document.querySelector('.input--giftValue')
const giftsCount = document.querySelector('.giftText')

// Gift objects global variable
let gifts = [];

// new Gift object prototype
class Gift {
  constructor(gift, giftValue) {
    this.gift = gift;
    this.giftValue = giftValue
  }
}

class GiftAdd{
    constructor(){
        // this._getLocalGifts();

        btnGiftForm.addEventListener('click', this._createGift.bind(this))
    }

   _createGift(e){
       const giftName = inputGiftEl.value
       const giftValue = inputGiftValue.value

       let gift 

       e.preventDefault();
       console.log(giftName, giftValue);

    if(giftName.length == 0) return alert("Gift Description Cannot be Empty");
    if(giftValue.length == 0) return alert("Gift Value Cannot be Empty");

    gift = new Gift(giftName, giftValue)

    gifts.push(gift);
    console.log(gifts);
    this._setLocalGifts(gifts);
    this._writeGiftCount();

   } l

   _setLocalGifts(gifts){
    localStorage.setItem("gifts", JSON.stringify(gifts));
    console.log(localStorage);
    // giftText.insertAdjacentHTML('beforeend', html)
   }

   _writeGiftCount(){
    let giftsArr = JSON.parse(localStorage.getItem("gifts"));
    console.log(giftsArr);
    giftsCount.textContent = `${giftsArr.length}`;
  }

}

const giftApp = new GiftAdd()

export default giftApp