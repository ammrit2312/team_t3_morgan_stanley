import { POST, GET } from "../config/api.config";

export function getAllActivities() {
  return GET(`/api/admin/list-all-activities`);
}

export function getAllBasicDetailsOfUsers() {
  return GET(`/api/admin/get-volunteer-basic-details`);
}