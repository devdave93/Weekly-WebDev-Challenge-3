window.addEventListener('scroll', () => {

var pageYPosition = window.pageYOffset;
var nav = document.getElementById('nav');

(pageYPosition > 50)
? nav.classList.add('small-nav')
: nav.classList.remove('small-nav');

});



var button = document.getElementById('navbar-btn');
var	hide_content = document.getElementById('collapse');

button.addEventListener('click', () => {

	button.classList.toggle("open");
	hide_content.classList.toggle("show");

});



