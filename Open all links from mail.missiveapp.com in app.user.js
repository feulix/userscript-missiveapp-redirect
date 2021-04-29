// ==UserScript==
// @name     Open all links from mail.missiveapp.com in app
// @version  1
// @grant    none
// @match       https://mail.missiveapp.com/#*
// @run-at document-end
// ==/UserScript==

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
	window.location = 'missive://mail.missiveapp.com/'+returnTo;
//} 

