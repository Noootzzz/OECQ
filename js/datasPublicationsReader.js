/*
  * Author: Nathan Boisleux 2024 *
*/
try {
    // fetch datas with asynchrone function
    const fetchDatasPublications = async () => {
        return await fetch("./js/publicationsDatas.json").then((response) => response.json()) // ===> all the datas in the json file
    }

    // function to create a DOM element
    const createElement = (type, className, textContent) => {
        let element = document.createElement(type)
        if (className) element.className = className
        if (textContent) element.textContent = textContent
        return element
    }

    // function to create a publication
    const createPublication = (data, parentElement) => {
        let container = createElement("div", "container")
        let content = createElement("div", "content")
        let year = createElement("small", "", data.year)
        let title = createElement("h3", "", data.title)
        let text = createElement("p", "", data.text)
        let arrow = createElement("span", "container-arrow")
        
        content.appendChild(year)
        content.appendChild(title)
        content.appendChild(text)
        content.appendChild(arrow)

        let rightSection = createElement("div", "right-section")
        let date = createElement("h4", "", data.date)
        let link = createElement("a", "", "Read More")        

        rightSection.appendChild(date)
        rightSection.appendChild(link)

        container.appendChild(content)
        container.appendChild(rightSection)

        parentElement.appendChild(container)
    }

    // display datas with asynchrone function
    const displayPublications = async (limit) => {
        const datas = await fetchDatasPublications()
        let publications = limit ? datas.slice(-limit) : datas
        let parentElement = document.querySelector(limit ? "#last-news" : "#timeline")
        if (parentElement) publications.forEach(data => createPublication(data, parentElement))
    }

    // display all publications in the publications page
    displayPublications()

    // display latest 2 publications in the home page
    displayPublications(2)

} catch (error) {
    console.error(error)
}
