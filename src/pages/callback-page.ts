import { html, css, LitElement } from "lit";
import { UserManager } from "oidc-client-ts";
import oidcConfig from "./../oidc-autentication/auth-config";

const userManager = new UserManager(oidcConfig);

class CallbackPage extends LitElement {
  static styles = css`
    /* Estilos aquí */
  `;

  async firstUpdated() {
    try {
      await userManager.signinRedirectCallback();
      window.location.href = "/"; // Redirige a la página principal después de la autenticación
    } catch (err) {
      console.error("Error during authentication:", err);
    }
  }

  render() {
    return html`<div>Loading...</div>`;
  }
}

customElements.define("callback-page", CallbackPage);
