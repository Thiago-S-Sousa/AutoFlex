const accordion = document.querySelector('.accordion');
const accordionBody = document.querySelector('.accordion-body');

accordion.addEventListener('click', function (event) {
	event.preventDefault();

	accordionBody.classList.toggle('active');
});

const inputBtn = document.querySelector('#input-btn');
const modal = document.querySelector('dialog');
const closeModal = document.querySelector('#close-modal');

inputBtn.addEventListener('click', function (event) {
	event.preventDefault();

	document.documentElement.style.setProperty('--margin', 'auto');
	modal.showModal();
});

closeModal.addEventListener('click', function (event) {
	event.preventDefault();

	document.documentElement.style.setProperty('--margin', '--margin');
	modal.close();
});

modal.addEventListener('keydown', function (event) {
	switch (event.code) {
		case 'F5':
		case 'Escape':
			event.preventDefault();
			break;

		case 'Backspace':
			const target = event.target;
			if (target.tagName !== 'INPUT' && target.tagName !== 'TEXTAREA') {
				event.preventDefault();
			}
			break;
	}
});
