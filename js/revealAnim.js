// INITIALISATION
window.sr = ScrollReveal();

// HEADER
sr.reveal("header nav li:nth-child(1)", {reset: false, distance: "4rem", duration: 500, delay: 100, origin: "top" })
sr.reveal("header nav li:nth-child(2)", {reset: false, distance: "4rem", duration: 500, delay: 150, origin: "top" })
sr.reveal("header nav li:nth-child(3)", {reset: false, distance: "4rem", duration: 500, delay: 200, origin: "top" })
sr.reveal("header nav li:nth-child(4)", {reset: false, distance: "4rem", duration: 500, delay: 250, origin: "top" })
sr.reveal("header nav li:nth-child(5)", {reset: false, distance: "4rem", duration: 500, delay: 300, origin: "top" })
sr.reveal("#darkmode", {opacity: 0, duration: 500, delay:100})

// H1
sr.reveal("main h1", {opacity: 0, duration: 500, delay:100})

// CARDS
sr.reveal(".card:nth-child(1)", {reset: true, distance:"4rem", delay:150, duration: 500, origin: "left"})
sr.reveal(".card:nth-child(2)", {reset: true, distance:"4rem", delay:200, duration: 500, origin: "left"})
sr.reveal(".card:nth-child(3)", {reset: true, distance:"4rem", delay:250, duration: 500, origin: "left"})
sr.reveal(".card:nth-child(4)", {reset: true, distance:"4rem", delay:300, duration: 500, origin: "left"})
sr.reveal(".card:nth-child(5)", {reset: true, distance:"4rem", delay:300, duration: 500, origin: "left"})

// MISSION SECTION
//left part
sr.reveal("#home-mission p:nth-child(1)", {reset: true, distance: "4rem", delay:100, duration: 500, origin: "left"})
sr.reveal("#home-mission p:nth-child(2)", {reset: true, distance: "4rem", delay:150, duration: 500, origin: "left"})
//right part
sr.reveal("#home-mission #mission h2", {reset: true, distance: "2rem", delay: 100, duration: 500, origin: "top"})

//QUOTE SECTION
sr.reveal("#quote img", {reset: true, distance: "2rem", delay: 150, duration: 500, origin: "right"})
sr.reveal("#quote p", {reset: true, distance: "2rem", delay: 200, duration: 500, origin: "right"})