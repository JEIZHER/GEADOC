const Observer = () => {
	let activeStyle = 'btn-menu'
	const menuLinks = document.querySelectorAll('.menu a[href^="#"]')
	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				const id = entry.target.getAttribute('id')
				const menuLink = document.querySelector(`.menu a[href^="#${id}"]`)
				if (entry.isIntersecting) {
					const estilo = document.querySelector(`.menu a.${activeStyle}`)
					estilo
						? document
								.querySelector(`.menu a.${activeStyle}`)
								.classList.remove(activeStyle)
						: null
					activeStyle =
						id === 'intro'
							? 'btn-menu'
							: id === 'one'
							? 'btn-menu2'
							: id === 'two'
							? 'btn-menu3'
							:  id === 'three'
							?'btn-menu2'
							: id === 'four'
							?'btn-menu3'
							: id === 'five'
							?'btn-menu2'
							: id === 'six'
							?'btn-menu3'
							:id === 'seven'
							?'btn-menu2'
							:id === 'eigth'
							?'btn-menu3'
							:id === 'nine'
							?'btn-menu2'
							:id === 'C_one'
							?'btn-menu3'
							:id === 'C_two'
							?'btn-menu2'
							:id === 'C_three'
							?'btn-menu3'
							:'btn-menu2'
							
					menuLink.classList.add(activeStyle)
				}
			})
		},
		{ rootMargin: '-50%  0px -50% 0px' }
	)
	menuLinks.forEach((menuLink) => {
		const hash = menuLink.getAttribute('href')
		const target = document.querySelector(hash)
		if (target) {
			observer.observe(target)
		}
	})
	return activeStyle
}
export default Observer
