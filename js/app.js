const loginBtn = document.querySelector(".btn-login");
const form = document.getElementById("form");
const email = document.getElementById("email");
const password = document.getElementById("password");
const pMsg = document.querySelector(".p-msg");
const eMsg = document.querySelector(".e-msg");

form.onsubmit = (e) => {
    let messages = [];

    //check inputs values if empty

    if (!email.value || email.value == "") {
        messages.push("Email is required");
    } else if (email.value.length < 10) {
        messages.push("Email lenght shaude bigger than 10 caracters ");
    }

    if (!password.value || password.value == "") {
    }

    const pattern = \[a-zA-Z0-9_\.\+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-\.]+

    //delect classes added after delay
    setTimeout(() => {
        pMsg.textContent = "";
        eMsg.textContent = "";
        email.classList.remove("border-red");
        password.classList.remove("border-red");
    }, 1500);

    //check if we have errors
    if (messages.length > 0) {
        e.preventDefault();
        eMsg.innerHTML = messages.join(" ,");
    }
};
