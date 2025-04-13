function closeDialog(event) {
    let dialog = document.querySelector(".dialog");
    dialog.classList.remove("active");
    event.stopPropagation();
}


function dialog(event) {
    let dialog = document.querySelector(".dialog");
    dialog.classList.toggle("active");
    event.stopPropagation();
}