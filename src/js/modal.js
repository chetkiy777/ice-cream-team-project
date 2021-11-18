(() => {
	const refs = {
		openModalBtn: document.querySelector('[data-modal-open]'),
		openModalBtnMenu: document.querySelector('[data-modal-menu-open]'),
		closeModalBtn: document.querySelector('[data-modal-close]'),
		modal: document.querySelector('[data-modal]'),
	};
	refs.openModalBtn.addEventListener('click', toggleModal);
	refs.openModalBtnMenu.addEventListener('click', toggleModal);
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
