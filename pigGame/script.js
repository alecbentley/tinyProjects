"use strict";

/**========================================================================
 **                            fetch DOM elements
 *========================================================================**/

const newGameButton = document.querySelector(".btn--new");
const rollDiceButton = document.querySelector(".btn--roll");
const holdButton = document.querySelector(".btn--hold");

/**========================================================================
 *todo                         declare functions
 *========================================================================**/

function playerScoreboard(playerNumber, string) {
	if (playerNumber === 1) {
		document.querySelector("#score--0").textContent = string;
	} else if (playerNumber === 2) {
		document.querySelector("#score--1").textContent = string;
	}
}

function playerCurrentScore(playerNumber, string) {
	if (playerNumber === 1) {
		document.querySelector("#current--0").textContent = string;
	} else if (playerNumber === 2) {
		document.querySelector("#current--1").textContent = string;
	}
}

function diceDisplay(diceRoll) {
	document.querySelector(".dice").src = `assets/dice-${diceRoll}.png`;
}
