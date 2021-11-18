(() => {
  const refs = {
    openModalBtnicecream: document.querySelector('[data-modal-products-icecream-open]'),
    closeModalBtniicecream: document.querySelector('[data-modal-products-icecream-close]'),
    modalicecream: document.querySelector('[data-modal-products-icecream]'),
  };

  refs.openModalBtnicecream.addEventListener('click', toggleModal);
  refs.closeModalBtniicecream.addEventListener('click', toggleModal);
  refs.modalicecream.addEventListener('click', removeModal);


  function toggleModal() {
    refs.modalicecream.classList.toggle('products__backdrop_is-hidden');
  }

  function removeModal(e) {
		if (e.target === refs.modalicecream) {
			refs.modalicecream.classList.add('products__backdrop_is-hidden');
		}
	}
})();

(() => {
  const refs = {
    openModalBtnicecoffee: document.querySelector('[data-modal-products-icecoffee-open]'),
    closeModalBtnicecoffee: document.querySelector('[data-modal-products-icecoffee-close]'),
    modalicecoffee: document.querySelector('[data-modal-products-icecoffee]'),
  };

  refs.openModalBtnicecoffee.addEventListener('click', toggleModal);
  refs.closeModalBtnicecoffee.addEventListener('click', toggleModal);
  refs.modalicecoffee.addEventListener('click', removeModal);

  function toggleModal() {
    refs.modalicecoffee.classList.toggle('products__backdrop_is-hidden');
  }

  function removeModal(e) {
    if (e.target === refs.modalicecoffee) {
      refs.modalicecoffee.classList.add('products__backdrop_is-hidden');
    }
  }
})();
(() => {
  const refs = {
    openModalBtnmilkshake: document.querySelector('[data-modal-products-milkshake-open]'),
    closeModalBtnmilkshake: document.querySelector('[data-modal-products-milkshake-close]'),
    modalmilkshake: document.querySelector('[data-modal-products-milkshake]'),
  };

  refs.openModalBtnmilkshake.addEventListener('click', toggleModal);
  refs.closeModalBtnmilkshake.addEventListener('click', toggleModal);
  refs.modalmilkshake.addEventListener('click', removeModal);

  function toggleModal() {
    refs.modalmilkshake.classList.toggle('products__backdrop_is-hidden');
  }
  function removeModal(e) {
    if (e.target === refs.modalmilkshake) {
      refs.modalmilkshake.classList.add('products__backdrop_is-hidden');
    }
  }
})();