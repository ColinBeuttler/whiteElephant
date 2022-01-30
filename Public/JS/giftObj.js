// gift Form elements for event listeners
const inputGiftEl = document.querySelector(".input--gift");
const btnGiftForm = document.querySelector(".btn--giftSub");
const giftList = document.querySelector(".giftList");
const inputGiftValue = document.querySelector('.input--giftValue')

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
        this._getLocalGifts();

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

    gifts.push(gift)
    console.log(gifts)
    this._setLocalGifts(gifts)

   } 

   _setLocalGifts(gifts){
    localStorage.setItem("gifts", JSON.stringify(gifts));
    console.log(localStorage);
   }

   _getLocalGifts(){

   }

}

const giftApp = new GiftAdd()

export default giftApp