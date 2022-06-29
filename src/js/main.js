const burgerBtn = document.querySelector('.burger-box__bars')
const mobileMenu = document.querySelector('.mobile-menu')
const hamburgerIcon = document.querySelector('.burger-box__bars-btn-hamburger')
const exitIcon = document.querySelector('.burger-box__bars-btn-exit')


const handleMenu = () => {
	mobileMenu.style.display="block";
	if(hamburgerIcon.classList.contains('active')){
		hamburgerIcon.classList.toggle('active')
		hamburgerIcon.classList.toggle('hidden')
		exitIcon.classList.toggle('hidden')
		exitIcon.classList.toggle('active')
	} else if(exitIcon.classList.contains('active')){
		exitIcon.classList.toggle('active')
		exitIcon.classList.toggle('hidden')
		hamburgerIcon.classList.toggle('active')
		hamburgerIcon.classList.toggle('hidden')
		mobileMenu.style.display="none";
	}


	
}

burgerBtn.addEventListener('click', handleMenu)