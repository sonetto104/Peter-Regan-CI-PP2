//* Declare some variables that will be used frequently /
const intervalButton = document.getElementById("quaver-button");
const notes = document.getElementsByTagName("audio");
const notesArray = Array.from(notes);
const randomNote = notesArray[Math.floor(Math.random() * notesArray.length)];
const randomNoteTwo = notesArray[Math.floor(Math.random() * notesArray.length)];
const firstSemitoneValue = parseInt(randomNote.getAttribute("data-number"));
const secondSemitoneValue = parseInt(randomNoteTwo.getAttribute("data-number"));
const intervalNumber = firstSemitoneValue - secondSemitoneValue;
const submitButton = document.getElementsByClassName("submit-button");

//* Add event listener to interval button that will randomly select 
// two notes to form interval 
intervalButton.addEventListener("click", function() {
    randomNote.play();
    setTimeout(function () {
        randomNoteTwo.play()
    }, 1000)
})

const userIntervalQuality = document.getElementById('interval-quality');
userIntervalQuality.addEventListener('change', function handleChange(event) {
  console.log(event.target.value); //  get selected VALUE
  /** get selected VALUE even outside event handler
  //console.log(userIntervalQuality.options[userIntervalQuality.selectedIndex].value);
  */
  });







// submitButton.addEventListener("click", function() {
// })

// function checkAnswer() {

// }



    
    





// intervalButton.addEventListener("click", function() {
//     console.log("clicked");
//     let randomNote = notesArray[Math.floor(Math.random() * notesArray.length)];
//     randomNote.play();
//     let randomNoteTwo = notesArray[Math.floor(Math.random() * notesArray.length)];
//     setTimeout(function(){
//         randomNoteTwo.play();
//     }, 1000)
    
//     let firstSemitoneValue = randomNote.getAttribute("data-number");
//     let secondSemitoneValue = randomNoteTwo.getAttribute("data-number");

//     const intervalNumber = parseInt(firstSemitoneValue)-parseInt(secondSemitoneValue);
//     console.log(intervalNumber);
// })





function getRandomNotes(notesArray, num) {
    let shuffledNotesArray = notesArray.sort(()=>0.5 - Math.random());
    return shuffledNotesArray.slice(0,num);
}








/** 

var x = document.getElementById("C5");

function playAudio() {
  x.play();
}

function pauseAudio() {
  x.pause();
}




/** 
function playNote () {
    intervalButton.addEventListener("click", function () {
        document.getElementById("C5").play();
    })
}





/** 

function playRandomNote () {
    randomNote.play();
}

let  vid = document.getElementById("myVideo");

function playVid() {
    vid.play();
}

function pauseVid() {
    vid.pause();
}
/**
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

*/




