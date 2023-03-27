const toggleMenu = document.querySelector(".navigation__toggle");

document.querySelectorAll(".navigation-list__link").forEach(e => {
    e.addEventListener("click", (_e) => {
        toggleMenu.checked = !toggleMenu.checked;
    })
})