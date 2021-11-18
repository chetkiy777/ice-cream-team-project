(() => {
	const mobileMenuWrapper = document.querySelector('.mobile-menu-wrapper');
	const mobileMenu = document.querySelector('.js-menu-container');
	const openMenuBtn = document.querySelector('.js-open-menu');
	const closeMenuBtn = document.querySelector('.js-close-menu');
	const closeMenuRewiew = document.querySelector('.js-close-menu-rewiews');
	const closeMenuAbout = document.querySelector('.js-close-menu-about');
	const closeMenuProducts = document.querySelector('.js-close-menu-products');
	const closeMenuContacts = document.querySelector('.js-close-menu-contacts');
	
	const noScroll = document.querySelector('html');
	


	const toggleMenu = () => {
		const isMenuOpen =
			openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
		openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
		mobileMenu.classList.toggle('is-open');
		mobileMenuWrapper.classList.toggle('is-open');

		noScroll.classList.toggle('no-scroll');

		const scrollLockMethod = !isMenuOpen
			? 'disableBodyScroll'
			: 'enableBodyScroll';
		bodyScrollLock[scrollLockMethod](document.body);
	};

	openMenuBtn.addEventListener('click', toggleMenu);
	closeMenuBtn.addEventListener('click', toggleMenu);
	closeMenuRewiew.addEventListener('click', toggleMenu);
	closeMenuAbout.addEventListener('click', toggleMenu);
	closeMenuProducts.addEventListener('click', toggleMenu);
	closeMenuContacts.addEventListener('click', toggleMenu);

		document.addEventListener('click', function(e) {
			if (e.target === mobileMenuWrapper) {
		
			const isMenuOpen =
			openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
		openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
				mobileMenu.classList.toggle('is-open');
				mobileMenuWrapper.classList.toggle('is-open');

		noScroll.classList.toggle('no-scroll');

		const scrollLockMethod = !isMenuOpen
			? 'disableBodyScroll'
			: 'enableBodyScroll';
		bodyScrollLock[scrollLockMethod](document.body);
  }
});

	// Закрываем мобильное меню на более широких экранах
	// в случае изменения ориентации устройства.
	window.matchMedia('(min-width: 800px)').addEventListener('change', e => {
		if (!e.matches) return;
		mobileMenu.classList.remove('is-open');
		openMenuBtn.setAttribute('aria-expanded', false);
		bodyScrollLock.enableBodyScroll(document.body);
	});
})();


