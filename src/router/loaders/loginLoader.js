import { redirect } from "react-router-dom";
import { currentUser } from "../../auth";

async function loginLoader() {
  const isAuthenticated = sessionStorage.getItem("isLoggedIn");

  if (isAuthenticated) {
    currentUser.isAuthenticated = true;
    return redirect("/");
  }
  return null;
}

export default loginLoader;
