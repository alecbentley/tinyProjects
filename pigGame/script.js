"use strict";

/*---------------------- fetch DOM elemements --------------------*/
const newGameButton = document.querySelector(".btn--new");
const rollDiceButton = document.querySelector(".btn--roll");
const holdButton = document.querySelector(".btn--hold");

/**========================================================================
 *todo                      FUNCTION DECLARATIONS
 *========================================================================**/

function playerScoreboard(playerNumber, string) {
	if (playerNumber === 1) {
		document.querySelector("#score--0").textContent = string;
	} else if (playerNumber === 2) {
		document.querySelector("#score--1").textContent = string;
	} else if (playerNumber === 12) {
		document.querySelector("#score--0").textContent = string;
		document.querySelector("#score--1").textContent = string;
	}
}

function playerCurrentScore(playerNumber, string) {
	if (playerNumber === 1) {
		document.querySelector("#current--0").textContent = string;
	} else if (playerNumber === 2) {
		document.querySelector("#current--1").textContent = string;
	} else if (playerNumber === 12) {
		document.querySelector("#current--0").textContent = string;
		document.querySelector("#current--1").textContent = string;
	}
}

function switchPlayer() {
	//switch the CSS properties between players.
	document.querySelector(".player--0").classList.toggle("player--active");
	document.querySelector(".player--1").classList.toggle("player--active");
}

function rollTheDice() {
	diceRoll = Math.floor(Math.random() * 6) + 1;
}
function displayTheDice() {
	document.querySelector(".dice").src = `assets/dice-${diceRoll}.png`;
}

function ActivePlayerChecker() {
	//checks who is the active player and assigns boolean to both variables.
	player1isActive = document.querySelector(".player--0").classList.contains("player--active");
	player2isActive = document.querySelector(".player--1").classList.contains("player--active");
	console.log(`player1isActive is ${player1isActive}, player2isActive is ${player2isActive}`);

	//based on that boolean, modify activePlayer variable to be either 1 or 2.
	if (player1isActive) {
		activePlayer = 1;
	} else if (player2isActive) {
		activePlayer = 2;
	}
}

/**========================================================================
 **                            script
 *========================================================================**/

let player1isActive = document.querySelector(".player--0").classList.contains("player--active");
let player2isActive = document.querySelector(".player--1").classList.contains("player--active");

/*------------------ start a new game on refresh-----------------*/

let activePlayer = 1;
let diceRoll;
const diceRollArray = [];
playerScoreboard(12, "0");
playerCurrentScore(12, "0");

/*------------------ ""roll dice" button -----------------*/

rollDiceButton.addEventListener("click", function () {
	rollTheDice();
	displayTheDice();
	diceRollArray.push(diceRoll);
	console.log(`diceRollArray is currently: ${diceRollArray}`);
	let diceRollsSum = 0;

	ActivePlayerChecker();
	console.log(`activePlayer is player ${activePlayer}`);

	if (diceRoll === 1 && player1isActive) {
		playerCurrentScore(1, "0");
		switchPlayer();
		diceRollArray.length = 0;
		console.log(`Player 1 rolled a 1, switch player`);
	} else if (diceRoll === 1 && player2isActive) {
		playerCurrentScore(2, "0");
		switchPlayer();
		diceRollArray.length = 0;
		console.log(`Player 2 rolled a 1, switch player`);
	}

	for (let i = 0; i < diceRollArray.length; i++) {
		diceRollsSum += diceRollArray[i];
		console.log(`diceRollsSum in the forLoop is ${diceRollsSum}`);
	}

	playerCurrentScore(activePlayer, diceRollsSum);

	console.log(`======================`);
});
