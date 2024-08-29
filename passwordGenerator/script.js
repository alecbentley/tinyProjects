"use strict";

// prettier-ignore
const charset = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const passwordField1 = document.querySelector(".passwordField1");
const passwordField2 = document.querySelector(".passwordField2");
passwordField1.textContent = `password 1`;
passwordField2.textContent = `password 2`;

function generate(length) {
	let password = "";
	for (let i = 0; i < length; i++) {
		let randomIndex = charset[Math.floor(Math.random() * charset.length)];
		password += randomIndex;
	}
	return password;
}

function fillPasswords() {
	const password1 = generate(15);
	const password2 = generate(15);
	passwordField1.textContent = password1;
	passwordField2.textContent = password2;
	console.log(`password 1 length is ${password1.length} chars`);
	console.log(`password 2 length is ${password2.length} chars`);
}
