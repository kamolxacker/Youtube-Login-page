const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
signupBtn.onclick = () => {
  loginForm.style.marginLeft = "-50%";
  loginText.style.marginLeft = "-50%";
};
loginBtn.onclick = () => {
  loginForm.style.marginLeft = "0%";
  loginText.style.marginLeft = "0%";
};
signupLink.onclick = () => {
  signupBtn.click();
  return false;
};

// logica = main js code

let signUpForm = document.getElementById("signupForm");
let loginUpForm = document.getElementById("loginForm");

signUpForm.addEventListener("submit", (evt) => {
    evt.preventDefault()

    let saveInfo = {
        name: evt.target[0].value,
        email: evt.target[1].value,
        password: evt.target[2].value,
        confirmPassword: evt.target[3].value,
    };

    window.localStorage.setItem("user", JSON.stringify(saveInfo));
    evt.target[0].value = null
    evt.target[1].value = null
    evt.target[2].value = null
    evt.target[3].value = null

    // Account yaratildi, endi Login formaga qaytaramiz
    loginBtn.click();
})

loginUpForm.addEventListener("submit", (evt) => {
    evt.preventDefault()

    let userData = JSON.parse(localStorage.getItem("user"));

    let loginEmail = evt.target[0].value
    let loginPassword = evt.target[1].value

    if (userData && userData.email == loginEmail && userData.password == loginPassword) {
        window.location.href = "https://www.youtube.com";
    } else {
        alert("Parol noto'g'ri yoki bunday email mavjud emas")
    }
})

document.querySelectorAll(".toggle-eye").forEach((eye) => {
    eye.addEventListener("click", () => {
        const input = eye.previousElementSibling;
        if (input.type === "password") {
            input.type = "text";
            eye.textContent = "🙈";
        } else {
            input.type = "password";
            eye.textContent = "👁️";
        }
    });
});