"use strict";

/**========================================================================
 **                            Fetch DOM elements
 *========================================================================**/

const message = document.getElementById("message");

const homeNumber = document.getElementById("homeNumberBox");
const guestNumber = document.getElementById("guestNumberBox");

/**========================================================================
 **                            Activate Event Listener
 *========================================================================**/

const homeNumberBox = document.querySelector("#homeNumberBox");
const guestNumberBox = document.querySelector("#guestNumberBox");

const observer = new MutationObserver((mutationsList, observer) => {
	const homeValue = parseInt(homeNumberBox.innerHTML);
	const guestValue = parseInt(guestNumberBox.innerHTML);

	if (homeValue >= 9) {
		console.log(`9 hit on home`);
		message.innerHTML = `HOME TEAM WON! new game`;
		gameOver();
		// observer.disconnect();
	} else if (guestValue >= 9) {
		console.log(`9 hit on guest`);
		message.innerHTML = `GUEST TEAM WON! new game`;
		gameOver();
		// observer.disconnect();
	}
});

const config = { childList: true, subtree: true };

observer.observe(homeNumberBox, config);
observer.observe(guestNumberBox, config);

/**========================================================================
 **                            Functions
 *========================================================================**/

function home1() {
	let x = parseInt(homeNumber.innerHTML++);
	let y = (x += 1);
	message.innerHTML = `Home team scored!`;
	console.log(`The ${typeof x} is ${x}, homeScore is ${y}`);
}

function home2() {
	let x = parseInt(homeNumber.innerHTML);
	let y = (x += 2);
	homeNumber.innerHTML = y;
	message.innerHTML = `2 points for Home team!`;
	console.log(`The ${typeof x} is ${x}, homeScore is ${y}`);
}

function home3() {
	let x = parseInt(homeNumber.innerHTML);
	let y = (x += 3);
	homeNumber.innerHTML = y;
	message.innerHTML = `Home team got 3 points!`;
	console.log(`The ${typeof x} is ${x}, homeScore is ${y}`);
}

function guest1() {
	let x = parseInt(guestNumber.innerHTML++);
	let y = (x += 1);
	message.innerHTML = `Away team scored! try harder`;
	console.log(`The ${typeof x} is ${x}, guestScore is ${y}`);
}

function guest2() {
	let x = parseInt(guestNumber.innerHTML);
	let y = (x += 2);
	guestNumber.innerHTML = y;
	message.innerHTML = `2 points for the Away team! boo`;
	console.log(`The ${typeof x} is ${x}, guestScore is ${y}`);
}

function guest3() {
	let x = parseInt(guestNumber.innerHTML);
	let y = (x += 3);
	guestNumber.innerHTML = y;
	message.innerHTML = `Oh no! 3 points for the away team`;
	console.log(`The ${typeof x} is ${x}, guestScore is ${y}`);
}

function resetButton() {
	let a = parseInt(homeNumber.innerHTML);
	let b = parseInt(guestNumber.innerHTML);
	a = 0;
	b = 0;
	homeNumber.innerHTML = a;
	guestNumber.innerHTML = b;
	message.innerHTML = `New Game starting!`;
	console.log(typeof a, typeof b, a, b);
}

function gameOver() {
	let a = parseInt(homeNumber.innerHTML);
	let b = parseInt(guestNumber.innerHTML);
	a = 0;
	b = 0;
	homeNumber.innerHTML = a;
	guestNumber.innerHTML = b;
}

/**========================================================================
 **                            SCRIPT
 *========================================================================**/

document.getElementById("resetButton").addEventListener("click", resetButton);
