import { POST, GET } from "../config/api.config";

export function submitVolunteerForm(uid, formData) {
  return POST(`/api/admin/submit-volunteer/${uid}`, formData);
}

export function getVolunteerForm(uid) {
  return GET(`/api/user/get-user-details/${uid}`);
}