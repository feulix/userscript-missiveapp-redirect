// ==UserScript==
// @name     	Open all links from mail.missiveapp.com in app
// @version  	1.21
// @grant    	window.close
// @updateURL	https://github.com/feulix/userscript-missiveapp-redirect/raw/main/Open%20all%20links%20from%20mail.missiveapp.com%20in%20app.user.js
// @downloadURL	https://github.com/feulix/userscript-missiveapp-redirect/raw/main/Open%20all%20links%20from%20mail.missiveapp.com%20in%20app.user.js
// @require        https://raw.github.com/odyniec/MonkeyConfig/master/monkeyconfig.js
// @include     https://mail.missiveapp.com/#*
// @run-at 	document-end
// ==/UserScript==

//Amount of seconds to wait for user input when redirecting
var close_timeout = 4;

console.log('window.location.href', window.location.href);
console.log('document.location.hash', document.location.hash);
function getParameterByName(name, url = window.location.href) {
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

var returnTo = getParameterByName('returnTo');
if (returnTo == null) {
	returnTo = document.location.hash
}

console.log('returnTo','missive://mail.missiveapp.com/'+returnTo);

//alert('Greasemonkey script is redirecting you...');
//if (confirm("Allow Greasemonkey script to redirect you to app?")) {
window.location = 'missive://mail.missiveapp.com/'+returnTo

var timeleft = close_timeout;
var downloadTimer = setInterval(function(){
    if(timeleft <= 0){
        clearInterval(downloadTimer);
    }
    document.body.innerHTML = "Closing window in " + timeleft + " seconds...";
    if(timeleft == 0) {
        window.close();
    }
    timeleft -= 1;
}, 1000);

//} 


