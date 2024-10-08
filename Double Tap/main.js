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
// document
// 	.querySelector('.position-button')
// 	.addEventListener('click', function () {
// 		const mng = document.querySelector('.manager')
// 		const videos = document.querySelectorAll('.video-item')
// 		let videoHolder = document.querySelector('.video-holder')
// 		if (videos == 'data-positon="Топ-менеджер"') {
// 			videos.classList.add('visible')
// 		} else {
// 			videos.classList.add('.hidden')
// 		}
// 		console.log('videos')
// 	})

document.addEventListener('DOMContentLoaded', function () {
	// Находим все элементы <li> внутри .position-button .position2
	var managerItem = document.querySelector('.position-button .manager')
	var headOfITItem = document.querySelector('.position-button .headofit')
	var businessItem = document.querySelector('.position-button .business')

	// Функция для обработки кликов по элементам <li>
	function handleItemClick(event, position) {
		// Останавливаем всплытие события, чтобы клик не применялся к button
		event.stopPropagation()

		// Находим все элементы с классом .video-item
		var videoItems = document.querySelectorAll('.video-item')

		// Скрываем все .video-item
		videoItems.forEach(function (item) {
			item.style.display = 'none'
		})

		// Показываем только те .video-item, у которых data-position совпадает с переданным значением
		videoItems.forEach(function (item) {
			if (item.getAttribute('data-position') === position) {
				item.style.display = 'block'
			}
		})
	}

	// Назначаем обработчики событий для каждого <li>
	if (managerItem) {
		managerItem.addEventListener('click', function (event) {
			handleItemClick(event, 'Топ-менеджер')
		})
	}

	if (headOfITItem) {
		headOfITItem.addEventListener('click', function (event) {
			handleItemClick(event, 'Руководитель в IT')
		})
	}

	if (businessItem) {
		businessItem.addEventListener('click', function (event) {
			handleItemClick(event, 'Свой бизнес в IT')
		})
	}
})
