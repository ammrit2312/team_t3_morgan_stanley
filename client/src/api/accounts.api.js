import { POST, GET } from "../config/api.config";

export function createNewAccount(user) {
  console.log(user);
  const { UserID, Email, Filled_Form, AccountType} = user;

  // Only the necessary data is being sent to the server
  const userData = {
    UserID,
    Email,
    Filled_Form,
    AccountType,
  };

  return POST(`/api/user/post-user-details`, userData);
}

export function getExistingAccount(uid) {
  return GET(`/api/user/get-user-details/${uid}`);
}