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

/**========================================================================
 **                       Generate random number 1-20
 *========================================================================**/

const randomNumber = Math.trunc(Math.random() * 20) + 1;
console.log(randomNumber);

/**========================================================================
 **                            declare state variable
 *========================================================================**/

let score = 20;

/**========================================================================
 *TODO                            Button logic
 *========================================================================**/

//eventListener not added here because it needs to be 'click' & 'Enter'. Scroll further down to see the eventListener
function handleInput() {
	const guess = parseInt(inputField.value); //convert input field string to number

	//check to make sure user has input a value
	if (!guess) {
		messageEl.textContent = `please input a number`;

		//otherwise, if user guesses correct
	} else if (guess === randomNumber) {
		pageBody.style.backgroundColor = "#60b347";
		messageEl.textContent = `You guessed correct!!!`;
		bigNumberEl.textContent = randomNumber;
		inputField.value = "";

		//otherwise, if user guesses too high
	} else if (guess > randomNumber) {
		if (score > 1) {
			//make sure score is above 0 first, then activate code
			messageEl.textContent = `You guessed too high`;
			score--;
			scoreEL.textContent = `${score}`;
			inputField.value = "";
		} else {
			//if user loses do this
			scoreEL.textContent = `0`;
			messageEl.textContent = `You loose!`;
		}

		//otherwise, if user guesses too low
	} else if (guess < randomNumber) {
		if (score > 1) {
			//make sure score is above 0 first, then activate code
			messageEl.textContent = `You guessed too low`;
			score--;
			scoreEL.textContent = `${score}`;
			inputField.value = "";
		} else {
			//if user loses do this
			scoreEL.textContent = `0`;
			messageEl.textContent = `You loose!`;
		}
	}
}

/**========================================================================
 **                            "Check" button eventListener
 *========================================================================**/

checkButton.addEventListener("click", handleInput);

document.addEventListener("keydown", function (event) {
	if (event.key === "Enter") {
		handleInput();
	}
});
