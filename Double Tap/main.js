document.querySelector('.menu-btn').addEventListener('click', function () {
	var menu = document.querySelector('.menu')
	var menuOpen = document.querySelector('.menu-open')
	var main = document.querySelector('main')

	menu.classList.remove('visible')
	menuOpen.classList.add('visible')
	main.classList.add('no-scroll')
})

document.querySelector('.btn.btn-open').addEventListener('click', function () {
	var menu = document.querySelector('.menu')
	var menuOpen = document.querySelector('.menu-open')
	var main = document.querySelector('main')

	menuOpen.classList.remove('visible')
	menu.classList.add('visible')
	main.classList.remove('no-scroll')
})

document.addEventListener('DOMContentLoaded', function () {
	let currentIndex = 0
	const itemsPerLoad = 6
	const videoItems = document.querySelectorAll('.video-item')
	const loadButton = document.querySelector('.button-load')

	function showNextItems() {
		const nextIndex = currentIndex + itemsPerLoad
		for (let i = currentIndex; i < nextIndex && i < videoItems.length; i++) {
			videoItems[i].classList.add('visible')
		}
		currentIndex = nextIndex
		if (currentIndex >= videoItems.length) {
			loadButton.style.display = 'none'
		}
	}

	loadButton.addEventListener('click', showNextItems)

	showNextItems()
})

document.addEventListener('scroll', function () {
	const menu = document.querySelector('.menu')
	if (window.scrollY > 50) {
		menu.classList.add('hidden')
	} else {
		menu.classList.remove('hidden')
	}
})

document.querySelector('.btn').addEventListener('click', function () {
	document.querySelector('.overflow').classList.add('overflow-hidden')
})

document.querySelector('.btn.btn-open').addEventListener('click', function () {
	document.querySelector('.overflow').classList.remove('overflow-hidden')
})

document.addEventListener('DOMContentLoaded', function () {
	const menu = document.querySelector('.menu')
	if (window.scrollY > 50) {
		menu.classList.remove('visible')
	} else {
		menu.classList.add('visible')
	}
})

/* сортировка */
document
	.querySelector('.filter .founder')
	.addEventListener('click', function () {
		const videoHolder = document.querySelector('.video-holder')
		const videoItems = Array.from(document.querySelectorAll('.video-item'))
		const filteredItems = videoItems.filter(item =>
			item.querySelector(
				'a[data-position="Свой бизнес в IT"], a[data-position="Создание своего бизнеса IT"]'
			)
		)

		const newHolder = document.createElement('div')
		newHolder.className = 'video-holder'

		filteredItems.forEach(item => newHolder.appendChild(item))

		videoHolder.parentNode.replaceChild(newHolder, videoHolder)
	})
