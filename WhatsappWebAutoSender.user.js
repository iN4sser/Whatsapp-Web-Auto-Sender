// ==UserScript==
// @name        Whatsapp Web Auto Sender
// @namespace   https://www.in4sser.com
// @match       *://web.whatsapp.com/*
// @grant       window.close
// @version     1.6
// @author      iN4sser
// @updateURL   https://github.com/iN4sser/Whatsapp-Web-Auto-Sender/raw/master/WhatsappWebAutoSender.user.js
// @downloadURL https://github.com/iN4sser/Whatsapp-Web-Auto-Sender/raw/master/WhatsappWebAutoSender.user.js
// @description 3/12/2020, 12:29:32 PM
// ==/UserScript==
window.onload=function(){

  setInterval(autoClick,100);

}
function autoClick(){   
  document.querySelector("#main > footer > div._2BU3P.tm2tP.copyable-area > div > span:nth-child(2) > div > div._2lMWa > div._3HQNh._1Ae7k > button").click();
  setTimeout(window.close,5000);
}
