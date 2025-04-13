 list = []
trash = []



function init () {
    
    getFromStorage();
    renderNote();
    renderDeletedNote();
    
}




function addNote() {
    let note = document.getElementById("noteContent").value;
    list.push(note);
    localStorage.setItem("list", JSON.stringify(list));
    document.getElementById("noteContent").value = "";
   
    renderNote();

}

function deleteNote(indexNote) {
    trash.push(list[indexNote]);
    localStorage.setItem("trash", JSON.stringify(trash));
    list.splice(indexNote, 1);
    localStorage.setItem("list", JSON.stringify(list));
    renderNote();
    renderDeletedNote();
    
}
function removeNotes (indexNote) {
    trash.splice (indexNote,1);
    trash = localStorage.setItem("trash", JSON.stringify(trash));
    let loadedTrash = JSON.parse(localStorage.getItem("trash"));
    trash = loadedTrash
    renderDeletedNote()

}

function getFromStorage() {
    let loadedList = JSON.parse(localStorage.getItem("list"));
    let loadedTrash = JSON.parse(localStorage.getItem("trash"));
    list = loadedList; 
    trash = loadedTrash

}


function renderNote() {
    let output = document.getElementById("output");
     output.innerHTML = "";
    

    for (let i = 0; i < list.length; i++) {
        output.innerHTML += getNote(i);
    }
}
function renderDeletedNote(){
    let trashedNotes = document.getElementById("trashedNotes");
    trashedNotes.innerHTML = ""
    for (let i = 0; i < trash.length; i++) {
        trashedNotes.innerHTML += getDeletedNotes(i);
        
    }
}




