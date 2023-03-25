const header = document.getElementsByTagName("header")[0];
document.addEventListener("scroll", () => {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.classList.add("header--scroll")
    } else {
        header.classList.remove("header--scroll")
    }
})
