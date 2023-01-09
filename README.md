## README Document for Code Institute Portfolio Project 2 "Interval Master"

## Purpose
"Interval Master" was constructed as a requirement for Code Institute's Diploma in Full Stack Software Development course. Its purpose is to show that I have achieved a basic command of Javascript and can use it to add a level of interactivity to a web page built with HTML and CSS.

In its imagined context, Interval Master may be used by music and music theory students, musicians and music teachers as a practice tool for interval recognition. Good interval recognition is one of the most helpful tools to have when playing music by ear or when conducting analysis without the aid of a score. A beneficial byproduct of this skill is that it also encourages the formation of a stronger mental image of the distances between notes. If a musician already has a strong habit and history of good physical practice, this can facilitate better note accuracy in playing, without the need for additional physical practice. (Remember the physical practice base already has to be there though - we can't skip that part!)

## Imagined User Stories
While I would like to imagine that musicians and students are all happily and diligently practising their intervals regularly, a game like this is most likely to be used by music students who are practising for an upcoming theory, general musicianship or aural skills exam. Beyond this situation, it is unlikely a different type of user would find use for this page.

## Value Provided to the User
In order to really practise interval recognition well, the intervals supplied must be unknown and random. It is difficult to do this alone because if a student were to try and practise listening to intervals made with their own instrument, it is too easy for the interval in question to be not truly random and unknown. Even if blindfolded, the physical sensation of touching the instrument can give clues about which notes are sounding.
In this respect, Interval Master is very helpful. It gives the user to opportunity to practise interval recognition regularly with completely randomised intervals. It also eliminates the need to have another person (usually a teacher) supply the intervals, something which would usually only happen once a week. Practising a skill once per week is not conducive to developing strong competency.

## Technologies Used
For this project I used GitHub to both host and deploy my repository. With GitHub's built in code editor I used HTML to build the layout of the site. I linked an external CSS stylesheet to the HTML to style the HTML elements and make them responsive to different screen sizes. I linked an external Javascript file to the HTML file to govern how the HTML elements behave according to the user's actions.

## Design

***Layout and General Structure***
I used this simple hand drawn wireframe to create the general layout of the website.
![Interval Master Wireframe](https://github.com/sonetto104/Peter-Regan-CI-PP2/blob/main/assets/images/interval-master-layout.jpg)
You may notice that there are fewer buttons in the finished website than I had initally planned for in my wireframe. This is because I had originally imagined additional features that I then decided were too ambitious for the scope and timescale of this project. However, otherwise this wireframe proved to be helpful and I largely stuck to it.

***Colour Scheme***
For Interval Master I used bright colours. The background has a gradient effect using blue and pink. Text elements are white and have a red and orange text-shadow effect that makes them more dynamic looking and also makes the brightly coloured text more easy to read and differentiate from the colourful background. Buttons and select elements are also red but change to a very contrasting bright green when the user hovers over them. This is to allow the user to easily identify what choice they are making. As this website does not serve a particularly serious purpose, I chose these bright colours to create an atmosphere of fun so the user is encouraged to think of Interval Master as a game rather than as a dry music theory exercise.

![Screenshot of Page](https://github.com/sonetto104/Peter-Regan-CI-PP2/blob/main/assets/images/interval-master-page-screenshot.png)

***Fonts***
The font I used for Interval Master is "Righteous" which I took from Google Fonts. As there are so few text elements in this webpage, I decided not to choose a different font family for heading and non-heading elements, but just used differing font weights and sizes. I chose this font as it is strong and easily legible, but it is also quite rounded which helps contribute to the atmosphere of fun I referred to above in the Colour Scheme section. I used a skew effect on the Interval Master heading, again to suggest the idea of something dynamic and fun rather than static and boring.

***Modals***
I used modals rather than browser alerts to give the user feedback and introduce them to the website as they are nicer to look at and keep the user's attention focused within the website rather than on the idea of their browser as a vehicle that could take them elsewhere. It also makes communication from the page to the user visually consistent with the rest of the site. Purely for the purposes of legibility, I made the modals black and white. Having tried to use some of the colours already in use in the website, I decided they were too distracting given how many bright colours there are already present in the page, and this made the modals difficult to read.

## Project Features
The features most important to this project are the random note pair generator, the interval number calculator, the event listeners that listen to the user's answer and the event listeners that tell the user whether they were correct or not and decide whether to generate a new note pair or not.

***Random Note Pair Generator***
There are 13 audio tags with player controls, each containing a note sounding for approximately one second, in the HTML file. The range of these notes span one octave.
The interval is generated from these audio tags according to these steps:
1. The browser listens for all the DOM content to be loaded.
2. A function randomly selects two notes from the audio tags (which have been converted into an array) and pushes them into an empty array called "randomNotesArray".
3. There is an event listener on the large beamed quaver button in the middle of the page. When pressed, the second last and last items in the randomNotesArray are played one second apart.

***Interval Number Calculator***
I have decided to calculate the identity of each interval by counting how many semitones there are between the random note pair. This was achieved using the following logic:
1. Each note was assigned an attribute called "data-number" which was assigned a number value.
2. Corresponding to a chromatic scale beginning on C4, the number values begin with 0 and stop at 12. With every semitone ascension from C4, the "data-number" number value increases by 1. 

So: C4=0, Db4=1, D4=2, Eb4=3, E4=4 ....... C5=12

3. The interval number is calculated as the difference between the data-number attribute values of the first note of the interval and the second note of the interval.
4. If the interval number is negative, then an ascending interval was played. If if is positive, a descending interval was played. Thankfully whether the interval number is positive or negative does not change its quality.

***Event Listeners***
Event listeners are responsible for many of the behaviours of the Interval Master page.

1. A DOM Content Loaded event listener is responsible for the appearance of a modal welcoming the user to Interval Master when they open the page.
2. Subsequent event listeners attached to buttons within the series of welcome modals are responsible for the opening and closing of these modals in the correct order.
3. Event listeners listen to the user's choice of interval quality and number so that the browser is always up to date with these choices and can accurately record them, no matter how many times the user may change their mind.
4. An event listener is attached to the submit button and can decide whether to show a modal that tells the listener their answer was correct or incorrect. According to either case, the event listener can also decide whether to generate a new random interval or not.

This is not an exhaustive list of every single event listener, but these are probably the most important examples.

***Aria Labels***
Consistent with standard guidelines, non-text elements in the HTML file have aria labels for visually impaired users where appropriate.

## Testing

***HTML, CSS and Javascript Testing***
I tested the index.html file and style.css file with the W3C HTML and CSS validators. I tested the script.js file with Beautify Tools (https://beautifytools.com/javascript-validator.php). All files passed tests without errors.

![Validation for HTML file](https://github.com/sonetto104/Peter-Regan-CI-PP2/blob/main/assets/images/interval-master-html-validation.png)

![Validation for CSS file](https://github.com/sonetto104/Peter-Regan-CI-PP2/blob/main/assets/images/interval-master-css-validation.png)

![Validation for JS file](https://github.com/sonetto104/Peter-Regan-CI-PP2/blob/main/assets/images/interval-master-js-validation.png)

***Manual Testing***

| Test        | Expected Outcome | Actual Outcome | Pass/Fail |
| ----------- | ---------------- | -------------- | --------- | 
| Is the site readable with correct content?    | Site should have three welcome modals without spelling errors, heading, clearly legible select elements containing intervals with qualities major, minor, perfect and diminished, and number ranging from unison to octave.       | Same as expected. | Pass |
| Is the site responsive to varying screen sizes?  | Site should be legible with clear flow with screen widths as small as 150px.      | Same as expected  ![Screenshot 1](https://github.com/sonetto104/Peter-Regan-CI-PP2/blob/main/assets/images/interval-master-screen-size-screenshot1.png) ![Screenshot 2](https://github.com/sonetto104/Peter-Regan-CI-PP2/blob/main/assets/images/interval-master-screen-size-screenshot2.png) ![Screenshot 3](https://github.com/sonetto104/Peter-Regan-CI-PP2/blob/main/assets/images/interval-master-screen-size-screenshot3.png) ![Screenshot 4](https://github.com/sonetto104/Peter-Regan-CI-PP2/blob/main/assets/images/interval-master-screen-size-screenshot4.png) ![Screenshot 5](https://github.com/sonetto104/Peter-Regan-CI-PP2/blob/main/assets/images/interval-master-screen-size-screenshot5.png) ![Screenshot from mobile](https://github.com/sonetto104/Peter-Regan-CI-PP2/blob/main/assets/images/interval-master-mobile-screenshot.jpg) | Pass |
| Do three welcome modals appear in correct order when site loads? | Welcome modal should appear when user visits site. Second instruction modal appears after clicking "next". 3rd instruction modal appears after clicking "next" | Same as expected. | Pass |
| Do all "close modal" buttons work on all three welcome modals? | All modals should close after clicking "X" button. | Same as expected. | Pass |
| Does quaver icon button play an interval? | Two notes should sound after pressing quaver icon button | Same as expected. | Pass |
| Does quaver icon button repeat same interval if "submit" has not been pressed? | If user has not pressed "submit" and they press the quaver button again, they should be able to repeatedly hear the same interval. | Same as expected. | Pass |
| Does the "correct answer" modal appear if user submits correct answer? | If user correctly identifies interval and presses submit, a modal should appear letting them know they are correct and prompt them to generate the next interval. | Same as expected. | Pass |
| Does a new interval play after the submission of a correctly identified interval? | If user submits answer that is correct, the next interval they play should be a different randomly generated interval. | Same as expected. | Pass |
| Does "wrong answer" modal appear if user submits wrong answer? | If modal incorrectly identifies interval and presses submit, a modal should appear letting them know they are incorrect and prompt them to try again. | Same as expected. | Pass |
| Is the same interval still played after the submission of an incorrect answer? | If the user incorrectly identifies an interval and presses submit, the next interval they play should be the same as what they heard before. | Same as expected. | Pass |
| Does score incrementor increment the score by 1 each time user indentifies correct interval? | Score should increase by 1 after each correct interval submission. | Same as expected. | Pass |
| Does score return to 0 after each incorrect identification of an interval? | Score should return to 0 each time an interval is incorrectly identified. | Same as expected. | Pass |
| Is each interval number matched to correct interval description? | Interval number for perfect unison = 0 <br><br> Interval number for minor 2nd = 1 or -1 <br><br> Interval number for major 2nd = 2 or -2 <br><br> Interval number for minor 3rd = 3 or -3 <br><br> Interval number for major 3rd = 4 or -4 <br><br> Interval number for perfect 4th = 5 or -5 <br><br> Interval number for augmented 4th = 6 or -6 <br><br> Interval number for diminished 5th = 6 or -6 <br><br> Interval number for perfect 5th = 7 or -7 <br><br> Interval number for minor 6th = 8 or -8 <br><br> Interval number for major 6th = 9 or -9 <br><br> Interval number minor 7th = 10 or -10 <br><br> Interval number for major 7th = 11 or -11 <br><br> Interval number for perfect octave = 12 or -12 <br><br> This will mean that the user will always be alerted that they are correct as long as they have selected the correct interval i.e. the interval descriptions assigned to each interval number are actually correct. | Same as expected. | Pass |
| Is Interval Master compatible with browsers other than Chrome? E.g. Microsoft Edge, Mozilla Firefox, Samsung Internet Browser | Site should appear the same on a variety of browsers. | Same as expected. | Pass |

***Preview of Responsive Site According to https://ui.dev/amiresponsive***

![Screenshot of site at different screen sizes](https://github.com/sonetto104/Peter-Regan-CI-PP2/blob/main/assets/images/responsive-preview-screenshot.png)

## Deployment

***How I Deployed the Project***
I visited my repository and pressed on the settings button. This brought me to a new page. On this new page there is a menu on the left hand side of the page. I clicked on the "Pages" option from this menu. Under "Source", I selected "main" as the branch from which to deploy the project from. I then clicked "Save" which automatically refreshed the page. After the few minutes required for Github to build the website, a link for the website appeared on this page.

***How to Run This Project From a Browser***

1. Install Google Chrome or Mozilla Firefox.
2. Install the Gitpod browser extension for your chosen browser.
3. Create a GitHub account and log into it.
4. Visit the repository for this project. It is called sonetto104/Peter-Regan-CI-PP2. You can also use this link to visit it: https://github.com/sonetto104/Peter-Regan-CI-PP2
5. Open this repository in Gitpod by clicking the green Gitpod button at the top right of the repository.
6. This will open a new workspace with the current state of the main branch of this repository.

***How to Run This Project Locally***

***Cloning the Repository***
1. Visit the Interval Master repository: https://github.com/sonetto104/Peter-Regan-CI-PP2
2. Click the "Code" dropdown box above the repository's file explorer and select the "Local" heading.
3. Underneath this, click the HTTPS subheading if it's not already selected.
4. Copy the link presented in the text field below this HTTPS subheading.
5. Open your preferred IDE and make sure it has support for Git.
6. Open the terminal, and create a directory where you can store the repository.
7. Type git clone and paste the previously copied text and press enter.
8.The repository will then be cloned to your selected directory.

***Manually Downloading the Repository***
1. Visit Interval Master GitHub repository: https://github.com/sonetto104/Peter-Regan-CI-PP2
2. Click the "Code" dropdown box next to the green Gitpod icon.
3. Click the "Download ZIP" option; this will download a copy of the selected branch's repository as a zip file.
4. Find the downloaded file on your your computer, and extract the ZIP to the folder where you would like to store the repository.

After either cloning or downloading the repository, you can have offline access to it by navigating to the directory where it was stored in your IDE.


## Acknowledgment of Code From Other Sources

This is generally commented in the relevant files but here is a list of sources for code that came from elsewhere:

1. The HTML and CSS code related to the modals is heavily dependent on code from this source: https://www.freecodecamp.org/news/how-to-build-a-modal-with-javascript/
2. A lot of the code that styles the h1, h2 and some of the p elements, as well as the quaver icon button comes from this source: https://codepen.io/mireille1306/pen/BawdXzY
3. The CSS code that styles the submit button and the select elements comes from this source: https://www.w3schools.com/css/tryit.asp?filename=trycss_buttons_animate3
4. The code for the event listener that monitors the user's selection from the select elements comes from this source: https://bobbyhadz.com/blog/javascript-select-onchange-get-value
5. The code for the score incrementor was taken directly from the Code Institute Love Maths Walkthrough Project.
6. The piano sounds came from a library belonging to the University of Iowa: https://theremin.music.uiowa.edu/MISpiano.html. I converted them from their original aiff. format.

## Issues With This Project That Could Be Improved

I suspect there are more efficient ways to write some of the code I have written in my script.js file due to some blocks being repeated, however, I am not yet fluent enough with Javascript to be able to figure out what they are right now. Given the time frame for this project, I feel it is more likely that I would confuse and introduce problems to code that already works by trying to edit it at this tage. However, in future it would be worth exploring how I could make the script.js file more economical and easier to read.

***Special Note Regarding Naming of Audio Tags in Assets Folder***
Though Code Institute recommends not using capital letters in file names in the marking criteria for this project, I do use capital letters in the naming of notes. This is because in the absence of being able to use a musical flat symbol in the filenames, I am using 'b' to stand for flat instead. However if I used all lower case letters to name notes in combination with this 'b', it would make it far more difficult to read the note names. Furthermore, it is conventional in music theory to write note names with capital letters. 
So while I do use capital letters which is not recommended, I argue that it is the lesser of two evils in this case and I still do not use spaces, as recommended, to facilitate ease using these files elsewhere.

## Scope for Future Additions To Project

1. This site could have varying difficulty levels. Giving the user the option to play the notes simultaneously would add a grade of difficulty. Offering the user three notes instead of a pair would require them to identify two intervals rather than one, again adding a grade of difficulty. These could also be played separately or simultaneously. This would involve the addition of further controls and Javascript in order to allow the user to choose the conditions of difficulty.
2. A wider range of notes could be added. Currently this site tests intervals only within the range of one octave. Expanding the range by one octave more would allow the user to also test their recognition of compound intervals. This would also increase the frequency of some intervals which are currently underrepresented. Having only a one octave range limits the likely frequency of 7th and octave intervals.
3. A leaderboard could be built and attached to the website, allowing users to record their scores by username.
Though I was aware of these possibilities in building the project, I decided that they were slightly too ambitious for my current Javascript abilities. However, I would enjoy adding them in future.

