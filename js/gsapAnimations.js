gsap.registerPlugin(ScrollTrigger)

// TEXT ANIMATION
const splitTypes = document.querySelectorAll("#about p")

splitTypes.forEach((word, i) => {
    const baseColor = word.dataset.baseColor
    const newColor = word.dataset.newColor
    
    const text = new SplitType(word, { types: 'words'})

    gsap.fromTo(text.words, 
        {
            color: baseColor,
        },
        {
            color: newColor,
            duration: 0.1,
            stagger: 0.02,
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: word,
                start: 'top 60%',
                end: 'top 30%',
                scrub: true,
                markers: false,
                toggleActions: 'play play reverse reverse'
            }
    })
})