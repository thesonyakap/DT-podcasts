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
// script.js
document.addEventListener('DOMContentLoaded', function () {
	var dropdownLinks = document.querySelectorAll('.dropdown-content a')

	dropdownLinks.forEach(function (link) {
		link.addEventListener('click', function (event) {
			event.preventDefault()
			var filter = event.target.getAttribute('data-filter')
			if (filter === 'newest') {
				sortVideos('newest')
			} else if (filter === 'oldest') {
				sortVideos('oldest')
			} else {
				filterContent(filter)
			}
		})
	})

	function filterContent(filter) {
		var contentItems = document.querySelectorAll('.content-item')

		contentItems.forEach(function (item) {
			if (item.getAttribute('data-category') === filter) {
				item.style.display = 'block'
			} else {
				item.style.display = 'none'
			}
		})
	}

	function sortVideos(order) {
		var videoHolder = document.querySelector('.video-holder')
		var videoItems = Array.from(document.querySelectorAll('.video-item'))

		videoItems.sort(function (a, b) {
			var dateA = parseDate(a.getAttribute('data-date'))
			var dateB = parseDate(b.getAttribute('data-date'))
			if (order === 'newest') {
				return dateB - dateA
			} else {
				return dateA - dateB
			}
		})

		// Очистить текущие элементы и добавить отсортированные
		videoHolder.innerHTML = ''
		videoItems.forEach(function (item) {
			videoHolder.appendChild(item)
		})
	}

	function parseDate(dateString) {
		var parts = dateString.split('.')
		return new Date(parts[2], parts[1] - 1, parts[0]) // Год, месяц (0-11), день
	}

	dropdownLinks.forEach(function (link) {
		var dropdownLinks = document.querySelectorAll('.dropdown-content a')
		link.addEventListener('click', function (event) {
			event.preventDefault()
			var filter = event.target.getAttribute('data-filter')
			filterContent(filter)
		})
	})

	function filterContent(filter) {
		var videoItems = document.querySelectorAll('.video-item')

		videoItems.forEach(function (item) {
			if (item.getAttribute('data-position') === filter) {
				item.style.display = 'block'
			} else {
				item.style.display = 'none'
			}
		})
	}
})

// script.js
document.addEventListener('DOMContentLoaded', function () {
	const videoItems = document.querySelectorAll('.video-item')
	const dropdownLinks = document.querySelectorAll('.dropdown-content a')

	dropdownLinks.forEach(link => {
		link.addEventListener('click', function (event) {
			event.preventDefault()
			const filter = link.dataset.filter
			const parentDropdown = link.closest('.dropdown')
			const sortType = parentDropdown.querySelector('button').dataset.sort

			filterVideos(sortType, filter)
		})
	})

	function filterVideos(sortType, filter) {
		videoItems.forEach(item => {
			item.style.display = 'none'

			if (sortType === 'Дата добавления') {
				filterByDate(item, filter)
			} else {
				filterByAttribute(item, `data-${sortType.toLowerCase()}`, filter)
			}
		})
	}

	function filterByAttribute(item, attribute, value) {
		const attrValues = item.getAttribute(attribute).split(',')
		if (attrValues.includes(value)) {
			item.style.display = 'block'
		}
	}

	function filterByDate(item, filter) {
		item.style.display = 'block'
		// Implement sorting logic if needed
	}
})()
