let emailInput = document.querySelector('#email')
let emailText = document.querySelector('#email-text')

let usernameInput = document.querySelector('#username')
let usernameText = document.querySelector('#username-text')

let passwordInput = document.querySelector('#password')
let passwordText = document.querySelector('#password-text')

const btn = document.querySelector('#submit-btn')
let ShowHidePass = document.querySelector('#show-hide-pass');

let Modal1 = document.querySelector('.modal-container-1');
let okBtn1 = document.querySelector('#ok-btn');

let Modal2 = document.querySelector('.modal-container-2');
let okBtn2 = document.querySelector('#ok-btn-2');


btn.addEventListener("click", (e) => {
  e.preventDefault();
  let emailValue = emailInput.value;
  let usernameValue = usernameInput.value;
  let passwordValue = passwordInput.value;


  if (!emailValue || !usernameValue || !passwordValue) {
    Modal2.classList.add('active')
    okBtn2.addEventListener("click", () => {
      Modal2.classList.remove('active')
      emailInput.value = "";
      usernameInput.value  = "";
      passwordInput.value = "";

      emailText.textContent = ""
      emailInput.style.borderColor = "";
      emailInput.style.borderStyle = "";
      
      usernameText.textContent = ""
      usernameInput.style.borderColor = "";
      usernameInput.style.borderStyle = "";

      passwordText.textContent = "";
      passwordInput.style.borderStyle = "";
      passwordInput.style.borderColor = "";
    })
  }
  else if(!emailValue.includes("@") || usernameValue.length < 8 || passwordValue.length < 6 )
  {
    Modal2.classList.add('active')
    okBtn2.addEventListener("click", () => {
      Modal2.classList.remove('active')
      emailInput.value = "";
      usernameInput.value  = "";
      passwordInput.value = "";

      emailText.textContent = ""
      emailInput.style.borderColor = "";
      emailInput.style.borderStyle = "";
      
      usernameText.textContent = ""
      usernameInput.style.borderColor = "";
      usernameInput.style.borderStyle = "";

      passwordText.textContent = "";
      passwordInput.style.borderStyle = "";
      passwordInput.style.borderColor = "";
    })
  }

  else {
    Modal1.classList.add('active')
    okBtn1.addEventListener("click", () => {
      Modal1.classList.remove('active')
      emailInput.value = "";
      usernameInput.value = "";
      passwordInput.value = "";

      emailText.textContent = ""
      emailInput.style.borderColor = "";
      emailInput.style.borderStyle = "";
      
      usernameText.textContent = ""
      usernameInput.style.borderColor = "";
      usernameInput.style.borderStyle = "";

      passwordText.textContent = "";
      passwordInput.style.borderStyle = "";
      passwordInput.style.borderColor = "";
    })
  }

});

emailInput.addEventListener("input", (e) => {
  e.preventDefault();

  if(emailInput.value.includes("@")) {
    emailText.textContent = ""
    emailInput.style.borderColor = "green";
    emailInput.style.borderStyle = "solid";
  }
  else {
    emailInput.style.borderColor = "red";
    emailText.textContent = "Email must contain a @ symbol"
  }
});


usernameInput.addEventListener("input", (e) => {
  e.preventDefault();

  if(usernameInput.value.length >= 8) {
    usernameText.textContent = ""
    usernameInput.style.borderColor = "green";
    usernameInput.style.borderStyle = "solid";
  }
  else {
    usernameText.textContent = "Username must be at least 8 characters long";
    usernameInput.style.borderColor = "red";
    usernameInput.style.borderStyle = "solid";
  }
});

passwordInput.addEventListener("input", (e) => {
  e.preventDefault();

  if(passwordInput.value.length < 6){
    passwordText.textContent = "Password is weak"
    passwordInput.style.borderStyle = "solid";
    passwordInput.style.borderColor = "red";
  }
  else if (passwordInput.value.length >= 6 && passwordInput.value.length <= 10) {
    passwordText.textContent = "Password is medium"
    passwordInput.style.borderStyle = "solid";
    passwordInput.style.borderColor = "yellow";
  }
  else{
    passwordText.textContent = "Password is strong"
    passwordInput.style.borderStyle = "solid";
    passwordInput.style.borderColor = "green";
  }
});

ShowHidePass.addEventListener("click", (e) => {
  e.preventDefault();

  if(passwordInput.getAttribute("type") === "password") {
    ShowPass();
  }
  else if (passwordInput.getAttribute("type") === "text") {
    HidePass();
  }
})


function HidePass() {
  passwordInput.setAttribute("type", "password");
  ShowHidePass.textContent = "Hide";
}

function ShowPass() {
  passwordInput.setAttribute("type", "text");
  ShowHidePass.textContent = "Show";
}


