import {Modal} from "bootstrap";

if (location.pathname === "/agent-login.html") {
    const customerForm = document.querySelector(".customer-form");
    const customerModal = new Modal(document.getElementById('agentLogInModal'), {backdrop: 'static', keyboard: false});

    customerForm.addEventListener("submit", (event) => {
        event.preventDefault();
        customerModal.show();
      });
  }
  