let topBtn = document.querySelector(".arrowTop")

// calculate scroll value
let calcScrollValue = () => {
    let pos = document.documentElement.scrollTop
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
    return Math.round((pos * 100) / calcHeight)
}

// update button background
let updateButtonBackground = () => {
    let scrollValue = calcScrollValue()
    topBtn.style.background = `conic-gradient(var(--text) ${scrollValue}%, var(--background) ${scrollValue}%)`
}

// scroll to top smoothly
let scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth" //smooth scroll effect
    })
}

// add click event listener to top button
topBtn.addEventListener("click", scrollToTop)

// update button background on scroll and on load
window.onscroll = updateButtonBackground
window.onload = updateButtonBackground