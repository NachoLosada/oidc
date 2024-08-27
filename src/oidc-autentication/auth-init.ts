import { userManager } from "./user-manager.ts";

userManager
  .getUser()
  .then((user) => {
    if (!user) {
      userManager.signinRedirect();
    } else {
      console.log("User already logged in:", user);
    }
  })
  .catch((err) => {
    console.error("Error checking user authentication:", err);
  });
