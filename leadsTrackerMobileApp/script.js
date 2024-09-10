"use strict";

/**========================================================================
 **                       Initialize Firebase channel
 *========================================================================**/

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import {
	getDatabase,
	ref,
	push,
	onValue,
	remove,
} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-database.js";
import { databaseUrl } from "./config.js";

const firebaseConfig = {
	databaseURL: databaseUrl,
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const referenceInDB = ref(database, "inputValues");

/**========================================================================
 **                    Declare variables, fetch DOM
 *========================================================================**/
let myLeads = [];
const inputEl = document.querySelector("#input-el"); //input field
const inputBtn = document.querySelector("#button"); //button
const deleteBtn = document.querySelector("#delete-btn"); //delete button
const ulEl = document.querySelector("#ul-el"); //unordered list div

/**========================================================================
 **       Interact with Firebase (Firebase built-in eventListener)
 *========================================================================**/

//pull Firebase data
onValue(referenceInDB, function (snapshot) {
	const snapshotDoesExist = snapshot.exists(); //check Firebase if database exists
	if (snapshotDoesExist) {
		const snapshotValues = snapshot.val(); //pull values from Firebase
		const transformFirebase = Object.values(snapshotValues); //transform pulled object values into an array
		myLeads = transformFirebase;
		renderLeads(myLeads);
	}
});

/**========================================================================
 *?                     eventListener for 'Save Input' button
 *========================================================================**/
inputBtn.addEventListener("click", function () {
	const userInput = inputEl.value;
	// force user to input valid url
	if (userInput.indexOf("www") === -1) {
		alert(`Please enter a valid URL starting with: www...`);
		return;
	}
	push(referenceInDB, userInput); //push user input to Firebase

	inputEl.value = ""; // clear the input field

	// renderLeads(myLeads);
});

/**========================================================================
 *TODO      create function:  <li> the saved items to the <ul> div
 *========================================================================**/
function renderLeads(leadsArray) {
	let listItem = "";
	for (let i = 0; i < leadsArray.length; i++) {
		// loop over saved inputs array
		listItem += `
			<li>
				<a href='${encodeURIComponent(leadsArray[i])}' target='_blank'>${leadsArray[i]}</a>
			</li>
		`;
		// each time add a <li> from array to the <ul> div (collect in variable, not publish to DOM)
	}
	ulEl.innerHTML = listItem; // finally, add the <li>'s to the DOM
}

/**========================================================================
 *?                 eventListener for 'Delete All' button
 *========================================================================**/

deleteBtn.addEventListener("click", function () {
	remove(referenceInDB); //remove data from Firebase
	ulEl.innerHTML = ""; //clear DOM
});
