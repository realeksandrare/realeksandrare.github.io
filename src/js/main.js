const burgerBtn = document.querySelector('.burger-box__bars')
const mobileMenu = document.querySelector('.header__menu')
const hamburgerIcon = document.querySelector('.burger-box__bars-btn-hamburger')
const exitIcon = document.querySelector('.burger-box__bars-btn-exit')
const allMenuLinks = document.querySelectorAll('.header__menu-link')
const currentYear = document.querySelector('.current-year')


const handleMenu = () => {
	mobileMenu.classList.toggle('header__menu--active')

	if (hamburgerIcon.classList.contains('active')) {
		hamburgerIcon.classList.toggle('active')
		hamburgerIcon.classList.toggle('hidden')
		exitIcon.classList.toggle('hidden')
		exitIcon.classList.toggle('active')
		document.body.classList.toggle('body-hidden')
	} else if (exitIcon.classList.contains('active')) {
		exitIcon.classList.toggle('active')
		exitIcon.classList.toggle('hidden')
		hamburgerIcon.classList.toggle('active')
		hamburgerIcon.classList.toggle('hidden')
		document.body.classList.toggle('body-hidden')
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

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	currentYear.innerText = year
}

const API_KEY = 'AIzaSyAF9Q8amBVF05M0WSlbfaazmOZBI8K8b24'
const URL = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=initMap`

function initMap() {
	const park = { lat: 53.473658, lng: 22.657368 }
	// The map, centered at Uluru
	const map = new google.maps.Map(document.querySelector('#map'), {
		zoom: 10,
		center: park,
	})
	// The marker, positioned at Uluru
	const marker = new google.maps.Marker({
		position: park,
		map: map,
	})
}

window.initMap = initMap

handleCurrentYear()
burgerBtn.addEventListener('click', handleMenu)
