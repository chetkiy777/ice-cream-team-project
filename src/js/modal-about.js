(() => {
	const refs = {
		openModalBtn: document.querySelector('[data-modal-about-open]'),
		closeModalBtn: document.querySelector('[data-modal-about-close]'),
		modal: document.querySelector('[data-modal-about]'),
	};

	refs.openModalBtn.addEventListener('click', toggleModal);
	refs.closeModalBtn.addEventListener('click', toggleModal);

	refs.modal.addEventListener('click', removeModal);

	function toggleModal() {
		refs.modal.classList.toggle('is-hidden');
	}

	function removeModal(e) {
		if (e.target === refs.modal) {
			refs.modal.classList.add('is-hidden');
		}
	}
})();
