cardTitle = [];
cardContent = [];
archivedCardTitle = [];
archivedCardContent = [];
trashedCardTitle = [];
trashedCardContent = [];
eintrage = 0;function init () {
  getFromStorage();
  renderNote();
  
}
function reload () {
    window.location.reload();
    
}

function addNote () {
    cardTitle.push(document.getElementById("noteContentTitle").value);
    cardContent.push(document.getElementById("noteContentText").value);
    localStorage.setItem("cardTitle", JSON.stringify(cardTitle));
    localStorage.setItem("cardContent", JSON.stringify(cardContent));
    document.getElementById("noteContentTitle").value = ""
    document.getElementById("noteContentText").value = ""
    renderNote();
    let eintrag = document.getElementById("notebookHeaderEintragAnzahl");
    eintrag.innerHTML = cardTitle.length
    localStorage.setItem("eintrage", JSON.stringify(eintrag));
    
}


function deleteNote (indexNote) {
    // hier wird trash html angefangen aufgefüllt zu sein
    trashedCardTitle.push(cardTitle[indexNote]);
    trashedCardContent.push(cardContent[indexNote]);
    console.log(trashedCardTitle, trashedCardContent);
    // hier wird trash html beendet aufgefüllt zu sein
    cardTitle.splice(indexNote, 1);
    cardContent.splice(indexNote, 1);
    localStorage.setItem("cardTitle", JSON.stringify(cardTitle));
    localStorage.setItem("cardContent", JSON.stringify(cardContent));
    // local storage wird mit trash aufgefüllt (start)
    localStorage.setItem("trashedCardTitle", JSON.stringify(trashedCardTitle));
    localStorage.setItem("trashedCardContent", JSON.stringify(trashedCardContent));
    // local storage wird mit trash aufgefüllt (end)
    renderNote();
    
    let eintrag = document.getElementById("notebookHeaderEintragAnzahl");
    eintrag.innerHTML = cardTitle.length
    
}
function archievieren (indexNote){
    archivedCardTitle.push(cardTitle[indexNote]);
    archivedCardContent.push(cardContent[indexNote]);
    cardTitle.splice(indexNote, 1);
    cardContent.splice(indexNote, 1);
    localStorage.setItem("cardTitle", JSON.stringify(cardTitle));
    localStorage.setItem("cardContent", JSON.stringify(cardContent));
    console.log(archivedCardTitle, archivedCardContent);
    localStorage.setItem("archivedCardTitle",JSON.stringify(archivedCardTitle))
    localStorage.setItem("archivedCardContent",JSON.stringify(archivedCardContent))
    renderNote()
    let eintrag = document.getElementById("notebookHeaderEintragAnzahl");
    eintrag.innerHTML = cardTitle.length
    
    

}


function getFromStorage () {
    let loadedCardTitle = JSON.parse(localStorage.getItem("cardTitle"));
    let loadedCardContent = JSON.parse(localStorage.getItem("cardContent"));
    let loadedtrashedCardTitle = JSON.parse(localStorage.getItem("trashedCardTitle"));
    let loadedtrashedCardContent = JSON.parse(localStorage.getItem("trashedCardContent"));
    if (loadedCardTitle === null || loadedCardContent === null || 
        loadedtrashedCardTitle === null || loadedtrashedCardContent === null || 
        archivedCardTitle === null || archivedCardContent === null  ) 
        {
        cardTitle = [];
        cardContent = [];

    }else {
        cardTitle = loadedCardTitle;
        cardContent = loadedCardContent;
        trashedCardTitle = loadedtrashedCardTitle;
        trashedCardContent = loadedtrashedCardContent;
        let eintrag = document.getElementById("notebookHeaderEintragAnzahl");
        eintrag.innerHTML = cardTitle.length
    }
    console.log(cardTitle, cardContent);
}
 

function renderNote () {
     let output = document.getElementById("noteContentOutput");
     
     output.innerHTML = "";
       for (let i = 0; i < cardTitle.length; i++) {
         output.innerHTML += getNote(i);
        }
    
  }

function renderDialog (indexNote) {
    let dialogTitle = document.getElementById("noteTitle");
    let dialogContent = document.getElementById("noteInDialog");
    let noteNumber = document.getElementById("noteNumber");
    let eraseButton = document.getElementById("löschen");
    // let doneButton = document.getElementById("erledigt");
    let archievierenButton = document.getElementById("archievieren")
    dialogTitle.innerHTML = getNoteTitleInDialog(indexNote);
    dialogContent.innerHTML = getNoteContentInDialog(indexNote);
    eraseButton.innerHTML = getEraseButtonInDialog(indexNote);
    // doneButton.innerHTML = getDoneButtonInDialog(indexNote);
    archievierenButton.innerHTML = getArchievierenButtonInDialog(indexNote);
    noteNumber.innerHTML = `${indexNote + 1}/${cardTitle.length}`
    dialogContent.focus();
}


function next() {
    if (eintrage < cardTitle.length - 1) {
        eintrage += 1;
        renderDialog(eintrage);
    } else {
        eintrage = 0;
        renderDialog(eintrage);
    }

 
}

function prev() {
    if (eintrage > 0) {
        eintrage -= 1;
        renderDialog(eintrage);
    }else {
        eintrage = cardTitle.length - 1;
        renderDialog(eintrage);
    }
 
}
function timedRefresh(timeoutPeriod) {
    setInterval(function() {
        reload();
    }, timeoutPeriod);
}