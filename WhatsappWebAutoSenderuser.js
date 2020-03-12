// ==UserScript==
// @name        Whatsapp Web Auto Sender
// @namespace   iN4sser
// @match       http*://web.whatsapp.com/*
// @grant       none
// @version     1.0
// @author      iN4sser
// @updateURL 
// @description 3/12/2020, 12:29:32 PM
// ==/UserScript==
window.onload=function(){

  setInterval(autoClick,100);

}
function autoClick(){   
  document.getElementsByClassName('_3M-N-')[0].click();
}
