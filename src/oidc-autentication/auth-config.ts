import { UserManagerSettings } from "oidc-client-ts";

const oidcConfig: UserManagerSettings = {
  authority: "https://preproduccio.login.siep.justicia.gencat.cat",
  client_id: "epvt-extranet",
  redirect_uri: "https://preproduccio.login.siep.justicia.gencat.cat",
  post_logout_redirect_uri: "http://localhost:5173/",
  response_type: "code",
  scope: "openid",
  filterProtocolClaims: true,
  loadUserInfo: true,
};

export default oidcConfig;
