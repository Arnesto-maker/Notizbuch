function showAddNoteFunction () {
    let noteContentparent = document.querySelector(".note-content-parent");
    let addNoteButton = document.querySelector("#addNoteButton");
    noteContentparent.classList.toggle("active");
    addNoteButton.classList.toggle("active");
}
