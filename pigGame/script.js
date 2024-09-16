"use strict";

/*---------------------- fetch DOM elemements --------------------*/
const newGameButton = document.querySelector(".btn--new");
const rollDiceButton = document.querySelector(".btn--roll");
const holdButton = document.querySelector(".btn--hold");

/**========================================================================
 **                            script
 *========================================================================**/

let player1isActive = document.querySelector(".player--0").classList.contains("player--active");
let player2isActive = document.querySelector(".player--1").classList.contains("player--active");

/*------------------ start a new game on refresh-----------------*/

let activePlayer = 1;
let diceRoll;
let diceRollArray = [];
document.querySelector(".dice").src = `assets/dice-0.png`;
playerScoreboard(12, "0");
playerCurrentScore(12, "0");
let player1scoreboardAccumulator = 0;
let player2scoreboardAccumulator = 0;

/*------------------ ""Roll Dice" button -----------------*/

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

	if (player1isActive) {
		player1scoreboardAccumulator += diceRollsSum;
	} else if (player2isActive) {
		player2scoreboardAccumulator += diceRollsSum;
	}

	console.log(`======================`);
});

/*------------------ "Hold" button -----------------*/

holdButton.addEventListener("click", function () {
	console.log(`======== HOLD ========`);
	ActivePlayerChecker();

	if (activePlayer === 1) {
		document.querySelector("#score--0").textContent = player1scoreboardAccumulator;
		playerCurrentScore(1, "0");
		diceRollArray.length = 0;
	} else if (activePlayer === 2) {
		document.querySelector("#score--1").textContent = player2scoreboardAccumulator;
		playerCurrentScore(2, "0");
		diceRollArray.length = 0;
	}

	if (player1scoreboardAccumulator >= 100) {
		document.querySelector("#score--0").textContent = `YOU WIN!`;
		rollDiceButton.disabled = true;
	} else if (player1scoreboardAccumulator >= 100) {
		document.querySelector("#score--1").textContent = `YOU WIN!`;
		rollDiceButton.disabled = true;
	} else if (player1scoreboardAccumulator < 100 && player2scoreboardAccumulator < 100) {
		switchPlayer();
	}
});

/*================== "New Game" button =================*/

newGameButton.addEventListener("click", function () {
	diceRoll;
	diceRollArray = [];
	document.querySelector(".dice").src = `assets/dice-0.png`;
	playerScoreboard(12, "0");
	playerCurrentScore(12, "0");
	player1scoreboardAccumulator = 0;
	player2scoreboardAccumulator = 0;
	document.querySelector(".player--0").classList.add("player--active");
	document.querySelector(".player--1").classList.remove("player--active");
});

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
