try {
    // fetch datas with asynchrone function
    async function fetchDatasPublications() {
        return await fetch("./js/publicationsDatas.json").then((response) => response.json() // ===> all the datas in the json file
        )
    }
    // display datas with asynchrone function
    async function displayPublications() {
        const datas = await fetchDatasPublications()
        datas.forEach(data => { // ===> 1 data = 1 object in the json file
            document.querySelector("#timeline").innerHTML += 
            `
                <div class="container">
                    <div class="content">
                        <small>${data.year}</small>
                        <h3>${data.title}</h3>
                        <p>${data.text}</p>
                        <span class="container-arrow"></span>
                    </div>
                    <div class="right-section">
                        <h4>${data.date}</h4>
                        <a href="${data.link}">Read More</a>
                    </div>
                </div>
            `
        })
    }

    // display latest datas with asynchrone function
    async function displayLatestPublications() {
        const datas = await fetchDatasPublications()
        let latestDatas = datas.slice(-2) //last and penultimate object in the JSON file
        latestDatas.forEach(data => {
            document.querySelector("#last-news").innerHTML += 
            `
                <div class="container">
                    <div class="content">
                        <small>${data.year}</small>
                        <h3>${data.title}</h3>
                        <p>${data.text}</p>
                        <span class="container-arrow"></span>
                    </div>
                    <div class="right-section">
                        <h4>${data.date}</h4>
                        <a href="${data.link}">Read More</a>
                    </div>
                </div>
            `
        })

    }

    //call the functions when the page is loaded 
    window.addEventListener("DOMContentLoaded", () => {
        if(document.querySelector("#timeline")) displayPublications()
        if(document.querySelector("#last-news")) displayLatestPublications()
    })

} 
catch (error) {
    console.error(error)
}