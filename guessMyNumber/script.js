"use strict";

/**========================================================================
 **                            fetch DOM
 *========================================================================**/

const messageEl = document.querySelector(".message");
const scoreEL = document.querySelector(".score");
const bigNumberEl = document.querySelector(".number");
const highscoreEl = document.querySelector(".highscore");
const inputField = document.querySelector(".guess");
const checkButton = document.querySelector(".check");
const pageBody = document.querySelector("body");
const againButton = document.querySelector(".again");

/**========================================================================
 **                       Generate random number 1-20
 *========================================================================**/

let randomNumber;
function randoNum() {
	randomNumber = Math.trunc(Math.random() * 20) + 1;
}
randoNum();

console.log(`super secret number is ${randomNumber}`);

/**========================================================================
 **                            declare variables
 *========================================================================**/

let score = 20; //set the initial score state variable.

let finalScoresArray = []; //for collecting all the scores.
let max = []; //will collect the highest score when 'again' button clicked.

/**========================================================================
 *TODO                         "Check" Button logic
 *========================================================================**/

//eventListener not added here because it needs to be 'click' & 'Enter'. Scroll further down to see the eventListener. This code goes into eventListener.
function handleInput() {
	const guess = parseInt(inputField.value); //convert input field string to number

	//check to make sure user has input a value
	if (!guess) {
		messageEl.textContent = `please input a number`;

		//otherwise, if user guesses Secret Number
	} else if (guess === randomNumber) {
		pageBody.style.backgroundColor = "#60b347";
		messageEl.textContent = `You guessed correct!!!`;
		bigNumberEl.textContent = randomNumber;
		finalScoresArray.push(score); //push score to array
		console.log(`FINAL SCORES ARE: ${finalScoresArray}`);
		inputField.value = "";

		//or if user guesses wrong
	} else if (guess !== randomNumber) {
		if (score > 0) {
			score--; //subtract 1 from score, only if score is above 0
		}

		scoreEL.textContent = `${score}`;
		inputField.value = "";

		if (guess > randomNumber) {
			if (score > 1) {
				//make sure score is above 0 first, then activate code
				messageEl.textContent = `You guessed too high`;
			}
		} else if (guess < randomNumber) {
			if (score > 1) {
				//make sure score is above 0 first, then activate code
				messageEl.textContent = `You guessed too low`;
			}
		}
	}

	if (score === 0) {
		scoreEL.textContent = `0`;
		messageEl.textContent = `You loose!`;
		inputField.value = "";
	}
}
/**========================================================================
 *?                            "Check" button eventListeners
 *========================================================================**/

checkButton.addEventListener("click", handleInput);

document.addEventListener("keydown", function (event) {
	if (event.key === "Enter") {
		handleInput();
	}
});

/**========================================================================
 *?                            "Again" button eventListener
 *========================================================================**/

againButton.addEventListener("click", function () {
	console.log(`New Game ===============`);
	messageEl.textContent = `Let's play again. Guess a number!`;
	bigNumberEl.textContent = `?`;

	//loop over array of scores and determine highest score. Store in max variable
	for (let i = 0; i < finalScoresArray.length; i++) {
		if (finalScoresArray[i] > max) {
			max = finalScoresArray[i];
		}
	}
	console.log(`forloop determines highest score as: ${max}`);

	highscoreEl.textContent = `${max}`;
	console.log(`max = ${max}`);
	score = 20;
	scoreEL.textContent = `${score}`;

	randoNum(); //set new random number

	pageBody.style.backgroundColor = "#222";

	console.log(`new super secret number: ${randomNumber}`);
});
