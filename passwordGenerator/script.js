"use strict";

// prettier-ignore
const charset = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const inputField = document.querySelector("#password-length");
let parsedInputField;

/**
 * 	An event listener function to ensure the user cannot input values outside the allowed range.
 */
inputField.addEventListener("input", function () {
	let value = parseInt(this.value);
	if (value < 13 || value > 19) {
		this.value = parsedInputField;
	} else {
		parsedInputField = value;
	}
});

const passwordField1 = document.querySelector(".passwordField1");
const passwordField2 = document.querySelector(".passwordField2");
passwordField1.textContent = `password 1`;
passwordField2.textContent = `password 2`;

/**
 * Generates the password using predefined length using characters from the charset variable.
 */
function generate(length) {
	let password = "";
	for (let i = 0; i < length; i++) {
		let randomIndex = charset[Math.floor(Math.random() * charset.length)];
		password += randomIndex;
	}
	return password;
}

/**
 * Populates the two password fields with randomly generated strings
 * of the same length, given by the value of the input field.
 */
function fillPasswords() {
	const password1 = generate(parsedInputField);
	const password2 = generate(parsedInputField);
	passwordField1.textContent = password1;
	passwordField2.textContent = password2;
	console.log(`password 1 length is ${password1.length} chars`);
	console.log(`password 2 length is ${password2.length} chars`);
}

/**
 *	Copies the password to the clipboard
 */
function copy() {
	const passwordField =
		document.querySelector(".passwordField1").textContent ===
		document.activeElement.textContent
			? document.querySelector(".passwordField1")
			: document.querySelector(".passwordField2");
	navigator.clipboard.writeText(passwordField.textContent);
	console.log(
		`copied password ${
			passwordField.textContent === passwordField1.textContent ? 1 : 2
		}`
	);
}
