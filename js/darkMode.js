/*
  * Author: Nathan Boisleux 2024 *
*/
let darkModeBtn = document.querySelector("#darkmode")
let darkModeBtnMobile = document.querySelector("#darkmodeMobile")
let body = document.querySelector("body")

// set the right theme
let setTheme = (theme) => {
  body.setAttribute("data-theme", theme)
  localStorage.setItem("theme", theme)
  darkModeBtn.textContent = theme === "dark" ? "Classic'Theme" : "Eco'Theme"
  darkModeBtnMobile.textContent = theme === "dark"? "Classic'Theme" : "Eco'Theme"
}

// set the initial theme based on localStorage
setTheme(localStorage.getItem("theme") || "light")

// swap the current mode when clicking the button
darkModeBtn.addEventListener("click", () => {
    setTheme(localStorage.getItem("theme") === "dark" ? "light" : "dark")
})
// swap the current mode when clicking the button
darkModeBtnMobile.addEventListener("click", () => {
  setTheme(localStorage.getItem("theme") === "dark" ? "light" : "dark")
})