// Declare variables that can be accessed from any point of script. 
// Set up storage containers for return values from functions.
const intervalButton = document.getElementById("quaver-button");
const notes = document.getElementsByTagName("audio");
const notesArray = Array.from(notes);
let randomNotesArray = [];
const submitButton = document.getElementById("submit");
let intervalNumberContainer = [];
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector(".btn-open");
const closeModalBtn = document.querySelector(".btn-close");

document.addEventListener("DOMContentLoaded", function() {
        getTwoRandomNotes();
        
})

// Add event listener to interval button that picks the two most recent notes
//pushed to random notes array.
intervalButton.addEventListener("click", function() {
    let randomNote = randomNotesArray[randomNotesArray.length - 2];
    let randomNoteTwo = randomNotesArray[randomNotesArray.length - 1];
    randomNote.play();
    setTimeout(function () {
        randomNoteTwo.play()
    }, 1000);
})

// Instruct browser to listen to any change in user's choice of interval
// quality so that correct answer can be checked later on.
// This code block was taken from https://bobbyhadz.com/blog/javascript-select-onchange-get-value
const userIntervalQuality = document.getElementById('interval-quality');
userIntervalQuality.addEventListener('change', function handleChange(event) {
  (event.target.value); 
  /** get selected VALUE even outside event handler - note for myself.
  //console.log(userIntervalQuality.options[userIntervalQuality.selectedIndex].value);
  */
  });

  //Same process applied to user's selection for interval number.
  const userIntervalNumber = document.getElementById("interval-number");
  userIntervalNumber.addEventListener("change", function handleChange(event) {
    (event.target.value);
  })

submitButton.addEventListener("click", function() {

    if (intervalNumberContainer[intervalNumberContainer.length-1] === 0 && userIntervalQuality.options[userIntervalQuality.selectedIndex].value === "perfect"
    && userIntervalNumber.options[userIntervalNumber.selectedIndex].value === "unison") {
       alert("Perfect pitch, Puccini! Let's see how you handle the next interval.");
       getTwoRandomNotes();
       incrementScore();
       

      } else if ((intervalNumberContainer[intervalNumberContainer.length-1] === 1 || intervalNumberContainer[intervalNumberContainer.length-1] === -1) && userIntervalQuality.options[userIntervalQuality.selectedIndex].value === "minor"
   && userIntervalNumber.options[userIntervalNumber.selectedIndex].value === "2nd") {
       alert("Perfect pitch, Puccini! Let's see how you handle the next interval.");
       getTwoRandomNotes();
       incrementScore();
       

      } else if ((intervalNumberContainer[intervalNumberContainer.length-1] === 2 || intervalNumberContainer[intervalNumberContainer.length-1] === -2) && userIntervalQuality.options[userIntervalQuality.selectedIndex].value === "major"
      && userIntervalNumber.options[userIntervalNumber.selectedIndex].value === "2nd") {
          alert("Perfect pitch, Puccini! Let's see how you handle the next interval.");
          getTwoRandomNotes();
          incrementScore();
          

      } else if ((intervalNumberContainer[intervalNumberContainer.length-1] === 3 || intervalNumberContainer[intervalNumberContainer.length-1] === -3) && userIntervalQuality.options[userIntervalQuality.selectedIndex].value === "minor"
      && userIntervalNumber.options[userIntervalNumber.selectedIndex].value === "3rd") {
          alert("Perfect pitch, Puccini! Let's see how you handle the next interval.");
          getTwoRandomNotes();
          incrementScore();
          
         
      } else if ((intervalNumberContainer[intervalNumberContainer.length-1] === 4 || intervalNumberContainer[intervalNumberContainer.length-1] === -4) && userIntervalQuality.options[userIntervalQuality.selectedIndex].value === "major"
      && userIntervalNumber.options[userIntervalNumber.selectedIndex].value === "3rd") {
          alert("Perfect pitch, Puccini! Let's see how you handle the next interval.");
          getTwoRandomNotes();
          incrementScore();
          
      } else if ((intervalNumberContainer[intervalNumberContainer.length-1] === 5 || intervalNumberContainer[intervalNumberContainer.length-1] === -5) && userIntervalQuality.options[userIntervalQuality.selectedIndex].value === "perfect"
      && userIntervalNumber.options[userIntervalNumber.selectedIndex].value === "4th") {
          alert("Perfect pitch, Puccini! Let's see how you handle the next interval.");
          getTwoRandomNotes();
          incrementScore();
          

      } else if ((intervalNumberContainer[intervalNumberContainer.length-1] === 6 || intervalNumberContainer[intervalNumberContainer.length-1] === -6) && userIntervalQuality.options[userIntervalQuality.selectedIndex].value === "augmented"
      && userIntervalNumber.options[userIntervalNumber.selectedIndex].value === "4th") {
          alert("Perfect pitch, Puccini! Let's see how you handle the next interval.");
          getTwoRandomNotes();
          incrementScore();
          
        
      } else if ((intervalNumberContainer[intervalNumberContainer.length-1] === 6 || intervalNumberContainer[intervalNumberContainer.length-1] === -6) && userIntervalQuality.options[userIntervalQuality.selectedIndex].value === "diminished"
      && userIntervalNumber.options[userIntervalNumber.selectedIndex].value === "5th") {
          alert("Perfect pitch, Puccini! Let's see how you handle the next interval.");
          getTwoRandomNotes();
          incrementScore();
          
          
      } else if ((intervalNumberContainer[intervalNumberContainer.length-1] === 7 || intervalNumberContainer[intervalNumberContainer.length-1] === -7) && userIntervalQuality.options[userIntervalQuality.selectedIndex].value === "perfect"
      && userIntervalNumber.options[userIntervalNumber.selectedIndex].value === "5th") {
            alert("Perfect pitch, Puccini! Let's see how you handle the next interval.");
            getTwoRandomNotes();
            incrementScore();
            

      } else if ((intervalNumberContainer[intervalNumberContainer.length-1] === 8 || intervalNumberContainer[intervalNumberContainer.length-1] === -8) && userIntervalQuality.options[userIntervalQuality.selectedIndex].value === "minor"
      && userIntervalNumber.options[userIntervalNumber.selectedIndex].value === "6th") {
          alert("Perfect pitch, Puccini! Let's see how you handle the next interval.");
          getTwoRandomNotes();
          incrementScore();
          

      } else if ((intervalNumberContainer[intervalNumberContainer.length-1] === 9 || intervalNumberContainer[intervalNumberContainer.length-1] === -9) && userIntervalQuality.options[userIntervalQuality.selectedIndex].value === "major"
      && userIntervalNumber.options[userIntervalNumber.selectedIndex].value === "6th") {
          alert("Perfect pitch, Puccini! Let's see how you handle the next interval.");
          getTwoRandomNotes();
          incrementScore();
          

      } else if ((intervalNumberContainer[intervalNumberContainer.length-1] === 10 || intervalNumberContainer[intervalNumberContainer.length-1] === -10) && userIntervalQuality.options[userIntervalQuality.selectedIndex].value === "minor"
      && userIntervalNumber.options[userIntervalNumber.selectedIndex].value === "7th") {
          alert("Perfect pitch, Puccini! Let's see how you handle the next interval.");
          getTwoRandomNotes();
          incrementScore();
          

      } else if ((intervalNumberContainer[intervalNumberContainer.length-1] === 11 || intervalNumberContainer[intervalNumberContainer.length-1] === -11) && userIntervalQuality.options[userIntervalQuality.selectedIndex].value === "major"
      && userIntervalNumber.options[userIntervalNumber.selectedIndex].value === "7th") {
          alert("Perfect pitch, Puccini! Let's see how you handle the next interval.");
          getTwoRandomNotes();
          incrementScore();
          

      } else if ((intervalNumberContainer[intervalNumberContainer.length-1] === 12 || intervalNumberContainer[intervalNumberContainer.length-1] === -12) && userIntervalQuality.options[userIntervalQuality.selectedIndex].value === "perfect"
      && userIntervalNumber.options[userIntervalNumber.selectedIndex].value === "octave") {
          alert("Perfect pitch, Puccini! Let's see how you handle the next interval.");
          getTwoRandomNotes();
          incrementScore();
          

      } else {
       alert("Not correct. Get busy, Bizet and try again!");
       let score = document.getElementById("score");
       score.innerText = "0";
      }
})
    
    function getTwoRandomNotes() {
    let randomNote = notesArray[Math.floor(Math.random() * notesArray.length)];
    let randomNoteTwo = notesArray[Math.floor(Math.random() * notesArray.length)];
    randomNotesArray.push(randomNote);
    randomNotesArray.push(randomNoteTwo);
    let firstSemitoneValue = parseInt(randomNote.getAttribute("data-number"));
    let secondSemitoneValue = parseInt(randomNoteTwo.getAttribute("data-number"));
    let intervalNumber = firstSemitoneValue - secondSemitoneValue;
    intervalNumberContainer.push(intervalNumber);
}

function incrementScore() {
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;
}

const openModal = function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  };