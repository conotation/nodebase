"use strict"

const id = document.querySelector("input#uid");
const password = document.querySelector("input#upw");
const btn = document.querySelector("button");

function login() {
	const req = {
		id: id.value,
		password: password.value,
	}

	fetch('/login', {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(req)
	});
}

btn.addEventListener('click', login);
