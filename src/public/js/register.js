"use strict"

const id = document.getElementById("id"),
    name = document.getElementById("name"),
    password = document.getElementById("password"),
    confirm_password = document.getElementById("confirm-password"),
    button = document.getElementById("button")

function register() {

    if (!id.value) 
        return alert("아이디를 입력해주세요")

    if (password.value !== confirm_password.value)
        return alert("비밀번호가 일치하지 않습니다.")

    const req = {
        id: id.value,
        name: name.value,
        password: password.value,
    }

    fetch('/register', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(req)
        }).then((res) => res.json())
        .then((res) => {
            console.log(res)
            if (res.success) {
                location.href = "/login"
            } else {
                alert("실패")
            }
        })
        .catch((err) => {
            console.error(new Error("Error Occur"))
        });
}

button.addEventListener('click', register);