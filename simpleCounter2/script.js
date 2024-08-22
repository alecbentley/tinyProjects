"use strict";

/**========================================================================
 **                            Get DOM elements
 *========================================================================**/

const message = document.getElementById("message");

const homeNumber = document.getElementById("homeNumberBox");
const guestNumber = document.getElementById("guestNumberBox");

/**========================================================================
 **                            Functions
 *========================================================================**/
function home1() {
	homeNumber.textContent++;
	message.textContent = `Home team scored!`;
}

function home2() {
	let x = parseInt(homeNumber.textContent);
	let y = (x += 2);
	homeNumber.textContent = y;
	message.textContent = `2 points for Home team!`;
}

function home3() {
	let x = parseInt(homeNumber.textContent);
	let y = (x += 3);
	homeNumber.textContent = y;
	message.textContent = `Home team got 3 points!`;
}

function guest1() {
	guestNumber.textContent++;
	message.textContent = `Away team scored! try harder`;
}

function guest2() {
	let x = parseInt(guestNumber.textContent);
	let y = (x += 2);
	guestNumber.textContent = y;
	message.textContent = `2 points for the Away team! boo`;
}

function guest3() {
	let x = parseInt(guestNumber.textContent);
	let y = (x += 3);
	guestNumber.textContent = y;
	message.textContent = `Oh no! 3 points for the away team`;
}

function resetButton() {
	let a = parseInt(homeNumber.textContent);
	let b = parseInt(guestNumber.textContent);
	a = 0;
	b = 0;
	homeNumber.textContent = a;
	guestNumber.textContent = b;
	message.textContent = `New Game starting!`;
}
/**========================================================================
 **                            SCRIPT
 *========================================================================**/

homeNumber.textContent = 0;
guestNumber.textContent = 0;
message.textContent = `Enjoy the game!`;

document.getElementById("resetButton").addEventListener("click", resetButton);
