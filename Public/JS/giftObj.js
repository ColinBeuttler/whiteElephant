// gift Form elements for event listeners
const inputGiftEl = document.querySelector(".input--gift");
const btnGiftForm = document.querySelector(".btn--giftSub");
const giftList = document.querySelector(".giftList");

// Gift objects global variable
let gifts = [];

// new Gift object prototype
class Gift {
  constructor(gift, giftValue) {
    this.gift = gift;
    this.giftValue = giftValue
  }
}