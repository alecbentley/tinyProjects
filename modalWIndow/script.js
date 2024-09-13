"use strict";

/**========================================================================
 **                      fetch DOM elements
 *========================================================================**/

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");

const btnsOpenModal = document.querySelectorAll(".show-modal"); // select All the buttons

/**========================================================================
 *todo                   declare functions
 *========================================================================**/

function closeModal() {
	modal.classList.add("hidden");
	overlay.classList.add("hidden");
}

function openModal() {
	modal.classList.remove("hidden");
	overlay.classList.remove("hidden");
}
/**========================================================================
 **                      modal window script
 *========================================================================**/

//after selecting multiple elements with the same class, we can do something to each of them at the same time as a group.
for (let i = 0; i < btnsOpenModal.length; i++) {
	//attach eventListener to each of the buttons
	btnsOpenModal[i].addEventListener("click", openModal);
}

// DO NOT CALL THE FUNCTION, only pass it as a reference without parenthases.
btnCloseModal.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);

//add a keyboard 'Esc' key listener
document.addEventListener("keydown", function (myEvent) {
	if (myEvent.key === "Escape" && !modal.classList.contains("hidden")) {
		closeModal();
	}
});
