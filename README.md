![Interval Master Favicon](https://github.com/sonetto104/Peter-Regan-CI-PP2/blob/main/assets/images/favicon.ico.png)

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
For Interval Master I used bright colours. The background has a gradient effect using blue and pink. Text elements are white and have a red and orange text-shadow effect that makes them more dynamic looking and also makes the brightly coloured text more easy to read and differentiate from the colourful background. Buttons and select elements are also red but change to a very contrasting bright green when the user hovers over them. This is to allow the user to easily identify what choice they are making. As this website does serve a particularly serious purpose, I chose these bright colours to create an atmosphere of fun so the user is encouraged to think of Interval Master as a game rather than as a dry music theory exercise.

![Screenshot of Page](https://github.com/sonetto104/Peter-Regan-CI-PP2/blob/main/assets/images/interval-master-page-screenshot.png)

***Fonts***
The font I used for Interval Master is "Righteous" which I took from Google Fonts. As there are so few text elements in this webpage, I decided not to choose a different font family for heading and non-heading elements, but just used differing font weights and sizes. I chose this font as it is strong and easily legible, but it is also quite rounded which helps contribute to the atmosphere of fun I referred to above in the Colour Scheme section. I used a skew effect on the Interval Master heading, again to suggest the idea of something dynamic and fun rather than static and boring.

***Modals***
I used modals rather than browser alerts to give the user feedback and introduce them to website as they are nicer to look at and keep the user's attention focused within the website rather than on the idea of their browser as a vehicle that could take them elsewhere. It also makes communication from the page to the user visually consistent with the rest of the site. Purely for the purposes of legibility, I made the modals black and white. Having tried to use some of the colours already in use in the website, I decided they were too distracting given how many bright colours there are already present in the page, and this made the modals difficult to read.

## Project Features
The features most important to this project are the random note pair generator, the interval number calculator, the event listeners that listen to the user's answer and the event listeners that tell the user whether they were correct or not and decided whether to generate a new note pair or not.

***Random Note Pair Generator***
There are 13 audio tags with player controls, each containing a note sounding for approximately one second, in the HTML file. The range of these notes span one octave.
The interval is generated from these audio tags according to these steps:
1. The browser listens for all the DOM content to be loaded.
2. A function randomly selects two notes from the audio tags (which have been converted into an array) and pushes them into an empty array called "randomNotesArray".
3. There is an event listener on the large beamed quaver button in the middle of the page. When pressed, the second last and last items in the randomNotesArray one second apart.

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

