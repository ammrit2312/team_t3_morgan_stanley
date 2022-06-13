import { POST, GET, PUT } from "../config/api.config";

export function createNewAccount(user) {
  console.log("API USER",user);
  // const { UserID, Email, Filled_Form, AccountType} = user;

  // Only the necessary data is being sent to the server
  // const userData = {
  //   UserID,
  //   Email,
  //   Filled_Form,
  //   AccountType,
  // };

  return POST(`/api/user/post-user-details`, user);
}

export function getExistingAccount(uid) {
  return GET(`/api/user/get-user-details/${uid}`);
}

export function deleteVolunteer(uid){
  return PUT(`/api/admin/list-delete-volunteer/${uid}`);
}