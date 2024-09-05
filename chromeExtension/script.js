"use strict";

/**========================================================================
 **                     Declare variables, fetch DOM
 *========================================================================**/
let myLeads = [];
const inputEl = document.querySelector("#input-el"); //input field
const inputBtn = document.querySelector("#button"); //button
const tabBtn = document.querySelector("#tab-btn"); // save tab button
const deleteBtn = document.querySelector("#delete-btn"); //delete button
const ulEl = document.querySelector("#ul-el"); //unordered list div

// check localStorage. If something there, parse it into an array.
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

// then fill the empty myLeads array with the stuff from localStorage.
// this is to add persistence across refreshs.
if (leadsFromLocalStorage) {
	myLeads = leadsFromLocalStorage;
	renderLeads(myLeads);
}

/**========================================================================
 **                     eventListener for 'Save Input' button
 *========================================================================**/
inputBtn.addEventListener("click", function () {
	const userInput = inputEl.value;
	// force user to input valid url
	if (userInput.indexOf("www") === -1) {
		alert(`Please enter a valid URL starting with: www...`);
		return;
	}
	myLeads.push(userInput); // push user input into array
	localStorage.setItem("myLeads", JSON.stringify(myLeads)); // push array to localStorage

	inputEl.value = ""; // clear the input field

	console.log(localStorage.getItem("myLeads")); //verify localStorage string injection
	console.log(myLeads); // verify localStorage reverse array injection

	renderLeads(myLeads);
});

/**========================================================================
 **                 eventListener for 'Save Tab' button
 *========================================================================**/

// use Chrome API to save URL of active browser tab into localStorage
tabBtn.addEventListener("click", function () {
	chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
		myLeads.push(tabs[0].url);
		localStorage.setItem("myLeads", JSON.stringify(myLeads));
		renderLeads(myLeads);
	});
});

/**========================================================================
 **                 <li> the saved items to the <ul> div
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
 **                 eventListener for 'Delete All' button
 *========================================================================**/

deleteBtn.addEventListener("click", function () {
	ulEl.textContent = ""; //clear DOM
	myLeads = []; // reset array
	localStorage.clear(); //clear localStorage

	//confirmation
	console.log(`the myLeads array: ${myLeads}`);
	console.log(`the localStorage: ${localStorage}`);
});
