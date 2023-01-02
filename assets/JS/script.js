let notes = document.getElementsByTagName("source");
let notesArray = Array.from(notes);
let randomNote = notesArray[Math.floor(Math.random() * notesArray.length)];
let intervalButton = document.getElementById("quaver-button");

function getRandomNotes(notesArray, num) {
    let shuffledNotesArray = notesArray.sort(()=>0.5 - Math.random());
    return shuffledNotesArray.slice(0,num);
}


function playNote() {

    document.getElementById('quaver-button').addEventListener('click', );


  //create a random number and assign to x
  let x = getRandomNotes;
  var soundSrc = notesArray[x];
  //create a new instance of the audio object
  if (randomNote) {
      randomNote.play();
  }
  sound.src = soundSrc;
  //play the sound
  sound.play();
}

document.getElementById('quaver-button').addEventListener('click', playNote);





