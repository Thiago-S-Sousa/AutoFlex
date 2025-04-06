// ------ FOOTER ------

const currentYear = new Date().getFullYear();
const owner = "Thiago Santos";
const text = `Copyright © ${currentYear}. Todos os direitos reservados a ${owner}.`;
document.getElementById("copyright-text").textContent = text;

// ------ ANIMATIONS ------

const myObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const topElements = document.querySelectorAll(".top-hidden");
const bottomElements = document.querySelectorAll(".bottom-hidden");
const leftElements = document.querySelectorAll(".left-hidden");
const rightElements = document.querySelectorAll(".right-hidden");

topElements.forEach((element) => myObserver.observe(element));
bottomElements.forEach((element) => myObserver.observe(element));
leftElements.forEach((element) => myObserver.observe(element));
rightElements.forEach((element) => myObserver.observe(element));

// -----------------------------------------
