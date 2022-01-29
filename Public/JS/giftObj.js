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

   _createGift(){
       const giftName = inputGiftEl.value
       const giftValue = inputGiftValue.value

       let gift 

   } 

   _getLocalGifts(){

   }
}