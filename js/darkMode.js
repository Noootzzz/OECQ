let darkModeBtn = document.querySelector("#darkmode")
let body = document.querySelector("body")

// set the right theme
function setTheme(theme) {
    body.setAttribute("data-theme", theme)
    localStorage.setItem("theme", theme)
    darkModeBtn.textContent = theme === "dark" ? "Classic'Theme" : "Eco'Theme"
}

// set the initial theme based on localStorage
setTheme(localStorage.getItem("theme") || "light")

// swap the current mode when clicking the button
darkModeBtn.addEventListener("click", () => {
    setTheme(localStorage.getItem("theme") === "dark" ? "light" : "dark")
})