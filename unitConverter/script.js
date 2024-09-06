"use strict";

/**========================================================================
 **                        fetch DOM, declare variables
 *========================================================================**/

/*-------------------------------- Input & Button ------------------------------*/

const convertButton = document.querySelector(".button");
const inputBox = document.querySelector("#number-to-convert");

/*-------------------------------- Output fields ------------------------------*/

const lengthDiv = document.querySelector("#length");
const volumeDiv = document.querySelector("#volume");
const massDiv = document.querySelector("#mass");

/**========================================================================
 **                            eventListener for button
 *========================================================================**/

convertButton.addEventListener("click", function () {
	console.log(`button clicked`);
	convert();
	inputBox.value = "";
});

/**========================================================================
 **                            conversion function
 *========================================================================**/

function convert() {
	const metersFeet = (inputBox.value * (3.2808 / 1)).toFixed(3);
	const feetMeter = (inputBox.value * (0.3048 / 1)).toFixed(3);
	const galLiter = (inputBox.value * (3.7854 / 1)).toFixed(3);
	const litersGal = (inputBox.value * (0.2642 / 1)).toFixed(3);
	const poundKilo = (inputBox.value * (0.453592 / 1)).toFixed(3);
	const kiloPound = (inputBox.value * (2.20462 / 1)).toFixed(3);

	lengthDiv.textContent = `${inputBox.value} meters = ${metersFeet} feet | ${inputBox.value} feet = ${feetMeter} meters`;
	volumeDiv.textContent = `${inputBox.value} liters = ${litersGal} gallons | ${inputBox.value} gallons = ${galLiter} liters`;
	massDiv.textContent = `${inputBox.value} kilos = ${kiloPound} pounds | ${inputBox.value} pounds = ${poundKilo} kilos`;
}
