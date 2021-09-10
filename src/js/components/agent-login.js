import { Modal } from "bootstrap";

if (location.pathname === "/agent-login.html") {
  const agentForm = document.querySelector(".agent-form");
  const agentModal = new Modal(document.getElementById("agentLogInModal"), { backdrop: "static", keyboard: false });

  agentForm.addEventListener("submit", event => {
    event.preventDefault();
    agentModal.show();
  });
}
