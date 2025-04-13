function getNote(i) {
    return ` <div id="${i} " class="output" onclick="dialog(event),renderDialog(${i})">
            <div class="output-toolbar">
            <div id="done"></div>
            </div>
            <div class="output-content">${cardTitle[i]}</div>
            </div>`;
}









function getNoteTitleInDialog(i) {
    return `<div class="noteTitle" id="${i}">${cardTitle[i]}</div>`
} 

function getNoteContentInDialog(i) {
    return `<div class="noteInDialog" id="${i}">${cardContent[i]}</div>` 
}

function getEraseButtonInDialog(i) {
    return `<button id="${i}" onclick="deleteNote(${i}), closeDialog(event)">löschen</button>`
}
function getDoneButtonInDialog(i) {
    return `<button id="${i}" onclick="done(${i})">erledigt</button>`
}
function getArchievierenButtonInDialog(i){
    return `<button id="${i}" onclick="archievieren(${i}), closeDialog(event)">Archievieren</button>`
}

function getEraseButtonInDialogArchive(i) {
    return `<button id="${i}" onclick="removeArchiveNote(${i}),closeDialog(event)">löschen</button>`
} 