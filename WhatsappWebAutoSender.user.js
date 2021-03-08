// ==UserScript==
// @name        Whatsapp Web Auto Sender
// @namespace   https://www.in4sser.com
// @match       *://web.whatsapp.com/*
// @grant       window.close
// @version     1.4
// @author      iN4sser
// @updateURL   https://github.com/iN4sser/Whatsapp-Web-Auto-Sender/raw/master/WhatsappWebAutoSender.user.js
// @downloadURL https://github.com/iN4sser/Whatsapp-Web-Auto-Sender/raw/master/WhatsappWebAutoSender.user.js
// @description 3/12/2020, 12:29:32 PM
// ==/UserScript==
window.onload=function(){

  setInterval(autoClick,100);

}
function autoClick(){   
  document.getElementsByClassName('_1E0Oz')[0].click();
  setTimeout(window.close,5000);
}
