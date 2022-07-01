const burgerBtn = document.querySelector('.burger-box__bars')
const mobileMenu = document.querySelector('.header__menu')
const hamburgerIcon = document.querySelector('.burger-box__bars-btn-hamburger')
const exitIcon = document.querySelector('.burger-box__bars-btn-exit')
const allMenuLinks = document.querySelectorAll('.header__menu-link')

const handleMenu = () => {
	mobileMenu.classList.toggle('header__menu--active')

	if (hamburgerIcon.classList.contains('active')) {
		hamburgerIcon.classList.toggle('active')
		hamburgerIcon.classList.toggle('hidden')
		exitIcon.classList.toggle('hidden')
		exitIcon.classList.toggle('active')
	} else if (exitIcon.classList.contains('active')) {
		exitIcon.classList.toggle('active')
		exitIcon.classList.toggle('hidden')
		hamburgerIcon.classList.toggle('active')
		hamburgerIcon.classList.toggle('hidden')
	}

	allMenuLinks.forEach(link => {
		link.addEventListener('click', () => {
			mobileMenu.classList.remove('header__menu--active')
			exitIcon.classList.add('hidden')
			exitIcon.classList.remove('active')

			hamburgerIcon.classList.remove('hidden')
			hamburgerIcon.classList.add('active')
		})
	})

	handleLinksAnimation()
}

const handleLinksAnimation = () => {
	let delayTime = 0

	allMenuLinks.forEach(link => {
		link.classList.toggle('links-animation')
		link.style.animationDelay = `.${delayTime}s`
		delayTime++
		link.addEventListener('click', deleteLinksAnimation)
	})
}

const deleteLinksAnimation = () => {
	allMenuLinks.forEach(link => {
		link.classList.remove('links-animation')
	})
}

burgerBtn.addEventListener('click', handleMenu)
