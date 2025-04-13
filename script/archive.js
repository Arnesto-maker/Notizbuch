archivedCardTitle = [];
archivedCardContent = [];
archiveEintrage = 0;
function initArchive() {
    getArchiveFromStorage();
    renderArchivedNote();
}

function renderArchivedNote () {
    let archive = document.getElementById("archivedNotes");
    archive.innerHTML = "";
    for (let i = 0; i < archivedCardTitle.length; i++) {
        archive.innerHTML += getArchivedNote(i);
    }
}
function getArchivedNote (i){
    return `<div id="${i} " class="output" onclick="dialog(event),renderDialogArchive(${i})">${archivedCardTitle[i]}</div>`
}
function getArchivedNoteTitleInDialog (i) {
    return `<div class="noteTitle" id="${i}">${archivedCardTitle[i]}</div>` 
}
function getArchivedNoteContentInDialog (i) {
    return `<div class="noteInDialog" id="${i}">${archivedCardContent[i]}</div>` 
}

function getArchiveFromStorage () {
    loadedArchivedCardTitle = JSON.parse(localStorage.getItem("archivedCardTitle"));
    loadedArchivedCardContent = JSON.parse(localStorage.getItem("archivedCardContent"));
    console.log(loadedArchivedCardTitle, loadedArchivedCardContent);
    archivedCardTitle = loadedArchivedCardTitle;
    archivedCardContent = loadedArchivedCardContent;
    if (archivedCardTitle === null || archivedCardContent === null) {
        archivedCardTitle = [];
        archivedCardContent = [];    
    } else {
        archivedCardTitle = loadedArchivedCardTitle;
        archivedCardContent = loadedArchivedCardContent;
    }
}
function renderDialogArchive (indexNote) {
    let archivedDialogTitle = document.getElementById("archivedNoteTitleInDialog");
    let archivedDialogContent = document.getElementById("archivedNoteInDialog");
    let noteNumber = document.getElementById("noteNumber");
    let eraseButton = document.getElementById("löschen");
    archivedDialogTitle.innerHTML = getArchivedNoteTitleInDialog (indexNote);
    archivedDialogContent.innerHTML = getArchivedNoteContentInDialog (indexNote);
    eraseButton.innerHTML = getEraseButtonInDialogArchive(indexNote);
    noteNumber.innerHTML = `${indexNote + 1}/${archivedCardTitle.length}`
    
}
function getArchivedNoteTitleInDialog (i) {
    return `<div class="noteTitle" id="${i}">${archivedCardTitle[i]}</div>` 
}
function next() {
    if (archiveEintrage < archivedCardTitle.length - 1) {
        archiveEintrage += 1;
        renderDialogArchive(archiveEintrage);
    } else {
        archiveEintrage= 0;
        renderDialogArchive(archiveEintrage);
    }
}

function prev() {
    if (archiveEintrage > 0) {
        archiveEintrage -= 1;
        renderDialogArchive(archiveEintrage);
    }else {
        archiveEintrage = archivedCardTitle.length - 1;
        renderDialogArchive(archiveEintrage);
    }
 }

 function removeArchiveNote (indexNote) {
    archivedCardTitle.splice(indexNote, 1);
    archivedCardContent.splice(indexNote, 1);
    localStorage.setItem("archivedCardTitle", JSON.stringify(archivedCardTitle));
    localStorage.setItem("archivedCardContent", JSON.stringify(archivedCardContent));
    renderArchivedNote();
}
