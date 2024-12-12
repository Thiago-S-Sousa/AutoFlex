const accordion = document.querySelector('.accordion');
const accordionBody = document.querySelector('.accordion-body');

const buttonInput = document.querySelector('#input-btn');
const modal = document.querySelector('dialog');
const closeModal = document.querySelector('#close-modal');

const kmInput = document.querySelector('#km');
const litersInput = document.querySelector('#liters');

const errorMsgkm = document.querySelector('#error-msg-km');
const errorMsgliters = document.querySelector('#error-msg-liters');

accordion.addEventListener('click', function (event) {
	event.preventDefault();

	accordionBody.classList.toggle('inactive');
});

function validateForm() {
	const kmValue = kmInput.value;
	const litersValue = litersInput.value;

	if (kmValue === '' || kmValue === null || kmValue <= 0) {
		buttonInput.disabled = true;
	} else if (litersValue === '' || litersValue === null || litersValue <= 0) {
		buttonInput.disabled = true;
	} else {
		buttonInput.disabled = false;
	}
	return;
}

kmInput.addEventListener('input', validateForm);
litersInput.addEventListener('input', validateForm);

function errorkm() {
	const kmValue = kmInput.value;

	if (kmValue === '' || kmValue === null) {
		errorMsgkm.textContent = 'Campo obrigatório!';
	} else {
		errorMsgkm.textContent = '';
	}
	return;
}

function errorliters() {
	const litersValue = litersInput.value;

	if (litersValue === '' || litersValue === null) {
		errorMsgliters.textContent = 'Campo obrigatório!';
	} else {
		errorMsgliters.textContent = '';
	}
	return;
}

kmInput.addEventListener('input', errorkm);
litersInput.addEventListener('input', errorliters);

function getModalCountResult() {
	const kmValue = kmInput.value;
	const litersValue = litersInput.value;

	const modalText = document.querySelector('#modal-text');
	const modalCount = kmValue / litersValue;

	modalText.innerHTML = `O seu veículo <br /> 
    percorre ${modalCount.toFixed(1)} KM <br />
    por litro.`;
	return;
}

function deleteValue() {
	kmInput.value = '';
	litersInput.value = '';

	buttonInput.disabled = true;
	return;
}

buttonInput.addEventListener('click', function (event) {
	event.preventDefault();

	getModalCountResult();
	modal.showModal();
	deleteValue();
});

closeModal.addEventListener('click', function (event) {
	event.preventDefault();
	modal.close();
});
