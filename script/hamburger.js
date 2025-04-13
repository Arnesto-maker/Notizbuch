const menuButton = document.getElementById("hamburger");
const menu = document.getElementById("main-sidebar");
menuButton.addEventListener("click", () => {
    menuButton.classList.toggle("active");
    menu.classList.toggle("active");
})

function closeMenu () {
    menuButton.classList.remove("active")
    menu.classList.remove("active")
}