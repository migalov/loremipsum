const topButton = document.querySelector(`.top-button`);

topButton.addEventListener("click", () => window.scrollTo(0, 0));

document.addEventListener("scroll", () => {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        topButton.classList.add("top-button--show");
    } else {
        topButton.classList.remove("top-button--show");
    }
})
