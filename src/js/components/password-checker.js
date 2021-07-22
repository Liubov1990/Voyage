import {Modal} from "bootstrap";

if (window.location.pathname === "/registration.html") {
  const pass = document.getElementById("user_password");
  const passConfirm = document.getElementById("confirm_password");
  const requirements = document.querySelector(".requirements");
  const form = document.querySelector("form");
  const myModal = new Modal(document.getElementById('exampleModal'), {backdrop: 'static', keyboard: false});
  const inputOkColor = "rgba(29, 210, 175, 0.2)";
  const denyColor = "#ffc0cb";

  const checkInputSymbols = () => {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/;

    return pass.value.length >= 6 && pass.value.match(regex);
  };

  pass.addEventListener("input", checkFirstPass);
  passConfirm.addEventListener("focusout", checkPassEquality);

  pass.addEventListener("focus", () => {
    requirements.style.display = "block";
    if (checkInputSymbols()) {
      requirements.style.display = "none";
    }
  });

  function checkFirstPass() {
    if (checkInputSymbols()) {
      requirements.style.display = "none";
    } else {
      requirements.style.display = "block";
    }
  }

  function checkPassEquality() {
    if (pass.value === passConfirm.value && pass.value.length >= 6 && passConfirm.value.length >= 6) {
      pass.style.background = inputOkColor;
      passConfirm.style.background = inputOkColor;
    } else {
      pass.style.background = denyColor;
      passConfirm.style.background = denyColor;
      setTimeout(() => {
        alert("These passwords don't match. Please, try again");
      }, 0);
    }
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    myModal.show();
  });
}
