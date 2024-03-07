import { redirect } from "react-router-dom";
import { currentUser } from "../../auth";

import { isEmailValid, isPasswordValid } from "../../utilities/validators";

async function loginAction({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");

  // Validate our form inputs and return validation errors via useActionData()
  if (!email || !password) {
    return {
      error: "Please complete the required fields to log in"
    };
  }

  // validate email structure
  const emailIsValid = isEmailValid(email);
  if (!emailIsValid) {
    return {
      error: "Please enter a valid email"
    };
  }

  // validate pw requirements
  const pwIsValid = isPasswordValid(password);
  if (!pwIsValid) {
    return {
      error:
        "Please make sure your password is between 10 - 32 letters, numbers, and special characters. There must be at least 2 uppercase, 2 numbers and 1 special character."
    };
  }

  // check for user in local storage
  const preParsed = localStorage.getItem(currentUser.email);
  if (preParsed) {
    const user = JSON.parse(preParsed);
    const userEmail = user.email;
    const userPw = user.password;
    // check stored user email and pw vs form inputs
    const emailAndPwMatch = email === userEmail && password === userPw;
    if (!emailAndPwMatch) {
      return {
        error: "Incorrect email or password"
      };
    }
  }

  // Sign in and redirect to the proper destination if successful.
  try {
    await currentUser.signin(email, password);
  } catch (error) {
    // handle invalid email/password combinations
    return {
      error: "Invalid login attempt"
    };
  }

  const redirectTo = formData.get("redirectTo");
  return redirect(redirectTo || "/");
}

export default loginAction;
