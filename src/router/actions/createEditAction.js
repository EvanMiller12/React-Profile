import { redirect } from "react-router-dom";

import {
  isEmailValid,
  isPasswordValid,
  isFullNameValid,
  isPhoneValid
} from "../../utilities/validators";

import { toE164Int } from "../../utilities/formatters";

import { currentUser } from "../../auth";

async function createEditAction({ request }) {
  const userEmail = currentUser?.email;
  const user = currentUser.get(userEmail);

  const formData = await request.formData();
  const email = formData.get("email") || user?.email || null;
  const password = formData.get("password") || user?.password || null;
  const fullName = formData.get("fullName") || user?.fullName || null;
  const favColor = formData.get("favColor") || user?.favColor || null;

  if (!email || !password || !fullName || !favColor) {
    return {
      error: "Please complete the required fields"
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

  // validate full name requirements
  const fullNameIsValid = isFullNameValid(fullName);
  if (!fullNameIsValid) {
    return {
      error: "Full name must be a minimum of 3 characters"
    };
  }

  let phone = formData.get("phone") || user?.phone || null;
  // check if phone input value due to being optional
  if (phone) {
    const phoneIsValid = isPhoneValid(phone);
    if (phoneIsValid) {
      phone = toE164Int(phone);
    } else {
      return {
        error: "Phone number must be atleast between 10 and 11 characters"
      };
    }
  }

  // Sign in and redirect to the proper destination if successful.
  try {
    await currentUser.update(email, password, phone, fullName, favColor);
    const user = JSON.stringify(currentUser);
    localStorage.setItem(currentUser.email, user);
    // console.log(currentUser, "here");
  } catch (error) {
    // handle invalid email/password combinations
    return {
      error: "Correct the errors displayed"
    };
  }

  return redirect("/profile");
}

export default createEditAction;
