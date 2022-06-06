import { regExpEmail, regExpPassword } from "../constants/regex.constants";

/**
 * 
 * @param {String} email email entered by the user
 * @returns it returns true if the email is valid, i.e. it matches the specified regex else it returns false
 */
export const regexValidateEmail = (email) => regExpEmail.test(email);

/**
 * 
 * @param {String} password password entered by the user
 * @returns it returns true if the password is valid, i.e. it matches the specified regex else it returns false
 */
export const regexValidatePassword = (password) => regExpPassword.test(password);

