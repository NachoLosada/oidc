import { UserManagerSettings } from "oidc-client-ts";

const oidcConfig: UserManagerSettings = {
  authority: "https://preproduccio.login.siep.justicia.gencat.cat",
  client_id: "vtvdv",
  redirect_uri: "http://localhost:5173",
  redirectMethod: "replace",
  response_type: "code",
  scope: "openid",
  filterProtocolClaims: true,
  loadUserInfo: true,
};

// const oidcConfig: UserManagerSettings = {
//   authority: "https://demo.duendesoftware.com",
//   client_id: "interactive.public",
//   redirect_uri: "http://localhost:5173/",
//   redirectMethod: "replace",
//   response_type: "code",
//   scope: "openid",
//   filterProtocolClaims: true,
//   loadUserInfo: true,
// };

export default oidcConfig;
