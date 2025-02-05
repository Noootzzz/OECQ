/*
  * Author: Nathan Boisleux 2024 *
*/
// dynamic year for the footer
let dateYear = new Date().getFullYear()
let copyright = document.querySelector(".copyright")

copyright.textContent = `\u00A9 ${dateYear} OECQ. All Rights Reserved.`