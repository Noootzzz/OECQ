function searchPublication(searchValue) {
    const publications = document.querySelectorAll(".container")

    publications.forEach((publication) => {
    const name = publication.querySelector("h3").textContent.toLowerCase()

    if (name.includes(searchValue.toLowerCase())) {
    publication.style.display = "flex"
    } else {
    publication.style.display = "none"
    }
})
}
  
//search event on input
const searchInput = document.querySelector("#search-bar")
searchInput.addEventListener("input", (e) => {
    const searchValue = e.target.value.trim().toLowerCase()

    searchPublication(searchValue)
})