// dynamic year for the footer
let dateYear = new Date().getFullYear()
let copyright = document.querySelector(".copyright")

copyright.textContent = `\u00A9 ${dateYear} OECQ. Tous droits réservés.`