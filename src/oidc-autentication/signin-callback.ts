import { LitElement, html } from "lit";
import { userManager } from "./user-manager.ts";

class SigninCallback extends LitElement {
  connectedCallback() {
    super.connectedCallback();
    userManager
      .signinRedirectCallback()
      .then((user) => {
        console.log("User successfully logged in", user);
        window.location.href = "/";
      })
      .catch((err) => {
        console.error("Error during signin callback", err);
      });
  }

  render() {
    return html`<p>Processing sign-in...</p>`;
  }
}

customElements.define("signin-callback", SigninCallback);
