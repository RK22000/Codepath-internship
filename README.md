# Pre-work - _Memory Game_

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program.

Submitted by: **Rahul Kandekar**

Time spent: **5** hours spent in total

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

* [ ] Computer picks a different pattern each time the game is played
* [ ] Player only loses after 3 mistakes (instead of on the first mistake)

The following **additional** features are implemented:

- [ ] Game buttons can not be clicked while the clue sequence is being played. This prevents the hack of 
just clicking buttons as the sequence is being played
- [ ] Pattern length can be selected from a drop down menu.

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![](https://cdn.glitch.com/4309f3c7-a89b-4e61-8cc7-d2046ecbc7e7%2Fdemo-gif.gif?v=1616625233281)

## Reflection Questions

1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.  
   [  Disabeling CSS buttons - https://stackoverflow.com/questions/46566019/css-button-set-to-unclickable  
   Selection list - http://corelangs.com/js/progs/options.html  
   Bold Text - https://www.javatpoint.com/how-to-bold-text-in-css  ]

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it?  
   [  I was able to comeplete the basic version just fine without any trouble and adding the extra addon was a similar experience. Although 
   thinking back to when I started this project, I felt I would have a tough time with this project because I had negligible web app 
   developemnt experience. But while following the instructions for the basic version I got into the zone by working through the project
   step by step, and this momentum kept up through adding the addons to the basic version. I feel like because I kept breaking down 
   tasks into smaller steps and only kept thinking about a few steps at a time the complete project felt only as dificult as it was to do
   small simple steps.  ]

3. What questions about web development do you have after completing your submission?  
   [  This was the first time I wrote code that does not act instantaneously compared to the user. So I thought that the playClueSequence 
   function would light up buttons and play sounds within the loop and pause the code execution till for the breaks between the different button clicks. 
   So it was interesting to see that the function instead arranged a sequence of events that would be executed seperately from the playClueSequence execution.
   I'm now thinking about whether pausing code execution and preparing a s seperated delayed sequence of events are like 2 different paradigm for delayed 
   user interactions, and what kind of delayed interactions is suited which paradigm.  ]

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific.  
   [  I would like to add a timer that counts down the time the player has to click on a button. The player looses if they miss the timer 
   and the timer will drop a few second on every incorrect attempt I would also make it so when the clue sequence is being played each 
   button click is played faster than the previous button click. I think this will have a more interesting feel than simply 
   increasing the playback speed  ]

## License

    Copyright [Rahul Kandekar]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
