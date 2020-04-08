let scrollPosistion = 0;
const nav = document.querySelector("nav");

checkPosition = () => {
    let windowY = window.scrollY;

    if (scrollPosistion === 0) {
        nav.classList.add("is-hidden");
        nav.classList.remove("is-visible");
    }

    if (windowY > scrollPosistion) {
        nav.classList.add("is-visible");
        nav.classList.remove("is-hidden");
    }

    scrollPosistion = 0;
}

window.addEventListener("scroll", checkPosition);