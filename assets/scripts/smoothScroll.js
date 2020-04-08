scrollTo = element => {
    window.scroll({
        behavior: "smooth",
        left: 0,
        top: element.getBoundingClientRect().top + window.scrollY
    })
}

document.getElementById("to-profile").addEventListener("click", () => {
    scrollTo(document.getElementById("profile"));
})

document.getElementById("to-experience").addEventListener("click", () => {
    scrollTo(document.getElementById("experience"));
})