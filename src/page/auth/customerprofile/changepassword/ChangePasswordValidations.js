
import CommonMessage from '../../../../helper/messages/CommonMessage'
// User validation
export const ChangePasswordValidations = (values) => {
  const {
    new_password_required,
    password_more_than_characters,
    password_cannot_more_than_characters,
    password_formate,
    confirm_password_required,
    confirm_password_mismatch,
    current_password_required
  } = CommonMessage;
  const errors = {};

  const regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
  // current password
  if (!values.current_password) {
    errors.current_password = current_password_required;
  } 
   
  //new Password
  if (!values.new_password) {
    errors.new_password = new_password_required;
  } else if (values.new_password.length < 8) {
    errors.new_password = password_more_than_characters;
  } else if (values.new_password.length > 16) {
    errors.new_password = password_cannot_more_than_characters;
  } else if (!regexPassword.test(values.new_password)) {
    errors.new_password = password_formate;
  }

  // Confirm Password
  if (!values.confirm_password) {
    errors.confirm_password = confirm_password_required;
  } else if (values.new_password !== values.confirm_password) {
    if (!errors.new_password) {
      errors.confirm_password = confirm_password_mismatch;
    } else {
      errors.new_password = confirm_password_mismatch;
    }
  }

  return errors;
};
// End