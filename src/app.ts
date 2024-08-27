import { html, css, LitElement } from "lit";
import { login, logout, getUser, userManager } from "./../src/oidc-autentication/user-manager";

class App extends LitElement {
  static styles = css`
  `;

  async firstUpdated() {
    if (window.location.search.includes("code=")) {
      try {
        await userManager.signinCallback();
        console.log("Sign-in callback handled");
      } catch (error) {
        console.error("Error handling sign-in callback", error);
      }
    }

    const user = await getUser();
    if (user) {
      console.log("User:", user);
    } else {
      console.log("No user");
    }
  }

  render() {
    return html`
      <div>
        <button @click=${login}>Login</button>
        <button @click=${logout}>Logout</button>
        <button @click=${getUser}>Get User</button>

      </div>
    `;
  }
}

customElements.define("app-element", App);
