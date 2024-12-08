const accordion = document.querySelector('.accordion');
const accordionBody = document.querySelector('.accordion-body');

const buttonInput = document.querySelector('#input-btn');
const modal = document.querySelector('dialog');
const closeModal = document.querySelector('#close-modal');

const form = document.querySelector('#form-fuel');
const alcoolInput = document.querySelector('#alcool');
const gasolineInput = document.querySelector('#gasoline');

const errorMsgAlcool = document.querySelector('#error-msg-alcool');
const errorMsgGasoline = document.querySelector('#error-msg-gasoline');

accordion.addEventListener('click', function (event) {
	event.preventDefault();

	accordionBody.classList.toggle('active');
});

function validateForm() {
	const alcoolValue = alcoolInput.value;
	const gasolineValue = gasolineInput.value;

	if (alcoolValue === '' || alcoolValue === null) {
		buttonInput.disabled = true;
	} else if (gasolineValue === '' || gasolineValue === null) {
		buttonInput.disabled = true;
	} else {
		buttonInput.disabled = false;
	}
	return;
}

alcoolInput.addEventListener('input', validateForm);
gasolineInput.addEventListener('input', validateForm);

function errorAlcool() {
	const alcoolValue = alcoolInput.value;

	if (alcoolValue === '' || alcoolValue === null) {
		errorMsgAlcool.textContent = 'Campo obrigatório!';
	} else {
		errorMsgAlcool.textContent = '';
	}
	return;
}

function errorGasoline() {
	const gasolineValue = gasolineInput.value;

	if (gasolineValue === '' || gasolineValue === null) {
		errorMsgGasoline.textContent = 'Campo obrigatório!';
	} else {
		errorMsgGasoline.textContent = '';
	}
	return;
}

alcoolInput.addEventListener('input', errorAlcool);
gasolineInput.addEventListener('input', errorGasoline);

function getModalCountResult() {
	const alcoolValue = alcoolInput.value;
	const gasolineValue = gasolineInput.value;

	const modalResult = document.querySelector('#modal-result');
	const modalText = document.querySelector('#modal-text');

	const modalCount = alcoolValue / gasolineValue;

	if (modalCount.toFixed(2) == '0.70' || modalCount.toFixed(2) < '0.70') {
		modalResult.textContent = `Resultado : ${modalCount}`;
		modalText.textContent = `Abasteça com ÁLCOOL`;
	} else {
		modalResult.textContent = `Resultado : ${modalCount}`;
		modalText.textContent = `Abasteça com GASOLINA`;
	}
	return;
}

function deleteValue() {
	alcoolInput.value = '';
	gasolineInput.value = '';

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
