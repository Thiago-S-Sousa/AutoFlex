const accordion = document.querySelector('.accordion');
const accordionHeader = document.querySelector('.accordion-header');
const accordionBody = document.querySelector('.accordion-body');

accordion.addEventListener('click', function (event) {
	event.preventDefault();

	accordionHeader.classList.toggle('border-none');
	accordionBody.classList.toggle('active');

	console.log('Clicou!');
});

console.log(accordionHeader);
