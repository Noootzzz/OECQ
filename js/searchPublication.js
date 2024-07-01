// search publications
function searchPublication(searchValue) {
    const publications = document.querySelectorAll(".container")
    const errorMsg = document.querySelector("#error-message")
    let found = false
    // display publications
    publications.forEach((publication) => {
        const name = publication.querySelector("h3").textContent.toLowerCase()
        if (name.includes(searchValue.toLowerCase())) {
            publication.style.display = "flex"
            found = true
        } else {
            publication.style.display = "none"
        }
    })

     errorMsg.style.display = found ? "none" : "block"
}

//search event on input
const searchInput = document.querySelector("#search-bar")
searchInput.addEventListener("input", (e) => {
    const searchValue = e.target.value.trim().toLowerCase()

    searchPublication(searchValue)
})
