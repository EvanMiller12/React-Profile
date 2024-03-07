// validate email structure
export function isEmailValid(email) {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailRegex.test(email);
}

// validate correct characters in password
// min of 2 upperCase chars
// min of 2 numbers
// min of 1 specialChar
// length: 10-32 chars
export function isPasswordValid(pw) {
  const pwRegex = /^(?=.*[a-z])(?=.*[A-Z].*[A-Z])(?=.*\d.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{10,32}$/;
  return pwRegex.test(pw);
}

// validate full name, min of 3 chars
export function isFullNameValid(fullName) {
  const minOfThreeCharsRegex = /(.*[a-z]){3}/i;
  return minOfThreeCharsRegex.test(fullName);
}

// validate phone number structure
export function isPhoneValid(phone) {
  const phoneRegex = /^(1[ -]?)?\d{3}[ -]?\d{3}[ -]?\d{4}$/;
  const e164Regex = /^\+[1-9]\d{1,14}$/;
  return phoneRegex.test(phone) || e164Regex.test(phone);
}
