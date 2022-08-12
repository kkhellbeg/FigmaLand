/* Mobile Nav Button */
const navBtn = document.querySelector('#btn_mobile');
const nav = document.querySelector('.nav__list');
const logo = document.querySelector('.nav__logo');
const signup = document.querySelector('.signup')

navBtn.addEventListener('click', function() {
	navBtn.classList.toggle('open');
	nav.style.display = nav.style.display === 'flex' ? '' : 'flex';
	logo.style.display = logo.style.display === 'none' ? '' : 'none';
	signup.style.display = signup.style.display === 'none' ? '' : 'none';
});
