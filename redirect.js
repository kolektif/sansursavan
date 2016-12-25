var urlParams = new URLSearchParams(window.location.search);
var newUrl = urlParams.get('newUrl');
var oldUrl = urlParams.get('oldUrl');
document.querySelector('#oldUrl').innerText = oldUrl;
document.querySelector('#newUrl').href = newUrl;
document.querySelector('#newUrl').innerText = newUrl;
