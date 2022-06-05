/**
 * For: Username
 * @type {RegExp}
 * Conditions:
 * - Must be lowercase only. Upper case letters are not allowed.
 * - Must start with a lowercase letter.
 * - Must contain atleast one lowercase letter
 * - Must contain at least one number
 * - Must be atleast 5 characters long
 * - Underscore is allowed
 * - period is allowed
 */
export const regExpUsername = /^[a-z][a-z0-9_.]{1,29}$/;

export const regExpEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})$/;

/**
 * For: Password
 * @type {RegExp}
 * Conditions:
 * - Must be atleast 8 characters long, upto 20 characters long
 * - Atleast 1 uppercase letter
 * - Atleast 1 lowercase letter
 * - Atleast 1 number
 * - Atleast 1 special character
 */
export const regExpPassword =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
