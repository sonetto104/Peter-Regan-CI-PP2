let notes = document.getElementsByTagName("audio");
let notesArray = Array.from(notes);
let randomNote = notesArray[Math.floor(Math.random() * notesArray.length)];
let intervalButton = document.getElementById("quaver-button");

function getRandomNotes(notesArray, num) {
    let shuffledNotesArray = notesArray.sort(()=>0.5 - Math.random());
    return shuffledNotesArray.slice(0,num);
}




