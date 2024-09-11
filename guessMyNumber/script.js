"use strict";

/**========================================================================
 **                            fetch DOM
 *========================================================================**/

const messageEl = document.querySelector(".message");
const scoreEL = document.querySelector(".score");
const highscoreEl = document.querySelector(".highscore");
const bigNumberEl = document.querySelector(".number");
const inputField = document.querySelector(".guess");
const checkButton = document.querySelector(".check");

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
 *?                            checkButton eventListener
 *========================================================================**/

checkButton.addEventListener("click", function () {
	const guess = parseInt(inputField.value);
	if (!guess) {
		messageEl.textContent = `please input a number`;
	} else if (guess === randomNumber) {
		messageEl.textContent = `You guessed correct!!!`;
		bigNumberEl.textContent = randomNumber;
		inputField.value = "";
	} else if (guess > randomNumber) {
		messageEl.textContent = `You guessed too high`;
		score--;
		scoreEL.textContent = `${score}`;
		inputField.value = "";
		console.log(score);
	} else if (guess < randomNumber) {
		messageEl.textContent = `You guessed too low`;
		score--;
		scoreEL.textContent = `${score}`;
		inputField.value = "";
		console.log(score);
	}
});
