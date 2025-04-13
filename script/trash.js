
function init () {
    getTrashedNoteFromStorage();
    renderDeletedNote();
}

function renderDeletedNote () {
    let trashedNotes = document.getElementById("trashNotes");
    trashedNotes.innerHTML = ""
    for (let i = 0; i < trashedCardTitle.length; i++) {
        trashedNotes.innerHTML += getDeletedNotes(i);
    }
}
function getDeletedNotes (i) {
    return `<div id="${i} " class="output" onclick="removeNote(${i}), getTrashedNoteFromStorage()">${trashedCardTitle[i]}</div>`; 
}

function getTrashedNoteFromStorage () {
    let loadedtrashedCardTitle = JSON.parse(localStorage.getItem("trashedCardTitle"));
    let loadedtrashedCardContent = JSON.parse(localStorage.getItem("trashedCardContent"));
    trashedCardTitle = loadedtrashedCardTitle;
    trashedCardContent = loadedtrashedCardContent;
    if (loadedtrashedCardTitle === null || loadedtrashedCardContent === null) {
        trashedCardTitle = [];
        trashedCardContent = [];
    } 
}
function removeNote (indexNote) {
    trashedCardTitle.splice(indexNote, 1);
    trashedCardContent.splice(indexNote, 1);
    localStorage.setItem("trashedCardTitle", JSON.stringify(trashedCardTitle));
    localStorage.setItem("trashedCardContent", JSON.stringify(trashedCardContent));
    renderDeletedNote();
}