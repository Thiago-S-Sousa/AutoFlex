const accordion = document.querySelector('.accordion');
const accordionBody = document.querySelector('.accordion-body');

const buttonInput = document.querySelector('#input-btn');
const modal = document.querySelector('dialog');
const closeModal = document.querySelector('#close-modal');

const distanceInput = document.querySelector('#distance');
const consumptionInput = document.querySelector('#consumption');
const priceInput = document.querySelector('#price');

const errorMsgdistance = document.querySelector('#error-msg-distance');
const errorMsgConsumption = document.querySelector('#error-msg-consumption');
const errorMsgPrice = document.querySelector('#error-msg-price');

accordion.addEventListener('click', function (event) {
	event.preventDefault();

	accordionBody.classList.toggle('inactive');
});

function validateForm() {
	const distanceValue = distanceInput.value;
	const consumptionValue = consumptionInput.value;
	const priceValue = priceInput.value;

	if (distanceValue === '' || distanceValue === null || distanceValue <= 0) {
		buttonInput.disabled = true;
	} else if (
		consumptionValue === '' ||
		consumptionValue === null ||
		consumptionValue <= 0
	) {
		buttonInput.disabled = true;
	} else if (priceValue === '' || priceValue === null || priceValue <= 0) {
		buttonInput.disabled = true;
	} else {
		buttonInput.disabled = false;
	}
	return;
}

distanceInput.addEventListener('input', validateForm);
consumptionInput.addEventListener('input', validateForm);
priceInput.addEventListener('input', validateForm);

function errorDistance() {
	const distanceValue = distanceInput.value;

	if (distanceValue === '') {
		errorMsgdistance.textContent = 'Campo obrigatório!';
	} else if (distanceValue <= 0 || distanceValue === null) {
		errorMsgdistance.textContent = 'Valor inválido!';
	} else {
		errorMsgdistance.textContent = '';
	}
	return;
}

function errorConsumption() {
	const consumptionValue = consumptionInput.value;

	if (consumptionValue === '') {
		errorMsgConsumption.textContent = 'Campo obrigatório!';
	} else if (consumptionValue <= 0 || consumptionValue === null) {
		errorMsgConsumption.textContent = 'Valor inválido!';
	} else {
		errorMsgConsumption.textContent = '';
	}
	return;
}

function errorPrice() {
	const priceValue = priceInput.value;

	if (priceValue === '') {
		errorMsgPrice.textContent = 'Campo obrigatório!';
	} else if (priceValue <= 0 || priceValue === null) {
		errorMsgPrice.textContent = 'Valor inválido!';
	} else {
		errorMsgPrice.textContent = '';
	}
	return;
}

distanceInput.addEventListener('input', errorDistance);
consumptionInput.addEventListener('input', errorConsumption);
priceInput.addEventListener('input', errorPrice);

function getModalCountResult() {
	const distanceValue = distanceInput.value;
	const consumptionValue = consumptionInput.value;
	const priceValue = priceInput.value;

	const modalText = document.querySelector('#modal-text');

	const modalCount = (distanceValue / consumptionValue) * priceValue;

	modalText.innerHTML = `O gasto total <br /> 
    com combustível  <br />
    foi de R$${modalCount.toFixed(2)}`;
	return;
}

function deleteValue() {
	distanceInput.value = '';
	consumptionInput.value = '';
	priceInput.value = '';

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
