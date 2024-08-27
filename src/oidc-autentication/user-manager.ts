import { UserManager } from "oidc-client-ts";
import oidcConfig from "./auth-config";

export const userManager = new UserManager(oidcConfig);

export const login = () => {
  userManager.signinRedirect();
};

export const logout = () => {
  userManager.signoutRedirect();
};

export const getUser = async () => {
  console.log(await userManager.getUser());

  return userManager.getUser();
};
