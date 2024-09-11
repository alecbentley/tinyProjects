"use strict";

/**========================================================================
 **                            fetch DOM
 *========================================================================**/

let messageEl = document.querySelector(".message").textContent;
let scoreEL = document.querySelector(".score").textContent;
let bigNumberEl = document.querySelector(".number").textContent;
const highscoreEl = document.querySelector(".highscore");
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
		messageEl = `please input a number`;
	} else if (guess === randomNumber) {
		messageEl = `You guessed correct!!!`;
		bigNumberEl = randomNumber;
		inputField.value = "";
	} else if (guess > randomNumber) {
		if (score > 1) {
			messageEl = `You guessed too high`;
			score--;
			scoreEL = `${score}`;
			inputField.value = "";
		} else {
			scoreEL = `0`;
			messageEl = `You loose!`;
		}
	} else if (guess < randomNumber) {
		if (score > 1) {
			messageEl = `You guessed too low`;
			score--;
			scoreEL = `${score}`;
			inputField.value = "";
		} else {
			scoreEL = `0`;
			messageEl = `You loose!`;
		}
	}
});
