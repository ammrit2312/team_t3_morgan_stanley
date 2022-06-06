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
