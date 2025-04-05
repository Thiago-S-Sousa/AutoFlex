const currentYear = new Date().getFullYear();
const owner = "Thiago Santos";
const text = `Copyright © ${currentYear}. Todos os direitos reservados a ${owner}.`;
document.getElementById("copyright-text").textContent = text;
