// ==UserScript==
// @name         Lim Sniper
// @namespace    http://example.com
// @version      1.0
// @description  My Tampermonkey script that runs on every page load
// @match        *://*/*
// @run-at       document-idle
// ==/UserScript==

// USE AT YOUR OWN RISK
let page = ("https://www.roblox.com/catalog/13521068163/Rainbow-Glitch-Wings-5-28"); // Page you are going to be sniping on (full HTTP link)
let desiredPrice = 5; // (Items over this amount wont be purchased)
let ToggleName = "Wings";

if (window.location.href == page){
try{
function snipe() {
  console.log("alive");
  let priceHTML = document.querySelector("#item-details > div.price-row-container > div > div > div.price-info.row-content > div.item-price-value.icon-text-wrapper.clearfix.icon-robux-price-container > span.text-robux-lg");
  let button = document.querySelector("#item-details > div.price-row-container > div > div > div.price-info.row-content > div.item-purchase-btns-container > div > button");
  let freeCheck = document.querySelector("#item-details > div.price-row-container > div > div > div.price-info.row-content > div.item-price-value > span");
  let willPurchase = false;
    try{
        if (priceHTML != null && priceHTML.textContent != null && priceHTML.textContent <= desiredPrice) {
            willPurchase = true;
        } else if (priceHTML == null) {

        } else if (priceHTML.textContent > desiredPrice) {

        }
    }
    catch{
        console.log("error");
    }

  if (freeCheck != null && freeCheck.innerHTML.toLowerCase() == "free") {
    willPurchase = true;
  } else if (freeCheck == null) {

  }

  if (willPurchase) {
    button.click();
    function checkReady2() {
      if (document.getElementsByClassName("modal-button btn-primary-md btn-min-width")[0] != null) {
        setTimeout(function() {
          document.getElementsByClassName("modal-button btn-primary-md btn-min-width")[0].click();
          setTimeout(function(){
              window.alert("Item Purchased");
          },5000)
        }, 100);
      } else {
        setTimeout(checkReady2, 100);
      }
    }
    checkReady2();
  }

  if (localStorage.getItem(ToggleName) == "true") {
    location.reload();
  } else {

  }
}

if (localStorage.getItem(ToggleName) == "true") {
  checkReady1();

  function checkReady1() {
    if (document.readyState == "complete" ) {
      setTimeout(snipe, 500);
    } else {
      setTimeout(checkReady1, 100);
    }
  }
} else {
  console.log("Function not started");
}
}
catch{
    console.log("mainerror");
}

}

