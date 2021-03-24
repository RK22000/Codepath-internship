# Pre-work - _Memory Game_

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program.

Submitted by: **Rahul Kandekar**

Time spent: **1.5** hours spent in total

Link to project: (https://github.com/RK22000/Codepath-internship)

## Required Functionality

The following **required** functionality is complete:

- [ ] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
- [ ] "Start" button toggles between "Start" and "Stop" when clicked.
- [ ] Game buttons each light up and play a sound when clicked.
- [ ] Computer plays back sequence of clues including sound and visual cue for each button
- [ ] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess.
- [ ] User wins the game after guessing a complete pattern
- [ ] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [ ] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [ ] Buttons use a pitch (frequency) other than the ones in the tutorial
* [ ] More than 4 functional game buttons
* [ ] Playback speeds up on each turn
* [ ] Computer picks a different pattern each time the game is played
* [ ] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] Game buttons can not be clicked while the clue sequence is being played.

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![](https://cdn.glitch.com/4309f3c7-a89b-4e61-8cc7-d2046ecbc7e7%2Fdemo-gif.gif?v=1616605044882)

## Reflection Questions

1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.
   [Disabeling CSS buttons - StackOverflow https://stackoverflow.com/questions/46566019/css-button-set-to-unclickable , 
   ]

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)
   [I was able to comeplete the basic version just fine without any trouble]

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)
   [This was the first time I wrote code that does not act instantaneously compared to the user. So I thought that the playClueSequence 
   function would light up buttons and play sounds within the loop and pause the code execution till for the breaks between the different button clicks. 
   So it was interesting to see that the function instead arranged a sequence of events that would be executed seperately from the playClueSequence execution.
   I'm now thinking about whether pausing code execution and preparing a s seperated delayed sequence of events are like 2 different paradigm for delayed 
   user interactions, and what kind of delayed interactions is suited which paradigm.]

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)
   [I would make it so that ~~when the clue sequence is being played the buttons can't be clicked~~, because the game registers 
   clicks while the clue sequence is being played and this means that the game can be hacked by clicking the buttons along 
   with the sequence. I would also speed up the sequence as its played so that on each clue the sequence starts slwo and 
   progressively gets faster after each button light up. Finally I would make it so that a random pattern is used and its length 
   can be entered/selected by the user]

## License

    Copyright [YOUR NAME]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
