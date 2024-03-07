// format phone number in
// E.164 International Format: ex.
// +15615128712.
export function toE164Int(phone) {
  // check if phone is already in E.164 format
  if (/^\+[1-9]\d{1,14}$/.test(phone)) {
    return phone;
  }
  // else strip phone of special chars
  const strippedPhone = phone.replace(/[^0-9a-z]/gi, "");
  // format in E.164
  const formattedPhone = "+1".concat(strippedPhone);
  return formattedPhone;
}
