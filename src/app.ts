import { html, css, LitElement } from "lit";
import { login, logout, getUser } from "./../src/oidc-autentication/user-manager";

class App extends LitElement {
  static styles = css`
    /* Estilos aquí */
  `;

  async firstUpdated() {
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
      </div>
    `;
  }
}

customElements.define("app-element", App);
