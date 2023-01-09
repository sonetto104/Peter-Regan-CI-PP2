// Declare variables that can be accessed from any point of script. 
// Set up storage containers for return values from functions.
const intervalButton = document.getElementById("quaver-button");
const notes = document.getElementsByTagName("audio");
const notesArray = Array.from(notes);
let randomNotesArray = [];
const submitButton = document.getElementById("submit");
let intervalNumberContainer = [];

//Variables for Modals
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeModalBtn = document.querySelector(".btn-close");
const closeModalBtnTwo = document.querySelector(".btn-close-two");
const nextModalBtn = document.querySelector(".btn-next");
const nextModalBtnTwo = document.querySelector(".btn-next-two");
const modalTwo = document.querySelector(".modal-two");
const modalThree = document.querySelector(".modal-three");
const closeModalBtnThree = document.querySelector(".btn-close-three");
const nextModalBtnThree = document.querySelector(".btn-next-three");
const correctAlert = document.querySelector(".correct-alert");
const nextIntervalButton = document.querySelector(".next-interval");
const wrongAlert = document.querySelector(".wrong-alert");
const tryAgain = document.querySelector(".try-again");

document.addEventListener("DOMContentLoaded", function() {
        getTwoRandomNotes();
        openModal();        
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

// Code to be executed when user submits their answer.
// Two different modal alerts available depending on whether answer is correct or not.  
submitButton.addEventListener("click", function() {

    if (intervalNumberContainer[intervalNumberContainer.length-1] === 0 && userIntervalQuality.options[userIntervalQuality.selectedIndex].value === "perfect"
    && userIntervalNumber.options[userIntervalNumber.selectedIndex].value === "unison") {
       openCorrectAlert();
       getTwoRandomNotes();
       incrementScore();
       

      } else if ((intervalNumberContainer[intervalNumberContainer.length-1] === 1 || intervalNumberContainer[intervalNumberContainer.length-1] === -1) && userIntervalQuality.options[userIntervalQuality.selectedIndex].value === "minor"
   && userIntervalNumber.options[userIntervalNumber.selectedIndex].value === "2nd") {
       openCorrectAlert();
       getTwoRandomNotes();
       incrementScore();
       

      } else if ((intervalNumberContainer[intervalNumberContainer.length-1] === 2 || intervalNumberContainer[intervalNumberContainer.length-1] === -2) && userIntervalQuality.options[userIntervalQuality.selectedIndex].value === "major"
      && userIntervalNumber.options[userIntervalNumber.selectedIndex].value === "2nd") {
          openCorrectAlert();
          getTwoRandomNotes();
          incrementScore();
          

      } else if ((intervalNumberContainer[intervalNumberContainer.length-1] === 3 || intervalNumberContainer[intervalNumberContainer.length-1] === -3) && userIntervalQuality.options[userIntervalQuality.selectedIndex].value === "minor"
      && userIntervalNumber.options[userIntervalNumber.selectedIndex].value === "3rd") {
          openCorrectAlert();
          getTwoRandomNotes();
          incrementScore();
          
         
      } else if ((intervalNumberContainer[intervalNumberContainer.length-1] === 4 || intervalNumberContainer[intervalNumberContainer.length-1] === -4) && userIntervalQuality.options[userIntervalQuality.selectedIndex].value === "major"
      && userIntervalNumber.options[userIntervalNumber.selectedIndex].value === "3rd") {
          openCorrectAlert();
          getTwoRandomNotes();
          incrementScore();
          
      } else if ((intervalNumberContainer[intervalNumberContainer.length-1] === 5 || intervalNumberContainer[intervalNumberContainer.length-1] === -5) && userIntervalQuality.options[userIntervalQuality.selectedIndex].value === "perfect"
      && userIntervalNumber.options[userIntervalNumber.selectedIndex].value === "4th") {
          openCorrectAlert();
          getTwoRandomNotes();
          incrementScore();
          

      } else if ((intervalNumberContainer[intervalNumberContainer.length-1] === 6 || intervalNumberContainer[intervalNumberContainer.length-1] === -6) && userIntervalQuality.options[userIntervalQuality.selectedIndex].value === "augmented"
      && userIntervalNumber.options[userIntervalNumber.selectedIndex].value === "4th") {
          openCorrectAlert();
          getTwoRandomNotes();
          incrementScore();
          
        
      } else if ((intervalNumberContainer[intervalNumberContainer.length-1] === 6 || intervalNumberContainer[intervalNumberContainer.length-1] === -6) && userIntervalQuality.options[userIntervalQuality.selectedIndex].value === "diminished"
      && userIntervalNumber.options[userIntervalNumber.selectedIndex].value === "5th") {
          openCorrectAlert();
          getTwoRandomNotes();
          incrementScore();
          
          
      } else if ((intervalNumberContainer[intervalNumberContainer.length-1] === 7 || intervalNumberContainer[intervalNumberContainer.length-1] === -7) && userIntervalQuality.options[userIntervalQuality.selectedIndex].value === "perfect"
      && userIntervalNumber.options[userIntervalNumber.selectedIndex].value === "5th") {
            openCorrectAlert();
            getTwoRandomNotes();
            incrementScore();
            

      } else if ((intervalNumberContainer[intervalNumberContainer.length-1] === 8 || intervalNumberContainer[intervalNumberContainer.length-1] === -8) && userIntervalQuality.options[userIntervalQuality.selectedIndex].value === "minor"
      && userIntervalNumber.options[userIntervalNumber.selectedIndex].value === "6th") {
          openCorrectAlert();
          getTwoRandomNotes();
          incrementScore();
          

      } else if ((intervalNumberContainer[intervalNumberContainer.length-1] === 9 || intervalNumberContainer[intervalNumberContainer.length-1] === -9) && userIntervalQuality.options[userIntervalQuality.selectedIndex].value === "major"
      && userIntervalNumber.options[userIntervalNumber.selectedIndex].value === "6th") {
          openCorrectAlert();
          getTwoRandomNotes();
          incrementScore();
          

      } else if ((intervalNumberContainer[intervalNumberContainer.length-1] === 10 || intervalNumberContainer[intervalNumberContainer.length-1] === -10) && userIntervalQuality.options[userIntervalQuality.selectedIndex].value === "minor"
      && userIntervalNumber.options[userIntervalNumber.selectedIndex].value === "7th") {
          openCorrectAlert();
          getTwoRandomNotes();
          incrementScore();
          

      } else if ((intervalNumberContainer[intervalNumberContainer.length-1] === 11 || intervalNumberContainer[intervalNumberContainer.length-1] === -11) && userIntervalQuality.options[userIntervalQuality.selectedIndex].value === "major"
      && userIntervalNumber.options[userIntervalNumber.selectedIndex].value === "7th") {
          openCorrectAlert();
          getTwoRandomNotes();
          incrementScore();
          

      } else if ((intervalNumberContainer[intervalNumberContainer.length-1] === 12 || intervalNumberContainer[intervalNumberContainer.length-1] === -12) && userIntervalQuality.options[userIntervalQuality.selectedIndex].value === "perfect"
      && userIntervalNumber.options[userIntervalNumber.selectedIndex].value === "octave") {
          openCorrectAlert();
          getTwoRandomNotes();
          incrementScore();
          

      } else {
       openWrongAlert();
       let score = document.getElementById("score");
       score.innerText = "0";
      }
})

//Define functions to be called in script.
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

function openModal() {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  };

  function openModalTwo() {
    modalTwo.classList.remove("hidden");
    overlay.classList.remove("hidden");
  }

  function openModalThree() {
    modalThree.classList.remove("hidden");
    overlay.classList.remove("hidden");
  }

function openCorrectAlert() {
    correctAlert.classList.remove("hidden");
    overlay.classList.remove("hidden");
}

function openWrongAlert() {
    wrongAlert.classList.remove("hidden");
    overlay.classList.remove("hidden");
}

function closeModal() {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  };

  function closeModalTwo() {
    modalTwo.classList.add("hidden");
    overlay.classList.add("hidden");
  }

  function closeModalThree() {
    modalThree.classList.add("hidden");
    overlay.classList.add("hidden");
  }

  function closeCorrectAlert() {
    correctAlert.classList.add("hidden");
    overlay.classList.add("hidden");
  }

  function closeWrongAlert() {
    wrongAlert.classList.add("hidden");
    overlay.classList.add("hidden");
  }

  //Add event listeners so correct modals are displayed at the correct times.
  closeModalBtn.addEventListener("click", closeModal);
  closeModalBtnTwo.addEventListener("click", closeModalTwo);
  closeModalBtnThree.addEventListener("click",closeModalThree);
 
  nextModalBtn.addEventListener("click", function() {
    closeModal();
    openModalTwo();
  })

  nextModalBtnTwo.addEventListener("click", function (){
    closeModalTwo();
    openModalThree();
  })

  nextIntervalButton.addEventListener("click", function() {
    closeCorrectAlert();
})

   tryAgain.addEventListener("click", function() {
    closeWrongAlert();
})